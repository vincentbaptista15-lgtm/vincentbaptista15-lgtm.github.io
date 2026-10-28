const recipes = [
  {id:"adobo",name:"Chicken Adobo",category:"Chicken",time:"55 min",difficulty:"Easy",servings:"4 servings",image:"images/adobo.jpg",description:"A Filipino classic with tender chicken simmered in soy sauce, vinegar, garlic, bay leaves, and pepper.",ingredients:["1 kg chicken pieces","1/2 cup soy sauce","1/2 cup vinegar","1 cup water","8 cloves garlic, crushed","2 bay leaves","1 tsp whole peppercorns","1 tbsp cooking oil"],steps:["Mix the chicken, soy sauce, and crushed garlic in a bowl. Let it marinate for at least 20 minutes if you have time.","Heat oil in a pot. Lightly brown the chicken pieces on all sides.","Pour in the marinade, water, bay leaves, and peppercorns. Bring to a gentle boil.","Add the vinegar. Let it simmer for a few minutes before stirring, then cover and cook for 30–35 minutes or until the chicken is tender.","Taste the sauce. Simmer uncovered to thicken it, then serve hot with steamed rice."]},
  {id:"sinigang",name:"Pork Sinigang",category:"Pork",time:"1 hr 15 min",difficulty:"Easy",servings:"4–5 servings",image:"images/pork%20sinigang.jpg",description:"A comforting sour soup with pork, tomatoes, vegetables, and a tangy tamarind broth.",ingredients:["700 g pork ribs or pork belly","1 onion, quartered","2 tomatoes, chopped","1 packet tamarind soup mix or tamarind paste","1 radish, sliced","1 eggplant, sliced","1 bunch kangkong","6 cups water","Fish sauce, to taste"],steps:["Put pork, onion, tomatoes, and water in a pot. Bring to a boil and skim off any foam.","Lower the heat and simmer for about 45–60 minutes, until the pork is tender.","Add the tamarind mix or paste. Taste the broth and adjust the sourness.","Add radish and eggplant. Cook for 5–8 minutes until almost tender.","Add kangkong last and cook for 1–2 minutes. Season with fish sauce and serve hot."]},
  {id:"lumpia",name:"Lumpiang Shanghai",category:"Snack",time:"45 min",difficulty:"Medium",servings:"25–30 pieces",image:"images/lumpia%20shanghai.jpg",description:"Crispy Filipino spring rolls filled with seasoned ground pork and vegetables.",ingredients:["500 g ground pork","1 small carrot, finely grated","1 small onion, minced","3 cloves garlic, minced","1 egg","2 tbsp soy sauce","Salt and pepper, to taste","25–30 lumpia wrappers","Cooking oil, for frying"],steps:["In a bowl, combine ground pork, carrot, onion, garlic, egg, soy sauce, salt, and pepper.","Place a wrapper on a clean surface. Add a small line of filling near one edge.","Fold the sides inward, roll tightly, and seal the edge with a little water.","Heat oil in a deep pan over medium heat. Fry in batches, turning until golden and cooked through.","Drain on a rack or paper towel. Let cool slightly and serve with sweet chili sauce or a vinegar dip."]},
  {id:"pinakbet",name:"Pinakbet",category:"Vegetable",time:"40 min",difficulty:"Easy",servings:"4 servings",image:"images/pinakbet.jpg",description:"A vegetable-rich Ilocano dish with squash, eggplant, okra, bitter melon, and bagoong.",ingredients:["200 g squash, cubed","1 eggplant, sliced","6 okra, trimmed","1 small bitter melon, sliced","1 tomato, chopped","1 onion, sliced","2 cloves garlic, minced","1–2 tbsp bagoong","1 cup water"],steps:["Wash and cut all vegetables into bite-sized pieces.","Sauté garlic, onion, and tomato in a pot until fragrant and softened.","Stir in bagoong, then add water and bring to a simmer.","Add squash first and cook for a few minutes. Add eggplant, okra, and bitter melon.","Cover and simmer until the vegetables are tender but not mushy. Taste and adjust seasoning before serving."]},
  {id:"sisig",name:"Pork Sisig",category:"Pork",time:"45 min",difficulty:"Medium",servings:"3–4 servings",image:"images/pork%20sisig.jpg",description:"A sizzling, savory, and tangy pork dish with onion, calamansi, and a little chili.",ingredients:["500 g cooked pork belly or grilled pork","1 onion, finely chopped","2 tbsp calamansi juice","1 tbsp soy sauce","1–2 green chilies, chopped","1 tbsp mayonnaise (optional)","Salt and pepper, to taste"],steps:["Chop the cooked pork into small pieces.","Heat a pan and cook the pork until the edges become crisp.","Add the onion and chili, then stir-fry for 2–3 minutes.","Mix in calamansi juice and soy sauce. Season with pepper and taste before adding salt.","Turn off the heat and stir in mayonnaise if desired. Serve immediately, ideally on a hot plate."]},
  {id:"tortang-talong",name:"Tortang Talong",category:"Vegetable",time:"30 min",difficulty:"Easy",servings:"2 servings",image:"images/tortang%20talong.jpg",description:"Smoky grilled eggplant dipped in beaten egg and pan-fried until golden.",ingredients:["2 large eggplants","2 eggs","1 small tomato, chopped (optional)","Salt and pepper","2 tbsp cooking oil"],steps:["Grill or roast the eggplants until the skin is charred and the flesh is soft.","Let cool, then peel the skin while keeping the stem attached. Flatten each eggplant with a fork.","Beat eggs with salt, pepper, and tomato if using. Dip each flattened eggplant into the egg.","Heat oil in a pan over medium heat. Fry each eggplant until golden on both sides and cooked through.","Serve with rice and a dipping sauce of your choice."]},
  {id:"kwek-kwek",name:"Kwek-Kwek",category:"Appetizer",time:"30 min",difficulty:"Easy",servings:"4 servings",image:"images/kwekkwek.jpg",description:"Crispy orange-battered quail eggs served with a tangy vinegar dipping sauce.",ingredients:["20 quail eggs","1/2 cup all-purpose flour","1/2 cup cornstarch","1/2 tsp annatto powder","1/2 cup water","1/2 tsp salt","Cooking oil, for frying","Vinegar and chopped onion, for dipping"],steps:["Boil the quail eggs for 4 minutes, then cool them in cold water and peel carefully.","Whisk flour, cornstarch, annatto, salt, and water into a smooth, thick batter.","Dust the peeled eggs lightly with flour, then coat each one in batter.","Fry in hot oil in batches until crisp and cooked through. Drain on a rack or paper towel.","Serve warm with vinegar and chopped onion for dipping."]},
  {id:"tokwa-baboy",name:"Tokwa't Baboy",category:"Appetizer",time:"45 min",difficulty:"Easy",servings:"4 servings",image:"images/tokwa%27t%20baboy.jpg",description:"Crisp tofu and tender pork tossed with onion in a savory, tangy vinegar sauce.",ingredients:["300 g firm tofu, cubed","250 g pork belly","1/3 cup vinegar","2 tbsp soy sauce","1/2 small onion, thinly sliced","1 clove garlic, minced","1 tsp sugar","Cooking oil, for frying","Salt and pepper, to taste"],steps:["Simmer the pork belly in salted water until tender, about 25–30 minutes. Drain and slice.","Fry tofu cubes in oil until golden and crisp on all sides. Drain well.","Mix vinegar, soy sauce, garlic, sugar, and pepper to make the dressing.","Combine the pork, tofu, and sliced onion in a serving bowl.","Pour the dressing over the mixture and serve while the tofu is still crisp."]},
  {id:"lumpiang-togue",name:"Lumpiang Togue",category:"Appetizer",time:"40 min",difficulty:"Medium",servings:"12 rolls",image:"images/lumpiang%20togue.jpg",description:"Golden Filipino vegetable spring rolls filled with mung bean sprouts and carrots.",ingredients:["2 cups mung bean sprouts (togue)","1 small carrot, cut into thin strips","1/2 cup green beans, sliced","1 small onion, chopped","2 cloves garlic, minced","12 lumpia wrappers","1 tbsp soy sauce","Cooking oil, for frying"],steps:["Sauté garlic and onion in a little oil until fragrant.","Add carrot and green beans; cook for 2 minutes, then add sprouts and soy sauce. Cook until just tender and cool the filling.","Place a spoonful of filling near one edge of each wrapper.","Fold in the sides and roll tightly, sealing the edge with a little water.","Fry in batches until golden and crisp. Drain and serve with a vinegar or sweet chili dip."]},
  {id:"tapsilog",name:"Tapsilog",category:"Breakfast",time:"35 min",difficulty:"Easy",servings:"2 servings",image:"images/tapsilog.jpg",description:"A hearty Filipino breakfast of marinated beef tapa, garlic rice, and a fried egg.",ingredients:["300 g beef sirloin, thinly sliced","2 tbsp soy sauce","1 tbsp calamansi or lemon juice","2 cloves garlic, minced","2 cups cooked rice","2 eggs","1 tbsp cooking oil","Salt and pepper, to taste"],steps:["Combine beef, soy sauce, calamansi juice, garlic, and pepper. Marinate for at least 20 minutes.","Heat a pan with a little oil and cook the beef in batches until browned and cooked through.","In the same pan, add a little oil and sauté one minced garlic clove until fragrant.","Add the cooked rice, season lightly with salt, and stir-fry until hot.","Fry the eggs to your preference and serve with the tapa and garlic rice."]},
  {id:"champorado",name:"Champorado",category:"Breakfast",time:"45 min",difficulty:"Easy",servings:"4 servings",image:"images/champorado.jpg",description:"A comforting chocolate rice porridge, traditionally enjoyed with a little evaporated milk.",ingredients:["1 cup glutinous rice","5 cups water","1/2 cup cocoa powder or chopped tablea","1/3 cup sugar, or to taste","Evaporated milk, for serving","Pinch of salt"],steps:["Rinse the glutinous rice and place it in a pot with the water and salt.","Bring to a boil, then lower the heat and simmer, stirring often, until the rice is soft and the mixture thickens.","Whisk cocoa powder with a little hot water until smooth, or melt the tablea in a small amount of hot water.","Stir the chocolate mixture and sugar into the rice porridge.","Simmer for 5 minutes, then serve warm with evaporated milk."]},
  {id:"arroz-caldo",name:"Arroz Caldo",category:"Breakfast",time:"1 hr",difficulty:"Easy",servings:"4 servings",image:"images/arroz%20caldo.jpg",description:"Ginger-scented chicken and rice porridge finished with calamansi and toasted garlic.",ingredients:["500 g chicken pieces","1 cup rice","6 cups chicken stock or water","1 thumb-sized piece ginger, sliced","1 small onion, chopped","3 cloves garlic, minced","1 tbsp fish sauce","Calamansi and toasted garlic, for serving"],steps:["Sauté garlic, onion, and ginger in a pot until fragrant.","Add the chicken and cook until lightly browned. Stir in the fish sauce.","Add rice and stock, bring to a boil, then lower the heat.","Simmer for 40–45 minutes, stirring occasionally, until the rice breaks down and the chicken is tender. Add water if it gets too thick.","Serve hot with calamansi and toasted garlic."]},
  {id:"chicken-tinola",name:"Chicken Tinola",category:"Lunch",time:"1 hr",difficulty:"Easy",servings:"4 servings",image:"images/chicken%20tinola.jpg",description:"A light ginger chicken soup with green papaya and leafy moringa or spinach.",ingredients:["700 g chicken pieces","1 small green papaya, peeled and sliced","1 thumb-sized piece ginger, julienned","1 onion, sliced","6 cups water or chicken stock","2 tbsp fish sauce","2 cups chili leaves, spinach, or moringa leaves","1 tbsp cooking oil"],steps:["Heat oil in a pot and sauté ginger and onion until fragrant.","Add chicken and fish sauce. Cook for 4–5 minutes, turning the pieces.","Pour in water or stock and bring to a boil. Skim off any foam.","Cover and simmer for 30 minutes, then add the green papaya and cook until tender.","Stir in the leaves and cook just until wilted. Serve hot with rice."]},
  {id:"beef-kare-kare",name:"Beef Kare-Kare",category:"Lunch",time:"2 hr",difficulty:"Medium",servings:"5 servings",image:"images/beef%20kare%20kare.jpg",description:"A rich peanut stew with tender beef and vegetables, served with bagoong on the side.",ingredients:["700 g beef shank or oxtail","1/2 cup peanut butter","1/4 cup ground toasted rice","1 eggplant, sliced","1 bunch string beans, cut into lengths","1 bunch bok choy","1 onion, quartered","6 cups water","Bagoong, for serving"],steps:["Simmer beef and onion in water until tender, about 1 1/2–2 hours. Reserve the broth.","Whisk peanut butter and ground toasted rice with 1 cup warm broth until smooth.","Return the beef to the pot and stir in the peanut mixture. Simmer gently until thickened.","Add eggplant and string beans; cook until tender. Add bok choy near the end.","Serve hot with bagoong on the side."]},
  {id:"pancit-bihon",name:"Pancit Bihon",category:"Lunch",time:"45 min",difficulty:"Easy",servings:"4 servings",image:"images/pancit%20bihon.jpg",description:"Stir-fried rice noodles with chicken, vegetables, and a bright squeeze of calamansi.",ingredients:["250 g bihon rice noodles","250 g chicken breast, sliced","1 carrot, cut into strips","1 cup cabbage, shredded","1 small onion, sliced","2 cloves garlic, minced","3 tbsp soy sauce","2 cups chicken stock","Calamansi, for serving"],steps:["Soak the bihon noodles in warm water until pliable, then drain.","Sauté garlic and onion in a large pan. Add chicken and cook through.","Add carrot, cabbage, soy sauce, and stock. Bring to a simmer.","Add the noodles and toss gently until they absorb the liquid and become tender.","Serve with calamansi wedges."]},
  {id:"bicol-express",name:"Bicol Express",category:"Dinner",time:"50 min",difficulty:"Medium",servings:"4 servings",image:"images/bicol%20express.jpg",description:"A creamy, spicy pork stew simmered with coconut milk, chilies, and shrimp paste.",ingredients:["600 g pork belly, cubed","1 can (400 ml) coconut milk","1 cup coconut cream","5 green chilies, sliced","1 small onion, chopped","3 cloves garlic, minced","1 tbsp shrimp paste (bagoong alamang)","1 tbsp cooking oil"],steps:["Heat oil in a pot and sauté garlic and onion until fragrant.","Add pork and cook until lightly browned.","Stir in shrimp paste, then pour in coconut milk.","Cover and simmer gently until the pork is tender and the sauce thickens, about 30 minutes.","Add chilies and coconut cream. Simmer for 5–8 minutes and serve with rice."]},
  {id:"beef-mechado",name:"Beef Mechado",category:"Dinner",time:"2 hr",difficulty:"Medium",servings:"5 servings",image:"images/beef%20mechado.jpg",description:"A Filipino tomato-based beef stew with potatoes, carrots, and a touch of calamansi.",ingredients:["700 g beef chuck, cubed","1 onion, chopped","3 cloves garlic, minced","1 can (400 g) crushed tomatoes","2 cups beef stock or water","2 potatoes, cubed","1 carrot, sliced","2 tbsp soy sauce","1 tbsp calamansi or lemon juice","2 tbsp cooking oil"],steps:["Heat oil in a heavy pot and brown the beef in batches. Set aside.","Sauté onion and garlic in the same pot, then stir in crushed tomatoes.","Return beef to the pot and add stock, soy sauce, and calamansi juice.","Cover and simmer gently until the beef is tender, about 1 1/2 hours. Add a little water if needed.","Add potatoes and carrot; simmer until tender. Taste and season before serving."]},
  {id:"laing",name:"Laing",category:"Dinner",time:"1 hr 15 min",difficulty:"Easy",servings:"4 servings",image:"images/laing.jpg",description:"A Bicolano dish of dried taro leaves slowly cooked in coconut milk and chilies.",ingredients:["50 g dried taro leaves","400 ml coconut milk","200 ml coconut cream","100 g pork belly, sliced (optional)","1 thumb-sized piece ginger, sliced","3 cloves garlic, minced","1 small onion, sliced","3 small chilies","1 tbsp shrimp paste, optional"],steps:["Place the taro leaves in a pot with coconut milk, ginger, garlic, onion, chilies, and shrimp paste if using.","Bring to a gentle simmer without stirring so the leaves settle into the liquid.","Cover and cook on low heat for 35–45 minutes, until the leaves are soft and fully cooked.","Stir in coconut cream and add the pork if using; simmer until the pork is cooked and the sauce is rich.","Taste and adjust seasoning. Serve hot with rice."]}
];

const tips = [
  {icon:"🧄",title:"Make garlic fragrant, not burnt",text:"Cook garlic over medium or medium-low heat and stir often. Add it after the oil warms up; burnt garlic can taste bitter.",tags:"garlic burn oil"},
  {icon:"🍶",title:"Balance vinegar in adobo",text:"After adding vinegar, let it simmer briefly before stirring. Taste the sauce near the end and balance it with a little water or soy sauce.",tags:"vinegar adobo sauce"},
  {icon:"🥩",title:"Brown meat for more flavor",text:"Pat meat dry and avoid overcrowding the pan. Browning adds color and a deeper roasted flavor.",tags:"meat browning pork chicken"},
  {icon:"🧂",title:"Season little by little",text:"Soy sauce, fish sauce, and bagoong are salty. Add a small amount first, then taste before adding more.",tags:"salt seasoning soy fish sauce"},
  {icon:"🥬",title:"Keep vegetables bright",text:"Add quick-cooking leafy vegetables near the end. This helps keep their color and prevents them from becoming too soft.",tags:"vegetables kangkong cooking"},
  {icon:"🍋",title:"Add sourness gradually",text:"For sinigang and dipping sauces, add calamansi or tamarind a little at a time. Taste as you go.",tags:"sour sinigang calamansi tamarind"}
];

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const detailSection = document.getElementById("recipeDetail");
const themeToggle = document.getElementById("themeToggle");
let activeCategory = "All";
let selectedRecipe = null;
let currentStep = 0;

const savedTheme = localStorage.getItem("pinoyKitchenTheme");
document.body.classList.toggle("dark-mode", savedTheme === "dark");
themeToggle.textContent = savedTheme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
themeToggle.setAttribute("aria-pressed", String(savedTheme === "dark"));
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDarkMode ? "☀️ Light mode" : "🌙 Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  localStorage.setItem("pinoyKitchenTheme", isDarkMode ? "dark" : "light");
});

function renderRecipes() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = recipes.filter(r => (activeCategory === "All" || r.category === activeCategory) &&
    (r.name.toLowerCase().includes(term) || r.description.toLowerCase().includes(term) || r.category.toLowerCase().includes(term)));
  const mealCategories = ["Breakfast", "Lunch", "Dinner"];
  const renderCards = items => items.map(r => `
    <article class="recipe-card" tabindex="0" role="button" aria-label="View ${r.name}" data-id="${r.id}">
      <img class="food-image" src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.src='https://placehold.co/800x500/e7efe5/285c43?text=Pinoy+Kitchen'">
      <div class="recipe-card-body"><div class="card-meta"><span class="category-pill">${r.category}</span><span>⏱ ${r.time}</span></div>
      <h3>${r.name}</h3><p>${r.description}</p><span class="card-link">View recipe →</span></div>
    </article>`).join("");
  recipeGrid.innerHTML = renderCards(visible.filter(r => !mealCategories.includes(r.category)));
  mealCategories.forEach(category => {
    const recipesInCategory = visible.filter(r => r.category === category);
    const section = document.getElementById(`${category.toLowerCase()}Section`);
    document.getElementById(`${category.toLowerCase()}Grid`).innerHTML = renderCards(recipesInCategory);
    section.classList.toggle("hidden", recipesInCategory.length === 0);
  });
  emptyMessage.classList.toggle("hidden", visible.length > 0);
}
function openRecipe(id) {
  selectedRecipe = recipes.find(r => r.id === id);
  if (!selectedRecipe) return;
  currentStep = 0;
  document.getElementById("detailTitle").textContent = selectedRecipe.name;
  document.getElementById("detailDescription").textContent = selectedRecipe.description;
  const img = document.getElementById("detailImage");
  img.src = selectedRecipe.image; img.alt = selectedRecipe.name;
  img.onerror = () => { img.src = "https://placehold.co/900x600/e7efe5/285c43?text=Pinoy+Kitchen"; };
  document.getElementById("detailMeta").textContent = `⏱ ${selectedRecipe.time}  ·  ${selectedRecipe.difficulty}  ·  ${selectedRecipe.servings}`;
  document.getElementById("ingredientList").innerHTML = selectedRecipe.ingredients.map(i => `<li>${i}</li>`).join("");
  detailSection.classList.remove("hidden");
  renderStep();
  detailSection.scrollIntoView({behavior:"smooth",block:"start"});
}
function renderStep() {
  if (!selectedRecipe) return;
  document.getElementById("stepCounter").textContent = `Step ${currentStep + 1} of ${selectedRecipe.steps.length}`;
  document.getElementById("stepNumber").textContent = String(currentStep + 1).padStart(2,"0");
  document.getElementById("stepText").textContent = selectedRecipe.steps[currentStep];
  document.getElementById("prevStep").disabled = currentStep === 0;
  document.getElementById("prevStep").style.opacity = currentStep === 0 ? ".45" : "1";
  const next = document.getElementById("nextStep");
  next.textContent = currentStep === selectedRecipe.steps.length - 1 ? "Finish ✓" : "Next step →";
}
function clearSelection() {
  selectedRecipe = null;
  detailSection.classList.add("hidden");
  showToast("Selection cleared!");
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}
function renderTips(query = "") {
  const term = query.trim().toLowerCase();
  const visible = tips.filter(t => `${t.title} ${t.text} ${t.tags}`.toLowerCase().includes(term));
  document.getElementById("tipsGrid").innerHTML = visible.map(t => `<article class="tip-card"><span class="tip-icon">${t.icon}</span><h3>${t.title}</h3><p>${t.text}</p></article>`).join("");
}

document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderRecipes();
});
searchInput.addEventListener("input", renderRecipes);
document.querySelectorAll(".recipe-grid").forEach(grid => {
  grid.addEventListener("click", e => {
    const card = e.target.closest("[data-id]");
    if (card) openRecipe(card.dataset.id);
  });
  grid.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-id]");
      if (card) { e.preventDefault(); openRecipe(card.dataset.id); }
    }
  });
});
document.getElementById("randomBtn").addEventListener("click", () => {
  const choice = recipes[Math.floor(Math.random() * recipes.length)];
  openRecipe(choice.id);
  showToast(`Today's random dish: ${choice.name}`);
});
document.getElementById("prevStep").addEventListener("click", () => { if (currentStep > 0) { currentStep--; renderStep(); } });
document.getElementById("nextStep").addEventListener("click", () => {
  if (!selectedRecipe) return;
  if (currentStep < selectedRecipe.steps.length - 1) { currentStep++; renderStep(); }
  else { showToast(`${selectedRecipe.name} is ready to serve!`); }
});
document.getElementById("closeDetail").addEventListener("click", clearSelection);
document.getElementById("clearSelection").addEventListener("click", clearSelection);
document.getElementById("tipSearch").addEventListener("input", e => renderTips(e.target.value));
document.getElementById("showAllTips").addEventListener("click", () => { document.getElementById("tipSearch").value = ""; renderTips(); });
document.getElementById("backToTop").addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
renderRecipes();
renderTips();
