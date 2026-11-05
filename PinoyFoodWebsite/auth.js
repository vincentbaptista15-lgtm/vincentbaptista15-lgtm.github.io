import { firebaseConfig } from "./firebase-config.js";

const authDialog = document.getElementById("authDialog");
const authMessage = document.getElementById("authMessage");
const accountButton = document.getElementById("accountButton");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerPasswordInput = registerForm.elements.namedItem("password");
const googleSignInButton = document.getElementById("googleSignIn");
const authActionControls = document.querySelectorAll("[data-auth-action]");
window.pinoyAuthState = {
  currentUser: null,
  isReady: false,
  userName: "Guest",
  email: "Sign in to save your own recipes."
};
let auth = null;
let firebaseAuth = null;
let configurationMessage = "";

function notifyAuthStateChange() {
  document.dispatchEvent(new CustomEvent("auth-state-changed", {
    detail: { ...window.pinoyAuthState }
  }));
}

function setAuthMessage(message) {
  authMessage.textContent = message;
}

function setAuthActionsEnabled(enabled) {
  authActionControls.forEach(control => { control.disabled = !enabled; });
}

function getPasswordRequirements(password) {
  return {
    length: password.length >= 12,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password)
  };
}

function updatePasswordRequirements() {
  const requirements = getPasswordRequirements(registerPasswordInput.value);
  Object.entries(requirements).forEach(([rule, isMet]) => {
    const item = registerForm.querySelector(`[data-password-rule="${rule}"]`);
    item.classList.toggle("met", isMet);
    item.setAttribute("aria-label", `${item.textContent}: ${isMet ? "met" : "not met"}`);
  });
}

function showAuthForm(form) {
  const isRegistering = form === registerForm;
  const showRegisterButton = document.getElementById("showRegister");
  const showLoginButton = document.getElementById("showLogin");

  loginForm.classList.toggle("hidden", isRegistering);
  registerForm.classList.toggle("hidden", !isRegistering);
  showRegisterButton.classList.toggle("hidden", isRegistering);
  showLoginButton.classList.toggle("hidden", !isRegistering);
  document.getElementById("authHeading").textContent = isRegistering ? "Create your account" : "Log in to your account";
  setAuthMessage(auth ? "" : configurationMessage);
}

function getErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "That email already has an account. Try logging in instead.",
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/operation-not-allowed": "Enable this sign-in method in Firebase Authentication settings.",
    "auth/popup-blocked": "Allow pop-up windows to continue with Google sign-in.",
    "auth/popup-closed-by-user": "The Google sign-in window was closed before finishing.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
    "auth/unauthorized-domain": "Add this website's domain to Firebase Authentication's Authorized domains.",
    "auth/weak-password": "Choose a stronger password that meets all the requirements."
  };
  return messages[error.code] || "Authentication failed. Please check your details and try again.";
}

document.getElementById("authClose").addEventListener("click", () => authDialog.close());
accountButton.addEventListener("click", async () => {
  if (auth?.currentUser) {
    try {
      await firebaseAuth.signOut(auth);
      setAuthMessage("You have been signed out.");
    } catch (error) {
      console.error("Firebase sign-out failed:", error);
      setAuthMessage(getErrorMessage(error));
    }
    return;
  }
  showAuthForm(loginForm);
  authDialog.showModal();
});
document.getElementById("showRegister").addEventListener("click", () => showAuthForm(registerForm));
document.getElementById("showLogin").addEventListener("click", () => showAuthForm(loginForm));

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!auth) return;
  const formData = new FormData(loginForm);
  try {
    await firebaseAuth.signInWithEmailAndPassword(auth, formData.get("email"), formData.get("password"));
  } catch (error) {
    console.error("Firebase login failed:", error);
    setAuthMessage(getErrorMessage(error));
  }
});

registerForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!auth) return;
  const formData = new FormData(registerForm);
  const username = String(formData.get("displayName")).trim();
  const password = String(formData.get("password"));
  const confirmation = String(formData.get("confirmPassword"));

  if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) {
    setAuthMessage("Use a username with 3–20 letters, numbers, or underscores.");
    return;
  }
  if (Object.values(getPasswordRequirements(password)).some(isMet => !isMet)) {
    setAuthMessage("Your password must meet every requirement listed above.");
    return;
  }
  if (password !== confirmation) {
    setAuthMessage("The passwords do not match.");
    return;
  }

  try {
    const credential = await firebaseAuth.createUserWithEmailAndPassword(auth, formData.get("email"), password);
    await firebaseAuth.updateProfile(credential.user, {displayName: username});
  } catch (error) {
    console.error("Firebase registration failed:", error);
    setAuthMessage(getErrorMessage(error));
  }
});

registerPasswordInput.addEventListener("input", updatePasswordRequirements);

googleSignInButton.addEventListener("click", async () => {
  if (location.protocol === "file:") {
    setAuthMessage("Google sign-in needs the site opened on localhost or over HTTPS. Use Live Server or another local web server and try again.");
    return;
  }
  if (!auth) return;
  try {
    await firebaseAuth.signInWithPopup(auth, new firebaseAuth.GoogleAuthProvider());
  } catch (error) {
    console.error("Google sign-in failed:", error);
    setAuthMessage(getErrorMessage(error));
  }
});

async function initializeFirebaseAuth() {
  if (location.protocol === "file:") {
    configurationMessage = "Google sign-in needs the site opened on localhost or over HTTPS. Run it from a local web server like Live Server and try again.";
    setAuthMessage(configurationMessage);
    setAuthActionsEnabled(false);
    return;
  }

  const requiredConfig = ["apiKey", "authDomain", "projectId", "appId"];
  const hasConfig = requiredConfig.every(key => typeof firebaseConfig[key] === "string" && firebaseConfig[key].trim());
  if (!hasConfig) {
    configurationMessage = "To enable accounts, add your Firebase web app settings in firebase-config.js, enable Email/Password and Google under Firebase Authentication > Sign-in method, and authorize this site's domain.";
    setAuthMessage(configurationMessage);
    setAuthActionsEnabled(false);
    return;
  }

  try {
    const sdkUrl = "https://www.gstatic.com/firebasejs/13.2.0/";
    const [appSdk, authSdk] = await Promise.all([
      import(`${sdkUrl}firebase-app.js`),
      import(`${sdkUrl}firebase-auth.js`)
    ]);
    const app = appSdk.initializeApp(firebaseConfig);
    auth = authSdk.getAuth(app);
    firebaseAuth = authSdk;
    setAuthActionsEnabled(true);
    authSdk.onAuthStateChanged(auth, user => {
      window.pinoyAuthState.currentUser = user;
      window.pinoyAuthState.isReady = true;
      window.pinoyAuthState.userName = user?.displayName || user?.email || "Guest";
      window.pinoyAuthState.email = user?.email || "Sign in to save your own recipes.";
      accountButton.textContent = user ? "Sign out" : "Log in";
      accountButton.setAttribute("aria-label", user ? `Sign out ${user.displayName || user.email}` : "Log in or sign up");
      if (user) {
        setAuthMessage(`Signed in as ${user.displayName || user.email}.`);
        if (authDialog.open) authDialog.close();
      }
      notifyAuthStateChange();
    });
  } catch (error) {
    console.error("Firebase Authentication could not be initialized:", error);
    configurationMessage = "Firebase couldn't be loaded. Check your web app settings and internet connection, then try again.";
    setAuthMessage(configurationMessage);
    setAuthActionsEnabled(false);
  }
}

setAuthActionsEnabled(false);
initializeFirebaseAuth();
