/* Racoonnoisseur — house menu data
   Transcribed directly from the restaurant's wine pairing sheet and
   staff menu-knowledge training binder. Keep this file as the
   single source of truth — app.js only reads from it.
   Dish/drink names and ingredients are kept exactly as printed on the
   real menu (accuracy matters more than anonymity here) — only the
   restaurant's own name has been scrubbed from the surrounding app text. */

const WINES = [
  {
    id: 'wine-sette-roche',
    sourcePage: 'Wine List, p.1',
    name: "Sette Roche Vino Spumante Extra Dry (Bubble)",
    category: 'wine', subcategory: 'sparkling',
    varietal: 'Glera & Italian white blend (Sparkling)',
    region: 'Veneto, Italy',
    blurb: 'Light, crisp, refreshing. Green apple, pear, citrus with soft bubbles and an off-dry finish.',
    pairings: 'Charcuterie, fried shared plates, popcorn, seafood, light cheeses.',
    tags: ['sparkling', 'crisp', 'citrus', 'apple-pear', 'light']
  },
  {
    id: 'wine-cantina-soliera',
    sourcePage: 'Wine List, p.1',
    name: 'Cantina di Soliera Lambrusco Salamino Semi-Dry (Bubble)',
    category: 'wine', subcategory: 'sparkling',
    varietal: 'Lambrusco, Salamino',
    region: 'Emilia-Romagna, Italy',
    blurb: 'Light-bodied, light bubbles. Blackberry, cherry, raspberry with gentle sweetness & bright acidity.',
    pairings: 'Board, Burgers, cured meats, barbecue, spicy dishes, charcuterie.',
    pairsWithFoodIds: ['food-barbaretta-board'],
    tags: ['sparkling', 'berry', 'sweet', 'bbq']
  },
  {
    id: 'wine-muralhas-rose',
    sourcePage: 'Wine List, p.1',
    name: 'Muralhas de Monção "Muralhas Rosé" (Rose Sangria)',
    category: 'wine', subcategory: 'rose',
    varietal: 'Alvarelhão & Pedral',
    region: 'Vinho Verde, Portugal',
    blurb: 'Fresh, vibrant strawberry, raspberry, watermelon, citrus, crisp acidity. Very popular, "summer vibes."',
    pairings: 'Salads, seafood, goat cheese, patio.',
    tags: ['rose', 'berry', 'citrus', 'light', 'crisp']
  },
  {
    id: 'wine-sandro-de-bruno',
    sourcePage: 'Wine List, p.1',
    name: 'Sandro De Bruno Pinot Grigio Ramato (Skin of grape in there longer = pinky)',
    category: 'wine', subcategory: 'white',
    varietal: 'Pinot Grigio (skin-contact)',
    region: 'Veneto, Italy',
    blurb: 'Peach, apricot, orange peel, wild herbs — more texture than a traditional Pinot Grigio because the skin stays on the grape longer (gives it the pink/"ramato" color).',
    pairings: 'Burrata, roasted vegetables, grilled chicken, pork, salmon, linguini.',
    tags: ['stone-fruit', 'orange-wine', 'herbal', 'textured']
  },
  {
    id: 'wine-cantina-levorato',
    sourcePage: 'Wine List, p.1',
    name: 'Cantina Levorato Pinot Grigio (White)',
    category: 'wine', subcategory: 'white',
    varietal: 'Pinot Grigio',
    region: 'Veneto, Italy',
    blurb: 'Clean, crisp and dry. Lemon, green apple, pear with refreshing minerality.',
    pairings: 'Chicken, soft cheeses, white fish, salads, light pasta.',
    tags: ['crisp', 'citrus', 'apple-pear', 'light']
  },
  {
    id: 'wine-nuestro-verdejo',
    sourcePage: 'Wine List, p.1',
    name: 'Nuestro Verdejo (White)',
    category: 'wine', subcategory: 'white',
    varietal: 'Verdejo',
    region: 'Rueda, Spain',
    blurb: 'Bright, aromatic. Lime, grapefruit, green melon, herbs with refreshing acidity.',
    pairings: 'Seafood, tacos, grilled vegetables, chicken.',
    tags: ['citrus', 'herbal', 'crisp', 'tropical']
  },
  {
    id: 'wine-jackson-estate',
    sourcePage: 'Wine List, p.1',
    name: 'Jackson Estate "Stitch" Sauvignon Blanc (White)',
    category: 'wine', subcategory: 'white',
    varietal: 'Sauvignon Blanc',
    region: 'Marlborough, New Zealand',
    blurb: 'Passionfruit, grapefruit, lime, gooseberry and fresh-cut herbs with lively acidity. Crisp and accessible — think Oyster Bay/Kim Crawford style.',
    pairings: 'Shellfish, goat cheese, salads, asparagus, fish tacos, herb-forward dishes.',
    tags: ['tropical', 'citrus', 'herbal', 'crisp', 'seafood']
  },
  {
    id: 'wine-lafazanis-geometria',
    sourcePage: 'Wine List, p.1',
    name: 'Lafazanis "Geometria" Sauvignon Blanc (White) (Kayla Favourite)',
    category: 'wine', subcategory: 'white',
    varietal: 'Moschofilero',
    region: 'Peloponnese, Greece',
    blurb: 'Floral and aromatic. Rose petals, citrus blossom, peach, lemon zest with a crisp, delicate finish. (Dry Dry)',
    pairings: 'Seafood, salads, hummus, feta, grilled vegetables, chicken, Dip Trio, Chicken & Risotto',
    pairsWithFoodIds: ['food-dip-trio', 'food-chicken-risotto'],
    tags: ['floral', 'stone-fruit', 'citrus', 'crisp']
  },
  {
    id: 'wine-featherstone-riesling',
    sourcePage: 'Wine List, p.1',
    name: 'Featherstone Estate "Black Sheep" Riesling (White)',
    category: 'wine', subcategory: 'white',
    varietal: 'Riesling',
    region: 'Niagara Peninsula, Ontario',
    blurb: 'Dry with bright acidity. Lime, green apple, peach and minerality. Refreshing and food-friendly.',
    pairings: 'Asian cuisine, pork, seafood, smoked salmon, fresh salads.',
    tags: ['citrus', 'stone-fruit', 'apple-pear', 'crisp']
  },
  {
    id: 'wine-novellum-chardonnay',
    sourcePage: 'Wine List, p.1',
    name: 'Novellum Chardonnay (White)',
    category: 'wine', subcategory: 'white',
    varietal: 'Chardonnay',
    region: 'Languedoc-Roussillon, France',
    blurb: 'Medium-bodied. Peach, pear, citrus and subtle vanilla with light oak influence and balanced acidity.',
    pairings: 'Roast chicken, creamy pasta, pork, mushrooms, soft cheeses',
    tags: ['stone-fruit', 'oak', 'vanilla', 'medium-body']
  },
  {
    id: 'wine-saint-preignan',
    sourcePage: 'Wine List, p.2',
    name: 'Saint Preignan Pinot Noir',
    category: 'wine', subcategory: 'red',
    varietal: 'Pinot Noir',
    region: "Pays d'Oc, Languedoc, France",
    blurb: 'Light-bodied with bright cherry, raspberry, cranberry, subtle earthy notes. Silky tannins and refreshing acidity.',
    pairings: 'Duck, salmon, roasted chicken, mushroom, tenderloin, board.',
    pairsWithFoodIds: ['food-carpaccio', 'food-barbaretta-board'],
    tags: ['berry', 'earthy', 'light', 'silky-tannins']
  },
  {
    id: 'wine-cusumano-merlot',
    sourcePage: 'Wine List, p.2',
    name: 'Cusumano Merlot',
    category: 'wine', subcategory: 'red',
    varietal: 'Merlot',
    region: 'Sicily, Italy',
    blurb: 'Medium-bodied with plum, blackberry, black cherry, cocoa and soft spice. Smooth tannins and approachable finish.',
    pairings: 'Burgers, pork, roasted vegetables.',
    tags: ['plum', 'berry', 'chocolate-coffee', 'smooth-tannins']
  },
  {
    id: 'wine-foris-fly-over',
    sourcePage: 'Wine List, p.2',
    name: 'Foris Vineyard "Fly Over" Red Blend',
    category: 'wine', subcategory: 'red',
    varietal: 'Red Blend (Cabernet Sauvignon, Syrah, Tempranillo & others)',
    region: 'Rogue Valley, Oregon, USA',
    blurb: 'Medium to full-bodied. Blackberry, dark cherry, blueberry, baking spice and mocha with balanced acidity.',
    pairings: 'Steak, barbecue, lamb, hearty pasta dishes.',
    tags: ['berry', 'chocolate-coffee', 'spice', 'bold-tannic', 'bbq']
  },
  {
    id: 'wine-domaine-garriguettes',
    sourcePage: 'Wine List, p.2',
    name: 'Domaine des Garriguettes "Fleur de Lune" Rouge',
    category: 'wine', subcategory: 'red',
    varietal: 'Grenache, Syrah, Carignan Blend',
    region: 'Southern Rhône, France',
    blurb: 'Ripe raspberry, blackberry, herbs, pepper and subtle earthy notes. Medium-bodied with smooth tannins.',
    pairings: 'Lamb, grilled meats, charcuterie, roasted vegetables',
    tags: ['berry', 'herbal', 'spice', 'earthy', 'smooth-tannins']
  },
  {
    id: 'wine-spier-block-5',
    sourcePage: 'Wine List, p.2',
    name: 'Spier "Creative Block 5"',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon-based Bordeaux Blend',
    region: 'Stellenbosch, South Africa',
    blurb: 'Full-bodied. Blackcurrant, cassis, cedar, dark chocolate and firm structure. Elegant and age-worthy.',
    pairings: 'Ribeye, aged cheddar.',
    tags: ['cassis', 'chocolate-coffee', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-conejo-malbec',
    sourcePage: 'Wine List, p.2',
    name: 'Conejo Verde Malbec',
    category: 'wine', subcategory: 'red',
    varietal: 'Malbec',
    region: 'Mendoza, Argentina',
    blurb: 'Full-bodied with blackberry, plum, blueberry, cocoa and violet. Smooth finish with moderate tannins.',
    pairings: 'Steak, chimichurri, burgers, barbecue, blue cheese.',
    tags: ['berry', 'plum', 'chocolate-coffee', 'floral', 'bbq']
  },
  {
    id: 'wine-amulet-cabernet',
    sourcePage: 'Wine List, p.2',
    name: 'Amulet Estate "75 Wine Company" Cabernet Sauvignon',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon',
    region: 'California, USA',
    blurb: 'Full-bodied. Blackcurrant, blackberry cassis, vanilla, cedar, and baking spice with structured tannins.',
    pairings: 'Ribeye, New York strip, pork chops, aged cheeses.',
    tags: ['berry', 'plum', 'spice', 'vanilla', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-cavallo-syrah',
    sourcePage: 'Wine List, p.2',
    name: 'Cavallo Syrah',
    category: 'wine', subcategory: 'red',
    varietal: 'Syrah',
    region: 'Western Cape, South Africa',
    blurb: 'Full-bodied with blackberry, plum, black pepper, smoked meat and dark chocolate. Rich with savoury complexity.',
    pairings: 'Lamb, grilled steak, smoked meats, barbecue.',
    tags: ['berry', 'smoky', 'chocolate-coffee', 'savory-umami', 'bbq']
  },
  {
    id: 'wine-gate22-navigator',
    sourcePage: 'Wine List, p.2',
    name: 'Gate 22 "The Navigator" Cabernet Sauvignon',
    category: 'wine', subcategory: 'red',
    varietal: 'Cabernet Sauvignon',
    region: 'British Columbia, Canada',
    blurb: 'Rich black cherry, cassis, blackberry, cedar and firm but balanced tannins.',
    pairings: 'Steak, mushrooms, hard cheeses.',
    tags: ['cassis', 'berry', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-mary-taylor-bordeaux',
    sourcePage: 'Wine List, p.3',
    name: 'Mary Taylor Bordeaux Rouge',
    category: 'wine', subcategory: 'red',
    varietal: 'Merlot & Cabernet Sauvignon Blend',
    region: 'Bordeaux, France',
    blurb: 'Medium-bodied. Black cherry, plum, cedar, tobacco and earthy minerality with balanced acidity.',
    pairings: 'Red meat, mushroom dishes, charcuterie.',
    tags: ['plum', 'earthy', 'savory-umami', 'medium-body']
  },
  {
    id: 'wine-tenuta-fanti',
    sourcePage: 'Wine List, p.3',
    name: 'Tenuta Fanti "Poggio Torto" IGT ("Baby Super Tuscan")',
    category: 'wine', subcategory: 'red',
    varietal: 'Sangiovese, Merlot & Cabernet Blend',
    region: 'Tuscany, Italy',
    blurb: 'Medium to full-bodied. Cherry, blackberry, herbs, leather, tobacco and balanced oak. Elegant with lively acidity.',
    pairings: 'Red meat, charcuterie.',
    tags: ['berry', 'earthy', 'oak', 'bold-tannic']
  },
  {
    id: 'wine-corral-de-campanas',
    sourcePage: 'Wine List, p.3',
    name: 'Corral de Campanas Tinta de Toro',
    category: 'wine', subcategory: 'red',
    varietal: 'Tempranillo (Tinta de Toro)',
    region: 'Toro, Spain',
    blurb: 'Full-bodied. Blackberry, black plum, espresso, dark chocolate and spice with bold tannins. Powerful and concentrated.',
    pairings: 'Ribeye, charcuterie, hearty pasta.',
    tags: ['berry', 'chocolate-coffee', 'spice', 'bold-tannic']
  },
  {
    id: 'wine-castello-di-radda',
    sourcePage: 'Wine List, p.3',
    name: 'Castello di Radda Chianti Classico',
    category: 'wine', subcategory: 'red',
    varietal: 'Sangiovese',
    region: 'Tuscany, Italy',
    blurb: 'Medium-bodied. Sour cherry, cranberry, dried herbs, leather and earthy minerality with vibrant acidity.',
    pairings: 'Pork, grilled chicken, aged Parmesan.',
    tags: ['berry', 'herbal', 'earthy', 'medium-body']
  }
];

const COCKTAILS = [
  {
    id: 'cocktail-nonnas-bellini',
    sourcePage: 'Menu Knowledge, p.1',
    name: "Not Your Nonna's Bellini",
    category: 'cocktail', subcategory: 'sangria-sparkling',
    blurb: "Back to the roots — a traditional bellini with our own house take: black pepper & plum with our favourite Spumante. NOT a slush drink.",
    composition: 'Black pepper & plum wine syrup, plum brandy, Spumante (= less fizzy)',
    allergens: 'Tannins',
    preset: "Served in a coupe glass, garnished with baby's breath & a mini clothespin.",
    tags: ['sparkling', 'plum', 'spice']
  },
  {
    id: 'cocktail-strawberry-watermelon-sangria',
    sourcePage: 'Menu Knowledge, p.1',
    name: 'Strawberry Watermelon Rosé Sangria (Kayla loves Rose)',
    category: 'cocktail', subcategory: 'sangria',
    blurb: 'Fruit forward, touch of sweet, rosé sangria = splash of summer.',
    composition: 'Rosé wine, white cran & lemon juice, strawberry & watermelon syrup, strawberry liqueur & rose bitters.',
    allergens: 'N/A (Straw)',
    preset: 'Served in a wine glass with fruit, garnished with a watermelon slice.',
    tags: ['berry', 'sweet', 'light', 'floral']
  },
  {
    id: 'cocktail-cherry-berry-sangria',
    sourcePage: 'Menu Knowledge, p.1',
    name: 'Cherry Berry Red Sangria',
    category: 'cocktail', subcategory: 'sangria',
    blurb: 'stonefruit forward, not your typical red sangria - bittersweet',
    composition: 'Red wine, cranberry, cherry, and lemon juice, strawberry & cherry syrup, strawberry liqueur',
    allergens: 'N/A (Straw)',
    preset: 'Served in a wine glass with fruit, garnished with a fresh cherry.',
    tags: ['berry', 'stone-fruit', 'bittersweet']
  },
  {
    id: 'cocktail-kiwinichiwa-mojito',
    sourcePage: 'Menu Knowledge, p.1',
    name: "Kiwi'nichiwa (Mojito)",
    category: 'cocktail', subcategory: 'mojito',
    blurb: "you'll never ask for a standard mojito again - after you've had this. Insert Sake, kiwi, rum, mint, you'll feel refreshed all summer long.",
    composition: "(Diplomatico Secret Barrel White Rum), sake, kiwi syrup, kiwi's, lime juice, mint, soda.",
    allergens: 'N/A (Straw)',
    preset: "Served in a collins glass, garnished with a mint sprig, baby's breath, and dehydrated lime wheel.",
    tags: ['tropical', 'herbal', 'light', 'crisp']
  },
  {
    id: 'cocktail-berry-smooth-operator',
    sourcePage: 'Menu Knowledge, p.2',
    name: 'Berry Smooth Operator (Tequila Sour)',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Refreshing, smooth, well balanced. Pineapple & lemon for brightness, silky foam, if you like a tequila sour, you\'ll enjoy this.',
    composition: 'Cimmaron Blanco Tequila, blueberry syrup, pineapple & lemon juice, egg whites.',
    allergens: 'Egg (No Straw)',
    preset: 'Served in a dbl rocks glass over a king cube (to dilute slower), garnished with bitters, dehydrated lime and a blueberry.',
    tags: ['tropical', 'citrus', 'berry', 'silky-egg-white']
  },
  {
    id: 'cocktail-overboard',
    sourcePage: 'Menu Knowledge, p.2',
    name: 'Overboard',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'A bold mango margarita, topped with a bubble-bath salt foam that rounds out the balance of fruit, salt and tequila.',
    composition: 'Cimmaron Reposado Tequila, Montenegro, mango syrup, lime juice.',
    allergens: 'Soy',
    preset: 'Served in a collins glass with a Tajín rim, garnished with salt foam.',
    tags: ['tropical', 'sweet-savory', 'spicy']
  },
  {
    id: 'cocktail-barbaretta-caesar',
    sourcePage: 'Menu Knowledge, p.2',
    name: 'Barbaretta Caesar',
    category: 'cocktail', subcategory: 'signature',
    blurb: "partnering with all things local - here's the next best caesar. snack on top, spice rack vodka, and house made muddy, oh and dont forget the horseradish",
    composition: 'bbq sauce - made here, tabasco, horseradish, Spice Rack Vodka (Indigenous Woman owned), Clamato, Spice CO (Jaqueline friends) dust rim, pickle, chaga cheddar, brickhouse jerky',
    allergens: 'Fish, jerky, dairy, soy, garlic',
    preset: 'served in a collins glass, Spice CO dust rim, skewered snack, lime wedge, and 8" straw',
    tags: ['savory-umami', 'spicy', 'seafood']
  },
  {
    id: 'cocktail-totally-wired',
    sourcePage: 'Menu Knowledge, p.2',
    name: 'Totally Wired (Espresso on every step)',
    category: 'cocktail', subcategory: 'signature',
    blurb: "doing what we do best, challenging the norm for espresso martinis - here's one packed with flavour and not with just a caffeine kick either.",
    composition: 'Espresso-infused Cimmaron Blanco, Alma Tepec, Black Diamond Coffee Liqueur, Grand Marnier, espresso, simple syrup, dash of black pepper tincture.',
    allergens: 'Caffeine',
    preset: 'Served in a martini glass, garnished with an espresso salt brush.',
    tags: ['chocolate-coffee', 'spice', 'bold']
  },
  {
    id: 'cocktail-hubba-hubba',
    sourcePage: 'Menu Knowledge, p.5',
    name: 'Hubba Hubba',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Feeling nostalgic — cheers to your childhood love of Hubba Bubba.',
    composition: 'Hubba Bubba-infused vodka, Galliano, white cranberry, lemon and lime juice, strawberry & simple syrup.',
    allergens: 'N/A',
    preset: 'Served in a coupe glass, garnished with a sour ribbon.',
    tags: ['sweet', 'berry', 'citrus', 'nostalgic']
  },
  {
    id: 'cocktail-london-london-bridge',
    sourcePage: 'Menu Knowledge, p.5',
    name: 'London London Bridge',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'London fog, meet cocktail — our owner Ashley creation.',
    composition: 'Empress Indigo gin, amaretto (Hawkes), earl grey syrup, lavender syrup, and lemon juice, egg whites.',
    allergens: 'Egg',
    preset: 'Served in a coupe glass, garnished with lavender buds.',
    tags: ['floral', 'tea', 'silky-egg-white']
  },
  {
    id: 'cocktail-playing-with-fire',
    sourcePage: 'Menu Knowledge, p.5',
    name: 'Playing with Fire (Smoky)',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'A classic with a twist — enjoy a great old fashioned with a smoky flavour.',
    composition: 'Woodford Reserve, sugar cube, aromatic Middleton (Stony Plain) bitters, dark cherry, and orange.',
    allergens: 'N/A',
    preset: 'Served in a dbl rocks glass, garnished with an orange twist and skewered dark cherry - smoked.',
    tags: ['smoky', 'bold-tannic', 'stone-fruit']
  },
  {
    id: 'cocktail-black-velvet',
    sourcePage: 'Menu Knowledge, p.5',
    name: 'Black Velvet (if you please)',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'Our signature cocktail-and-wine-list meet — consider this an entry-level step into the smoky and bold section.',
    composition: 'Elijah Craig Bourbon, cabernet sauvignon, blackberry syrup, lime juice.',
    allergens: 'Tannins',
    preset: 'Served in a dbl rocks glass over a round cube, garnished with two skewered blackberries.',
    tags: ['smoky', 'berry', 'bold-tannic']
  },
  {
    id: 'cocktail-honey-old-fashioned',
    sourcePage: 'Menu Knowledge, p.5',
    name: "Honey, I'm Old Fashioned",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: 'The flavour profile of a warm spiced old fashioned, with the refreshing mouthfeel of a whiskey sour.',
    composition: 'Brothers Bond Bourbon, spiced honey syrup, lemon juice, aromatic Middletons bitters, star anise, orange, rosemary.',
    allergens: 'Honey — flag for customers with a honey/bee-product sensitivity',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with star anise, rosemary sprig, and lemon zest.',
    tags: ['spice', 'citrus', 'sweet', 'herbal']
  },
  {
    id: 'cocktail-cherry-bomb',
    sourcePage: 'Menu Knowledge, p.10',
    name: 'Cherry Bomb',
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "House-made cherry soda and bourbon — it'll have you singing \"cha cha cherry bomb.\"",
    composition: 'Elijah Craig Bourbon, cabernet sauvignon, cherry juice, chocolate & cherry syrup, chocolate Middletons bitters, cherry soda.',
    allergens: 'Tannins',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with a single skewered dark cherry.',
    tags: ['chocolate-coffee', 'stone-fruit', 'bold-tannic']
  },
  {
    id: 'cocktail-golden-cobbler',
    sourcePage: 'Menu Knowledge, p.10',
    name: 'Golden Cobbler',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'white port spritzer, fruity, fresh, and inviting.',
    composition: 'Quevado white port, Galliano, Grand Marnier, simple syrup, spiced honey, orange slice.',
    allergens: 'N/A',
    preset: 'Served in a collins glass, garnished with a mint sprig and skewered blackberry.',
    tags: ['sparkling', 'citrus', 'sweet', 'floral']
  },
  {
    id: 'cocktail-spill-the-tea',
    sourcePage: 'Menu Knowledge, p.10',
    name: 'Spill the Tea',
    category: 'cocktail', subcategory: 'signature',
    blurb: 'Blueberry tea and iced teas loved since childhood.',
    composition: 'Bergamotto Fantastico, Toastee Amaretto, orange vanilla syrup, lemon juice, orange pekoe tea, blueberry popping boba, dehydrated orange.',
    allergens: 'N/A',
    preset: 'Served in a collins glass with fruit, garnished with dehydrated orange.',
    tags: ['tea', 'berry', 'citrus', 'sweet']
  },
  {
    id: 'cocktail-cold-morning-pick',
    sourcePage: 'Menu Knowledge, p.10',
    name: 'Cold Morning Pick',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A blueberry shot — herbal & sweet.',
    composition: 'Cimmaron Blanco Tequila, Salvia & Limone, blueberry syrup, grapefruit juice, sage leaf.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['herbal', 'berry', 'citrus']
  },
  {
    id: 'cocktail-pick-me-up',
    sourcePage: 'Menu Knowledge, p.10',
    name: 'Pick Me Up',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A raspberry shot — bittersweet.',
    composition: 'Elderflower Rose Gin, Salvia & Limone, Aperol, raspberry syrup.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['berry', 'floral', 'bittersweet']
  },
  {
    id: 'cocktail-last-pick',
    sourcePage: 'Menu Knowledge, p.11',
    name: 'Last Pick',
    category: 'cocktail', subcategory: 'shot',
    blurb: 'A strawberry shot — savoury & sweet.',
    composition: 'Secret Barrel White Rum, strawberry liqueur, lemon juice, balsamic vinegar, black pepper tincture.',
    allergens: 'N/A',
    preset: 'Served in a shot glass, presented on a side plate with a cocktail napkin.',
    tags: ['berry', 'sweet-savory', 'spice']
  },
  {
    id: 'mocktail-cloud-nine',
    sourcePage: 'Menu Knowledge, p.11',
    name: 'Cloud Nine',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A blood orange amaretto sour — but make it non-alcoholic.',
    composition: 'Noa Amaretto (non-alc), blood orange syrup, lemon juice, egg whites, orange-cranberry Middleton bitters.',
    allergens: 'Egg',
    preset: 'Served in a coupe glass, garnished with blood orange.',
    tags: ['citrus', 'silky-egg-white', 'non-alcoholic']
  },
  {
    id: 'mocktail-mystic-magic',
    sourcePage: 'Menu Knowledge, p.11',
    name: 'Mystic Magic',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A silky mouthfeel, balanced between almond and floral flavours.',
    composition: 'Pea flower-infused Seedlip Garden, almond milk, lemon juice, almond orgeat syrup.',
    allergens: 'Nut',
    preset: 'Served in a dbl rocks glass over a king cube, garnished with a pea flower',
    tags: ['nutty', 'floral', 'non-alcoholic']
  },
  {
    id: 'mocktail-cucumber-spritz',
    sourcePage: 'Menu Knowledge, p.11',
    name: 'Cucumber Spritz',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'A hugo-spritz with tea-inspired flavours — very refreshing.',
    composition: 'Cucumber, chamomile & elderflower syrup, lime juice, soda.',
    allergens: 'N/A',
    preset: 'Served in a wine glass, garnished with chamomile buds and cucumber ribbon.',
    tags: ['herbal', 'floral', 'crisp', 'non-alcoholic']
  },
  {
    id: 'mocktail-pina-not-a-colada',
    sourcePage: 'Menu Knowledge, p.11',
    name: 'Pina Not a Colada',
    category: 'cocktail', subcategory: 'mocktail',
    blurb: 'An orange creamsicle margarita — but make it non-alcoholic.',
    composition: 'Juniper agave, vanilla coconut syrup, orange blossom, orange and lime juice.',
    allergens: 'N/A',
    preset: 'Served in a dbl rocks glass with an orange sugar rim, garnished with a dehydrated orange.',
    tags: ['tropical', 'citrus', 'sweet', 'non-alcoholic']
  }
];

const WELL_LIQUORS = [
  { id: 'liquor-vodka', spirit: 'Vodka', brand: 'Easy Vodka / Snake Lake (Local, Sylvan Lake)' },
  { id: 'liquor-rum', spirit: 'Rum', brand: 'Diplomatico White Rum (Liquor on Macleod)' },
  { id: 'liquor-gin', spirit: 'Gin', brand: 'Anohka (West of Stony, Local)' },
  { id: 'liquor-tequila', spirit: 'Tequila', brand: 'Cimmaron Blanco' },
  { id: 'liquor-rye', spirit: 'Rye/Whiskey', brand: 'Reifel Rye (Same as Crown/Gibson, smoother)' }
];

const FOOD = [
  {
    id: 'food-crispy-brussel-sprouts',
    sourcePage: 'Menu Knowledge, p.8',
    name: 'Crispy Brussel Sprouts',
    category: 'food', subcategory: 'starter',
    blurb: 'Your new favourite way to eat brussels — hot honey glaze, creamy citrus aioli, with a crunch.',
    composition: 'Citrus aioli, toasted almonds, pickled shallot, hot honey glaze, brussels sprouts, pickled fresno.',
    allergens: 'Nuts, nightshade, gluten cross-contamination',
    preset: 'N/A',
    tags: ['sweet-savory', 'crunchy', 'nutty']
  },
  {
    id: 'food-bacon-and-eggs',
    sourcePage: 'Menu Knowledge, p.8',
    name: 'Bacon & Eggs',
    category: 'food', subcategory: 'starter',
    blurb: 'Ask and you shall receive, just like Barbacoa. Can sub GF.',
    composition: 'Bacon marmalade, grainy mustard aioli, pickled jalapeño, maple gastrique, bacon lardon.',
    allergens: 'Egg, pork, nightshade',
    preset: 'N/A',
    tags: ['savory-umami', 'smoky', 'sweet-savory']
  },
  {
    id: 'food-dip-trio',
    sourcePage: 'Menu Knowledge, p.8',
    name: 'Dip Trio',
    category: 'food', subcategory: 'starter',
    blurb: 'Whipped ricotta & truffle honey, charred corn & bacon, and dill pickle dip. Can sub GF crackers',
    composition: 'Barbaretta ricotta, truffle oil, honey, bacon marmalade, charred corn, cream cheese, sour cream, mayo, fresh dill, house pickles, buttermilk, micro greens.',
    allergens: 'Dairy, pork, gluten, egg, garlic',
    preset: 'N/A',
    tags: ['creamy', 'savory-umami', 'earthy']
  },
  {
    id: 'food-sui-mai',
    sourcePage: 'Menu Knowledge, p.8',
    name: 'Sui Mai (Come in 3, can add 1)',
    category: 'food', subcategory: 'starter',
    blurb: '(NOT GF) Juicy pork and shrimp dumpling, cradled in a steamed wonton wrapper — guest favourite since day one.',
    composition: 'Grove City ground pork & prawn dumpling, wonton wrapper, pickled fresno, truffle aioli, chili crunch, cilantro, crispy shallots.',
    allergens: 'Shellfish, pork, gluten, nightshade, soy, sesame, garlic, cilantro',
    preset: 'N/A',
    tags: ['savory-umami', 'spicy', 'seafood']
  },
  {
    id: 'food-burrata',
    sourcePage: 'Menu Knowledge, p.7',
    name: 'Burrata',
    category: 'food', subcategory: 'starter',
    blurb: 'Creamy burrata (GF crackers)',
    composition: 'Burrata, heirloom tomato, charred tomato vinaigrette, pistachio crumble, pomegranate seeds, basil oil, basil, Maldon salt, sourdough.',
    allergens: 'Dairy, gluten, nuts, nightshade, garlic',
    preset: 'Cheese knife.',
    tags: ['creamy', 'nutty', 'fresh']
  },
  {
    id: 'food-smoked-wings',
    sourcePage: 'Menu Knowledge, p.7',
    name: 'Smoked Wings (Can oven bake)',
    category: 'food', subcategory: 'starter',
    blurb: "No need to decide between wing or flat — we give you it all.",
    composition: 'Sweet chili + ginger glaze, blue cheese/ranch dressing.',
    allergens: 'Dairy, soy, gluten cross-contamination, garlic',
    preset: 'Side plate for bones, honor dont offer finger bowl. lemon +water',
    tags: ['smoky', 'spicy', 'sweet-savory']
  },
  {
    id: 'food-goat-cheese-croquettes',
    sourcePage: 'Menu Knowledge, p.7',
    name: 'Goat Cheese Croquettes (Can add another)',
    category: 'food', subcategory: 'starter',
    blurb: 'Warm cheese with a little spice and a refreshing twist.',
    composition: 'Fried goat cheese, pistachio crumb, hot honey glaze, pickled strawberries.',
    allergens: 'Dairy, gluten, nuts, nightshade',
    preset: 'N/A',
    tags: ['creamy', 'sweet-savory', 'nutty']
  },
  {
    id: 'food-barbaretta-board',
    sourcePage: 'Menu Knowledge, p.7',
    name: 'Barbaretta Board (Cheese stays, Meat rotates)',
    category: 'food', subcategory: 'starter',
    blurb: 'A mix of made-in-house and local — featuring cheeses from Barbaretta and Lakeside, accompanied with meats from Brickhouse.',
    composition: 'Lakeside alpine, chaga, and Barbaretta ricotta. Brickhouse jerky, rotating Brickhouse Sausage and Pepperoni, pickled veg, house jam, grainy mustard, olives, and a Barbaretta cracker.',
    allergens: 'Dairy, gluten, rotating allergens (ask about current meat selection)',
    preset: 'Served on plate with gold spoons and a cheese knife. (tong + cheese knife)',
    tags: ['savory-umami', 'creamy', 'shareable']
  },
  {
    id: 'food-carpaccio',
    sourcePage: 'Menu Knowledge, p.4',
    name: 'Carpaccio',
    category: 'food', subcategory: 'salad',
    blurb: 'Spiced Asian-inspired carpaccio.',
    composition: 'North Country beef tenderloin, pickled pear, gochujang sesame vinaigrette, scallions, chili threads, wonton crackers',
    allergens: 'Gluten, nightshade, sesame, garlic',
    preset: 'N/A',
    tags: ['savory-umami', 'spicy', 'fresh']
  },
  {
    id: 'food-market-bowl',
    sourcePage: 'Menu Knowledge, p.4',
    name: 'Market Bowl',
    category: 'food', subcategory: 'salad',
    blurb: 'A summer salad, with a choice of grilled chicken breast or garlic prawns.',
    composition: 'Fresh greens, arugula, pickled golden beets, quinoa, pickled carrots, goat cheese, green goddess dressing, avocado.',
    allergens: 'Avocado, dairy, garlic',
    preset: 'N/A',
    tags: ['fresh', 'creamy', 'light']
  },
  {
    id: 'food-crispy-chicken-salad',
    sourcePage: 'Menu Knowledge, p.4',
    name: 'Crispy Chicken Salad',
    category: 'food', subcategory: 'salad',
    blurb: 'Crispy fried chicken, bed of baby greens, charred corn, and chaga cheddar, herbed ranch for a balance of crunch, fresh, and creamy.',
    composition: 'KFC chicken thigh, baby greens, shaved radish, pickled shallots, charred corn, toasted pecans, lakeside chaga cheddar, buttermilk herb ranch, hickory sticks.',
    allergens: 'Dairy, gluten, nuts, garlic',
    preset: 'N/A',
    tags: ['crunchy', 'creamy', 'savory-umami']
  },
  {
    id: 'food-bulgogi-blue-steak-salad',
    sourcePage: 'Menu Knowledge, p.4',
    name: 'Bulgogi Blue Steak Salad',
    category: 'food', subcategory: 'salad',
    blurb: 'Sweet and savoury Korean-style flavours, baby greens, grilled vegetables, tangy blue cheese dressing.',
    composition: 'Bulgogi-marinated North Country sirloin, baby greens, arugula, pickled fresno, grilled bell peppers, pickled pears, charred scallions, buttermilk blue cheese dressing, crispy wontons.',
    allergens: 'Dairy, gluten, nightshade, soy, garlic',
    preset: 'Steak knife.',
    tags: ['savory-umami', 'sweet-savory', 'smoky']
  },
  {
    id: 'food-kfc',
    sourcePage: 'Menu Knowledge, p.3',
    name: 'KFC',
    category: 'food', subcategory: 'main',
    blurb: "Messy but worth it — we'll bring you extra napkins.",
    composition: 'KFC chicken thigh, gochujang maple glaze, togarashi aioli, cucumber pickled salad, brioche bun.',
    allergens: 'Gluten, nightshade, sesame, garlic, soy, egg, dairy',
    preset: 'Extra napkins.',
    tags: ['sweet-savory', 'spicy', 'crunchy']
  },
  {
    id: 'food-truffle-mushroom-burger',
    sourcePage: 'Menu Knowledge, p.3',
    name: 'Truffle Mushroom Lux Burger',
    category: 'food', subcategory: 'main',
    blurb: 'Go big or go home — swapping out the smash for a step up featuring a thick and gooey mornay sauce.',
    composition: 'Truffle gruyère mornay, sautéed mushrooms, grilled onions, baby greens, grainy mustard aioli, 6oz AAA Grove City ground beef patties',
    allergens: 'Gluten, dairy, egg, garlic, soy',
    preset: 'N/A',
    tags: ['savory-umami', 'creamy', 'earthy']
  },
  {
    id: 'food-halibut',
    sourcePage: 'Menu Knowledge, p.3',
    name: 'Halibut',
    category: 'food', subcategory: 'main',
    blurb: 'Pistachio-crusted halibut (very juicy, white fish) served with a rhubarb beurre blanc (white wine butter sauce).',
    composition: 'Pistachio-crusted halibut, rhubarb beurre blanc, grilled asparagus, pickled shallots, strawberry vinaigrette.',
    allergens: 'Dairy, gluten, seafood, nut, garlic',
    preset: 'N/A',
    tags: ['seafood', 'nutty', 'creamy', 'fruit-forward']
  },
  {
    id: 'food-chicken-risotto',
    sourcePage: 'Menu Knowledge, p.9',
    name: 'Chicken & Risotto',
    category: 'food', subcategory: 'main',
    blurb: 'Creamy risotto, fresh veggies, lemon gremolata, accompanied with herb/lemon chicken supreme.',
    composition: 'Lemon-herbed chicken supreme, peas, asparagus, risotto, smoked gouda, lemon gremolata.',
    allergens: 'Dairy, gluten, garlic',
    preset: 'N/A',
    tags: ['creamy', 'citrus', 'comfort']
  },
  {
    id: 'food-north-country-steak',
    sourcePage: 'Menu Knowledge, p.9',
    name: 'North Country Steak',
    category: 'food', subcategory: 'main',
    blurb: 'Traditional composed steak dinner, with options for house butters, prawns, and mushrooms.',
    composition: '12oz ribeye or 10oz striploin, warm potato salad (corn, celery, bacon marmalade, egg), grilled vegetable.',
    allergens: 'Dairy, egg, pork',
    preset: 'Steak knife.',
    tags: ['meaty-beef', 'savory-umami', 'smoky']
  },
  {
    id: 'food-pork-chop',
    sourcePage: 'Menu Knowledge, p.9',
    name: 'Pork Chop',
    category: 'food', subcategory: 'main',
    blurb: 'Pork chop cooked to the chef\'s recommendation of medium.',
    composition: 'Maple chili-glazed pork chop, roasted fingerling potatoes, grilled corn & jalapeño salsa, cilantro, hickory sticks.',
    allergens: 'Pork, nightshade, garlic, soy, gluten cross-contamination, cilantro',
    preset: 'Steak knife.',
    tags: ['sweet-savory', 'spicy', 'smoky']
  },
  {
    id: 'food-linguini',
    sourcePage: 'Menu Knowledge, p.9',
    name: 'Linguini',
    category: 'food', subcategory: 'main',
    blurb: 'pesto, burrata, heirloom tomatoes, choice of grilled chicken breast, halibut, or garlic prawns',
    composition: 'Creamy basil pesto, heirloom tomatoes, burrata, basil lemon gremolata',
    allergens: 'Dairy, gluten, nightshade, garlic',
    preset: 'Soup spoon.',
    tags: ['creamy', 'herbal', 'fresh']
  },
  {
    id: 'food-taco',
    sourcePage: 'Menu Knowledge, p.9',
    name: 'Taco',
    category: 'food', subcategory: 'main',
    blurb: 'Two refreshing tacos with your choice of tempura fried halibut, or blackened chicken.',
    composition: 'Grilled flour tortilla, corn & jalapeño salsa, pickled shallots, jalapeño chipotle crema, crispy fried brussel sprouts, cilantro, citrus aioli cabbage.',
    allergens: 'Gluten, dairy, nightshade, garlic, cilantro',
    preset: 'N/A',
    tags: ['spicy', 'fresh', 'crunchy']
  },
  {
    id: 'food-white-chocolate-cheesecake',
    sourcePage: 'Menu Knowledge, p.3',
    name: 'White Chocolate Cheesecake',
    category: 'food', subcategory: 'dessert',
    blurb: 'Jarred and sous vide cheesecake — creating a perfect consistency, texture, and overall cook.',
    composition: 'Sous vide cheesecake, rhubarb & strawberry jam, dehydrated strawberries, graham crumb.',
    allergens: 'Dairy, gluten, egg',
    preset: 'Dessert spoon.',
    tags: ['creamy', 'sweet', 'chocolate-coffee', 'fruit-forward']
  },
  {
    id: 'food-sticky-toffee-pudding',
    sourcePage: 'Menu Knowledge, p.3',
    name: 'Sticky Toffee Pudding',
    category: 'food', subcategory: 'dessert',
    blurb: "Kayla's favourite — rich, cozy, indulgent.",
    composition: 'Spongy date cake, toffee sauce, vanilla ice cream.',
    allergens: 'Eggs, gluten, dairy',
    preset: 'Dessert spoon. brought out first',
    tags: ['sweet', 'creamy', 'comfort']
  },
  {
    id: 'food-chimichurri-butter',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Chimichurri Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'House-made compound butter, infused with parsley, oregano, and chillies.',
    composition: 'Fresno chillies, parsley, oregano, butter, garlic.',
    allergens: 'Dairy, garlic, nightshade',
    preset: 'N/A',
    tags: ['herbal', 'spicy', 'savory-umami']
  },
  {
    id: 'food-cowboy-butter',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Cowboy Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'Think BBQ smokey flavour — our house-made cajun spice (blackening spice throughout the menu)',
    composition: 'Butter, house-made cajun spice.',
    allergens: 'Dairy, garlic',
    preset: 'N/A',
    tags: ['bbq', 'smoky', 'savory-umami']
  },
  {
    id: 'food-blue-cheese-butter',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Blue Cheese Butter',
    category: 'food', subcategory: 'sauce',
    blurb: 'House-made compound butter with tangy blue cheese.',
    composition: 'Butter, Castello blue cheese.',
    allergens: 'Dairy',
    preset: 'N/A',
    tags: ['creamy', 'savory-umami']
  },
  {
    id: 'food-garlic-mushrooms',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Garlic Mushrooms',
    category: 'food', subcategory: 'sauce',
    blurb: '',
    composition: 'Garlic butter, wild mushroom mix, thyme, tamari, white wine, kosher salt, black pepper, shallots.',
    allergens: 'Garlic, soy',
    preset: 'N/A',
    tags: ['earthy', 'savory-umami']
  },
  {
    id: 'food-garlic-prawns',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Garlic Prawns',
    category: 'food', subcategory: 'sauce',
    blurb: '',
    composition: 'Garlic butter, prawns (31-40 count, no tail).',
    allergens: 'Garlic, shellfish',
    preset: 'N/A',
    tags: ['seafood', 'savory-umami']
  },
  {
    id: 'food-add-on-chicken-breast',
    sourcePage: 'Menu Knowledge, p.6',
    name: 'Add-On Chicken Breast',
    category: 'food', subcategory: 'sauce',
    blurb: '',
    composition: 'Chicken breast, house rub.',
    allergens: 'Garlic',
    preset: 'N/A',
    tags: ['savory-umami']
  }
];

const ALL_ITEMS = [...WINES, ...COCKTAILS, ...FOOD];
