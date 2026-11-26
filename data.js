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
    name: "Sette Roche Vino Spumante Extra Dry",
    note: "Bubble",
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
    name: 'Cantina di Soliera Lambrusco Salamino Semi-Dry',
    note: 'Bubble',
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
    name: 'Muralhas de Monção "Muralhas Rosé"',
    note: 'Rose Sangria',
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
    name: 'Sandro De Bruno Pinot Grigio Ramato',
    note: 'Skin of grape in there longer = pinky',
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
    name: 'Cantina Levorato Pinot Grigio',
    note: 'White',
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
    name: 'Nuestro Verdejo',
    note: 'White',
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
    name: 'Jackson Estate "Stitch" Sauvignon Blanc',
    note: 'White',
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
    name: 'Lafazanis "Geometria" Sauvignon Blanc',
    note: 'White',
    category: 'wine', subcategory: 'white',
    varietal: 'Moschofilero',
    region: 'Peloponnese, Greece',
    blurb: 'Floral and aromatic. Rose petals, citrus blossom, peach, lemon zest with a crisp, delicate finish. (Dry Dry)',
    pairings: 'Seafood, salads, hummus, feta, grilled vegetables, chicken, Dip Trio, Chicken & Risotto',
    tags: ['floral', 'stone-fruit', 'citrus', 'crisp']
  },
  {
    id: 'wine-featherstone-riesling',
    sourcePage: 'Wine List, p.1',
    name: 'Featherstone Estate "Black Sheep" Riesling',
    note: 'White',
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
    name: 'Novellum Chardonnay',
    note: 'White',
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
    id: 'cocktail-how-bout-them-apples',
    sourcePage: 'Menu Knowledge, p.1',
    name: "How 'Bout Them Apples",
    category: 'cocktail', subcategory: 'sangria',
    blurb: "A fresh take on a white sangria but with a twist of fall. Spiced just right with a housemade apple cider and warm notes from the bourbon.",
    composition: "White wine, housemade apple cider, Brothers Bond bourbon, maple syrup, lemon juice, white cranberry juice, Middletons apple cinnamon bitters.",
    allergens: "Tannins",
    preset: "Served in a wine glass, garnished with apple slices and a cinnamon stick.",
    tags: ['spice',  'fruit-forward',  'sweet']
  },
  {
    id: 'cocktail-butter-me-up',
    sourcePage: 'Menu Knowledge, p.1',
    name: "Butter Me Up",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "We take popcorn seriously here at Barbaretta and that means we will also put it into a drink! This drink will get you confused with whether you are at a bar or a movie theatre while sipping and munching away.",
    composition: "Popcorn fat-washed bourbon, popcorn demerara, brown butter tincture, Middletons aromatic bitters, saline solution.",
    allergens: "Butter",
    preset: "Served in a rocks glass, garnished with popcorn in a muffin cup held up by a mini clothespin.",
    tags: ['sweet-savory',  'nostalgic',  'bold']
  },
  {
    id: 'cocktail-daily-grind',
    sourcePage: 'Menu Knowledge, p.1',
    name: "Daily Grind",
    category: 'cocktail', subcategory: 'signature',
    blurb: "One thing we do well at Barbaretta is make an espresso martini with anything but vodka. Welcome to your newest addition with warm nutty notes — a brown butter espresso martini!",
    composition: "Brown butter fat-washed bourbon, Black Diamond coffee, espresso, The Duke, brown butter syrup, brown butter tincture.",
    allergens: "Caffeine, butter",
    preset: "Served in a coupe glass, garnished with a cinnamon & allspice mix swirled on top.",
    tags: ['chocolate-coffee',  'nutty',  'spice']
  },
  {
    id: 'cocktail-scarlet-letter',
    sourcePage: 'Menu Knowledge, p.1',
    name: "Scarlet Letter",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "What's a better way to get into the holiday spirits than sipping back one of these cozy cranberry spiced whiskey sours? Nothing? We thought so.",
    composition: "Brothers Bond bourbon, Black Diamond spiced cranberry, lime juice, egg whites, cranberry spiced syrup, black pepper tincture, Middletons cranberry orange bitters.",
    allergens: "Egg whites",
    preset: "Served in a rocks glass, garnished with sugar cranberries.",
    tags: ['spice',  'berry',  'silky-egg-white']
  },
  {
    id: 'cocktail-the-heirloom',
    sourcePage: 'Menu Knowledge, p.2',
    name: "The Heirloom",
    category: 'cocktail', subcategory: 'signature',
    blurb: "Like your martinis strong? We do too! Here is our take on a savoury martini that may make you question if you are drinking a caesar or a martini.",
    composition: "Tomato leaf-infused Ometeo Mexican gin, fermented tomato water, dry vermouth, saline solution, celery seed tincture.",
    allergens: "N/A",
    preset: "Served in a Nick and Nora glass, garnished with a cherry tomato on a pick.",
    tags: ['savory-umami',  'herbal',  'bold']
  },
  {
    id: 'cocktail-barbaretta-caesar',
    sourcePage: 'Menu Knowledge, p.2',
    name: "Barbaretta Caesar",
    category: 'cocktail', subcategory: 'signature',
    blurb: "Partnering with all things local — here's the next best caesar. Snack on top, Spice Rack vodka, and house made muddy, oh and don't forget the horseradish.",
    composition: "BBQ sauce (made here), tabasco, horseradish, Spice Rack Vodka, Clamato, Spice CO dust rim, pickle, chaga cheddar, Brickhouse jerky.",
    allergens: "Fish, jerky, dairy, soy, garlic",
    preset: "Served in a collins glass, Spice CO dust rim, skewered snack, lime wedge, and 8\" straw.",
    tags: ['savory-umami',  'spicy',  'seafood']
  },
  {
    id: 'cocktail-pear-darling',
    sourcePage: 'Menu Knowledge, p.2',
    name: "Pear, Darling",
    category: 'cocktail', subcategory: 'signature',
    blurb: "Some like it salty and we like it sweet. Meet your new favourite martini, the Pear, Darling. With all these pear notes you'll wonder why pear wasn't your favourite fruit from the beginning.",
    composition: "Pear-infused vodka, Belle de Brillet, clarified pear cordial, Lillet Blanc, spiced honey, saffron tincture, saline solution.",
    allergens: "N/A",
    preset: "Served in a coupe glass, garnished with a thin dehydrated pear.",
    tags: ['fruit-forward',  'sweet',  'floral']
  },
  {
    id: 'cocktail-fridge-cigarette',
    sourcePage: 'Menu Knowledge, p.2',
    name: "The Fridge Cigarette",
    category: 'cocktail', subcategory: 'signature',
    blurb: "What's a fridge cigarette you ask? Welp, it's coffee, coke and cream — but because we are a cocktail bar we had to elevate this delicious drink and add some even more delicious booze into it. We promise you'll be addicted after your first one.",
    composition: "Righand spiced rum, Black Diamond coffee, Galliano, Giocondo Cabaret coffee amaro, vanilla syrup, espresso, half and half cream, Coke or Diet Coke.",
    allergens: "Caffeine, dairy",
    preset: "Served in a collins glass, garnished with vanilla whip cream and espresso beans.",
    tags: ['chocolate-coffee',  'creamy',  'sweet']
  },
  {
    id: 'cocktail-hubba-hubba',
    sourcePage: 'Menu Knowledge, p.3',
    name: "Hubba Hubba",
    category: 'cocktail', subcategory: 'signature',
    blurb: "Feeling nostalgic, we are — cheers to your childhood love of Hubba Bubba.",
    composition: "Hubba Bubba-infused vodka, Galliano, white cranberry, lemon and lime juice, strawberry & simple syrup.",
    allergens: "N/A",
    preset: "Served in a coupe glass, garnished with a sour ribbon.",
    tags: ['sweet',  'berry',  'citrus',  'nostalgic']
  },
  {
    id: 'cocktail-london-london-bridge',
    sourcePage: 'Menu Knowledge, p.3',
    name: "London London Bridge",
    category: 'cocktail', subcategory: 'signature',
    blurb: "London fog, meet cocktail.",
    composition: "Empress Indigo gin, amaretto, earl grey syrup, lavender syrup, lemon juice, egg whites.",
    allergens: "Egg whites",
    preset: "Served in a coupe glass, garnished with lavender buds.",
    tags: ['floral',  'tea',  'silky-egg-white']
  },
  {
    id: 'cocktail-playing-with-fire',
    sourcePage: 'Menu Knowledge, p.3',
    name: "Playing with Fire",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "Classic with a twist — enjoy a great old fashioned with a smoky flavour.",
    composition: "Woodford Reserve, sugar cube, aromatic Middletons bitters, dark cherry, and orange.",
    allergens: "N/A",
    preset: "Served in a dbl rocks glass, garnished with an orange twist and a skewered dark cherry — smoked.",
    tags: ['smoky',  'bold-tannic',  'stone-fruit']
  },
  {
    id: 'cocktail-black-velvet',
    sourcePage: 'Menu Knowledge, p.3',
    name: "Black Velvet (if you please)",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "Our signature cocktail and wine list meet — consider this an entry-level step into the smoky and bold section.",
    composition: "Elijah Craig Bourbon, cabernet sauvignon, blackberry syrup, and lime juice.",
    allergens: "Tannins",
    preset: "Served in a dbl rocks glass over a round cube, garnished with two skewered blackberries.",
    tags: ['smoky',  'berry',  'bold-tannic']
  },
  {
    id: 'cocktail-honey-old-fashioned',
    sourcePage: 'Menu Knowledge, p.3',
    name: "Honey, I'm Old Fashioned",
    category: 'cocktail', subcategory: 'whiskey',
    blurb: "Flavour profile of a warm spiced old fashioned, with a refreshing mouthfeel of a whiskey sour.",
    composition: "Brothers Bond Bourbon, spiced honey syrup, lemon juice, aromatic Middletons bitters, star anise, orange, rosemary.",
    allergens: "N/A",
    preset: "Served in a dbl rocks glass over a king cube, garnished with star anise, rosemary sprig, and lemon zest.",
    tags: ['spice',  'citrus',  'sweet',  'herbal']
  },
  {
    id: 'cocktail-lets-get-fizzical',
    sourcePage: 'Menu Knowledge, p.4',
    name: "Let's Get Fizzical",
    category: 'cocktail', subcategory: 'signature',
    blurb: "A Barbacoa crossover with a crowd favourite. It's fresh, it's fruity and it's all you want from a margarita-styled drink.",
    composition: "Cimarron Reposado, lime juice, grapefruit juice, rose pomegranate syrup, egg whites, Sprite.",
    allergens: "Egg whites",
    preset: "Served in a rocks glass, garnished with a pink salt-sugar rim and a dehydrated grapefruit.",
    tags: ['citrus',  'fruit-forward',  'silky-egg-white']
  },
  {
    id: 'cocktail-golden-cobbler',
    sourcePage: 'Menu Knowledge, p.4',
    name: "Golden Cobbler",
    category: 'cocktail', subcategory: 'signature',
    blurb: "White port spritzer, fruity, fresh, and inviting.",
    composition: "Quevado white port, Galliano, Grand Marnier, simple syrup, spiced honey, orange slice.",
    allergens: "N/A",
    preset: "Served in a collins glass, garnished with a mint sprig and skewered blackberry.",
    tags: ['sparkling',  'citrus',  'sweet',  'floral']
  },
  {
    id: 'cocktail-spill-the-tea',
    sourcePage: 'Menu Knowledge, p.4',
    name: "Spill the Tea",
    category: 'cocktail', subcategory: 'signature',
    blurb: "Blueberry tea and iced tea's love child.",
    composition: "Bergamotto Fantastico, Toastee Amaretto, orange vanilla syrup, lemon juice, orange pekoe tea, blueberry popping boba, dehydrated orange.",
    allergens: "N/A",
    preset: "Served in a collins glass, garnished with a dehydrated orange.",
    tags: ['tea',  'berry',  'citrus',  'sweet']
  },
  {
    id: 'cocktail-good-idea',
    sourcePage: 'Menu Knowledge, p.4',
    name: "Good Idea",
    category: 'cocktail', subcategory: 'shot',
    blurb: "Starts off being a good idea with the first shot. Fresh with cucumber and notes of chamomile — this shot is a play on our cucumber spritz.",
    composition: "Empress cucumber gin, St-Germain, chamomile reduction, lime juice.",
    allergens: "N/A",
    preset: "Served in a shot glass, presented on a side plate with a cocktail napkin.",
    tags: ['herbal',  'floral',  'crisp']
  },
  {
    id: 'cocktail-questionable',
    sourcePage: 'Menu Knowledge, p.4',
    name: "Questionable",
    category: 'cocktail', subcategory: 'shot',
    blurb: "Now things are getting a little questionable, so we move to some dessert notes with a play on a black forest cake.",
    composition: "Elijah Craig bourbon, Hawkes Black Forest cherry liqueur, chocolate syrup, Middletons chocolate bitters.",
    allergens: "Dairy",
    preset: "Served in a shot glass, presented on a side plate with a cocktail napkin.",
    tags: ['chocolate-coffee',  'stone-fruit',  'sweet']
  },
  {
    id: 'cocktail-bad-idea',
    sourcePage: 'Menu Knowledge, p.5',
    name: "Bad Idea",
    category: 'cocktail', subcategory: 'shot',
    blurb: "And here we are, you've stopped listening to us but hey, we still made a tasty tequila shot with passion fruit and strawberry notes!",
    composition: "Cimarron Blanco, Alma Tepec, passion fruit, strawberry syrup, black pepper tincture.",
    allergens: "N/A",
    preset: "Served in a shot glass, presented on a side plate with a cocktail napkin.",
    tags: ['tropical',  'berry',  'spice']
  },
  {
    id: 'mocktail-the-nibbler',
    sourcePage: 'Menu Knowledge, p.5',
    name: "The Nibbler",
    category: 'cocktail', subcategory: 'mocktail',
    blurb: "We did it again. A nostalgic childhood favourite candy made into a mocktail. A play on an amaretto sour but now with the cherry notes of Nibs. How many drinks can we make inspired by candy?",
    composition: "Noa amaretto, almond orgeat, Nib syrup, egg whites, lemon juice, Middletons cherry vanilla bitters.",
    allergens: "Egg whites",
    preset: "Served in a coupe glass, garnished with a Nib on the side of the glass.",
    tags: ['nostalgic',  'stone-fruit',  'silky-egg-white',  'non-alcoholic']
  },
  {
    id: 'mocktail-rose-coloured-glasses',
    sourcePage: 'Menu Knowledge, p.5',
    name: "Rose-Coloured Glasses",
    category: 'cocktail', subcategory: 'mocktail',
    blurb: "A fun twist and play on a paloma, but doing what we do best by making it a mocktail! This spritz will have your taste buds bouncing around with these fun floral and fruity notes.",
    composition: "Juniper agave, grapefruit juice, lime juice, white verjus, pink peppercorn and pomegranate syrup, saline solution, rose water, Leitz non-alcoholic rosé.",
    allergens: "N/A",
    preset: "Served in a wine glass, garnished with a dehydrated grapefruit and rose petals.",
    tags: ['floral',  'citrus',  'sparkling',  'non-alcoholic']
  },
  {
    id: 'mocktail-cucumber-spritz',
    sourcePage: 'Menu Knowledge, p.5',
    name: "Cucumber Spritz",
    category: 'cocktail', subcategory: 'mocktail',
    blurb: "Hugo spritz with tea-inspired flavours, very refreshing.",
    composition: "Cucumber, chamomile & elderflower syrup, lime juice, soda.",
    allergens: "N/A",
    preset: "Served in a wine glass, garnished with chamomile buds and cucumber ribbon.",
    tags: ['herbal',  'floral',  'crisp',  'non-alcoholic']
  },
  {
    id: 'mocktail-the-alibi',
    sourcePage: 'Menu Knowledge, p.6',
    name: "The Alibi",
    category: 'cocktail', subcategory: 'mocktail',
    blurb: "Sometimes we are cheeky and here is your Alibi for the night. You were drinking this delicious mocktail all evening, with notes of fig, balsamic and all the Long Island lemonade without any of the booze.",
    composition: "Fig syrup, lemon juice, earl grey tea, aged balsamic, saline solution, soda water.",
    allergens: "N/A",
    preset: "Served in a collins glass, garnished with thyme and a lemon wheel.",
    tags: ['fruit-forward',  'tea',  'sweet-savory',  'non-alcoholic']
  }
];

const WELL_LIQUORS = [
  { id: 'liquor-vodka', spirit: "Vodka", brand: "Easy Vodka / Snake Lake" },
  { id: 'liquor-rum', spirit: "Rum", brand: "Diplomatico White Rum" },
  { id: 'liquor-gin', spirit: "Gin", brand: "Anohka" },
  { id: 'liquor-tequila', spirit: "Tequila", brand: "Cimarron Blanco" },
  { id: 'liquor-rye', spirit: "Rye/Whiskey", brand: "Reifel Rye" },
  { id: 'beer-lager', spirit: "Beer — Lager (tall boy)", brand: "Nodding Donkey 114 Light Lager" },
  { id: 'beer-ipa', spirit: "Beer — IPA (tall boy)", brand: "Ale Architect Riff Raff West Coast IPA" },
  { id: 'beer-amber', spirit: "Beer — Pale/Amber (tall boy)", brand: "Bentstick Amber Waves Amber Ale" },
  { id: 'beer-seasonal', spirit: "Beer — Seasonal (tall boy)", brand: "Rotating" }
];

const FOOD = [
  {
    id: 'food-piri-piri-clams',
    sourcePage: 'Menu Knowledge, p.7',
    name: "Piri Piri Clams",
    category: 'food', subcategory: 'starter',
    blurb: "You may recognize these clams — they were so well received during one of our wine dinners we decided to give them a permanent home on our menu.",
    composition: "Garlic white wine broth, piri piri, cream, charred lemon, focaccia.",
    allergens: "Garlic, gluten, shellfish, nightshades, sulfites, dairy",
    preset: "Side bowl for shells",
    tags: ['seafood',  'spicy',  'creamy']
  },
  {
    id: 'food-smoked-wings',
    sourcePage: 'Menu Knowledge, p.7',
    name: "Smoked Wings",
    category: 'food', subcategory: 'starter',
    blurb: "No need to decide between wing or flat, we give you it all.",
    composition: "Maple Dijon & peppercorn glaze, buttermilk herb ranch.",
    allergens: "Dairy, soy, gluten cross-contamination, garlic",
    preset: "Side plate for bones (honour — don't offer finger bowl)",
    tags: ['smoky',  'spicy',  'sweet-savory']
  },
  {
    id: 'food-french-onion-arancini',
    sourcePage: 'Menu Knowledge, p.7',
    name: "French Onion Arancini",
    category: 'food', subcategory: 'starter',
    blurb: "So it's risotto that is breaded and deep fried and served with everything you want from a French onion soup. What more can you ask for?",
    composition: "Fried risotto, gruyère, black garlic aioli, onion jam.",
    allergens: "Gluten, nightshade, seafood, alcohol, garlic, onion, dairy",
    preset: "N/A",
    tags: ['creamy',  'savory-umami',  'comfort']
  },
  {
    id: 'food-barbaretta-board',
    sourcePage: 'Menu Knowledge, p.7',
    name: "Barbaretta Board",
    category: 'food', subcategory: 'starter',
    blurb: "A mix of made in house + local, featuring cheeses from Barbaretta and Lakeside, accompanied with meats from Brickhouse.",
    composition: "Lakeside alpine, chaga, and Barbaretta ricotta, Brickhouse jerky, rotating Brickhouse sausage and pepperoni, pickled veg, house jam, grainy mustard, olives, and naan.",
    allergens: "Dairy, gluten, rotating allergies, garlic, onion",
    preset: "On plate — gold spoons and cheese knife",
    tags: ['savory-umami',  'creamy',  'shareable']
  },
  {
    id: 'food-crispy-brussel-sprouts',
    sourcePage: 'Menu Knowledge, p.8',
    name: "Crispy Brussel Sprouts",
    category: 'food', subcategory: 'starter',
    blurb: "Not the same as the stinky brussel sprouts your mom used to make you eat.",
    composition: "Crispy brussel sprouts, whipped goat cheese, cranberry salsa, toasted almond, orange zest, hot honey.",
    allergens: "Nuts, nightshade, gluten cross-contamination, dairy",
    preset: "N/A",
    tags: ['sweet-savory',  'crunchy',  'nutty']
  },
  {
    id: 'food-bacon-and-eggs',
    sourcePage: 'Menu Knowledge, p.8',
    name: "Bacon & Eggs",
    category: 'food', subcategory: 'starter',
    blurb: "Ask and you shall receive — just like Barbacoa.",
    composition: "Bacon marmalade, grainy mustard aioli, pickled jalapeño, maple gastrique, bacon lardon.",
    allergens: "Egg, pork, nightshade, sulfites, garlic, onion",
    preset: "N/A",
    tags: ['savory-umami',  'smoky',  'sweet-savory']
  },
  {
    id: 'food-double-dip',
    sourcePage: 'Menu Knowledge, p.8',
    name: "Double Dip",
    category: 'food', subcategory: 'starter',
    blurb: "Double dip, we won't judge! House made naan and two new exciting dips joining us here at Barbaretta.",
    composition: "Jalapeño popper, tomato bruschetta, whipped ricotta, garlic, basil, onion, cheese, balsamic vinegar, naan.",
    allergens: "Gluten, seeds, garlic, onion, dairy",
    preset: "N/A",
    tags: ['creamy',  'spicy',  'shareable']
  },
  {
    id: 'food-sui-mai',
    sourcePage: 'Menu Knowledge, p.8',
    name: "Sui Mai",
    category: 'food', subcategory: 'starter',
    blurb: "Juicy pork and shrimp dumpling, cradled in a steamed wonton wrapper — guest choice since day one.",
    composition: "Grove City ground pork & prawn dumpling, wonton wrapper, pickled fresno, truffle aioli, chili crunch, cilantro, crispy shallots.",
    allergens: "Shellfish, pork, gluten, nightshade, soy, sesame, garlic, cilantro, onion, dairy",
    preset: "N/A",
    tags: ['savory-umami',  'spicy',  'seafood']
  },
  {
    id: 'food-carpaccio',
    sourcePage: 'Menu Knowledge, p.9',
    name: "Carpaccio",
    category: 'food', subcategory: 'salad',
    blurb: "A smoky rendition of our carpaccio, served with house made potato chips.",
    composition: "North Country beef tenderloin, smoked cheddar, horseradish, pickled onion, crispy potato.",
    allergens: "Gluten, seeds, onion, dairy",
    preset: "N/A",
    tags: ['savory-umami',  'smoky',  'fresh']
  },
  {
    id: 'food-citrus-crunch-chicken',
    sourcePage: 'Menu Knowledge, p.9',
    name: "Citrus Crunch Chicken",
    category: 'food', subcategory: 'salad',
    blurb: "Chef James' personal favourite menu item.",
    composition: "Panko crusted chicken, baby greens, pickled carrots, orange, crispy egg noodle, toasted coconut, citrus ginger dressing.",
    allergens: "Gluten, soy, sulfites, garlic",
    preset: "N/A",
    tags: ['crunchy',  'citrus',  'fresh']
  },
  {
    id: 'food-steak-and-pear',
    sourcePage: 'Menu Knowledge, p.9',
    name: "Steak & Pear",
    category: 'food', subcategory: 'salad',
    blurb: "Some classic fall ingredients put together in this beautiful bowl, with creamy blue cheese to cut through the acidity, served with a red wine steak.",
    composition: "Red wine rosemary North Country sirloin, baby greens, pear, blue cheese, candied walnuts, pickled shallots, cranberry vinaigrette.",
    allergens: "Nuts, sulfites, alcohol, garlic, onion, dairy",
    preset: "Steak knife",
    tags: ['meaty-beef',  'fruit-forward',  'creamy']
  },
  {
    id: 'food-the-harvest',
    sourcePage: 'Menu Knowledge, p.9',
    name: "The Harvest",
    category: 'food', subcategory: 'salad',
    blurb: "Our heartiest salad, served with classic fall vegetables and a punchy vinaigrette.",
    composition: "Baby kale, shaved brussel sprouts, roasted seasonal squash, julienne apple, dried cherry, toasted pecans, aged cheddar, cider vinaigrette.",
    allergens: "Nuts, sulfites, garlic, onion, dairy",
    preset: "N/A",
    tags: ['fresh',  'earthy',  'nutty']
  },
  {
    id: 'food-short-rib-flatbread',
    sourcePage: 'Menu Knowledge, p.10',
    name: "Short Rib Flatbread",
    category: 'food', subcategory: 'main',
    blurb: "Red wine short rib that's been braised for 12 hours.",
    composition: "Red wine braised short rib, caramelized onion, provolone, horseradish cream.",
    allergens: "Gluten, soy, sulfites, alcohol, garlic, onion, dairy",
    preset: "N/A",
    tags: ['meaty-beef',  'savory-umami',  'comfort']
  },
  {
    id: 'food-north-country-steak',
    sourcePage: 'Menu Knowledge, p.10',
    name: "North Country Steak",
    category: 'food', subcategory: 'main',
    blurb: "Traditional composed steak dinner, with options for house butters, prawns, and mushrooms.",
    composition: "12oz Ribeye or 10oz Striploin, cheddar mash, grilled vegetable.",
    allergens: "Dairy",
    preset: "Steak knife",
    tags: ['meaty-beef',  'savory-umami',  'smoky']
  },
  {
    id: 'food-pork-chop',
    sourcePage: 'Menu Knowledge, p.10',
    name: "Pork Chop",
    category: 'food', subcategory: 'main',
    blurb: "Pork chop cooked to chef's recommendation of medium.",
    composition: "Maple chili glazed pork chop, roasted fingerling potatoes, grilled corn & jalapeño salsa, cilantro, hickory sticks.",
    allergens: "Pork, nightshade, garlic, soy, gluten cross-contamination, cilantro",
    preset: "Steak knife",
    tags: ['sweet-savory',  'spicy',  'smoky']
  },
  {
    id: 'food-chefs-rotating-soup',
    sourcePage: 'Menu Knowledge, p.10',
    name: "Chef's Rotating Soup",
    category: 'food', subcategory: 'main',
    blurb: "Ask for details. (MP)",
    composition: "Rotates — ask for details.",
    allergens: "Ask for details",
    preset: "Soup spoon",
    tags: ['comfort']
  },
  {
    id: 'food-cheddar-mash',
    sourcePage: 'Menu Knowledge, p.10',
    name: "Cheddar Mash",
    category: 'food', subcategory: 'sauce',
    blurb: "Another comfort dish that just makes sense, especially paired with steak.",
    composition: "Smoked cheddar, potato.",
    allergens: "Dairy, garlic",
    preset: "N/A",
    tags: ['creamy',  'comfort']
  },
  {
    id: 'food-kfc',
    sourcePage: 'Menu Knowledge, p.11',
    name: "KFC",
    category: 'food', subcategory: 'main',
    blurb: "Messy but worth it — we'll bring you extra napkins.",
    composition: "KFC chicken thigh, gochujang maple glaze, togarashi aioli, cucumber pickled salad, brioche bun.",
    allergens: "Gluten, nightshade, sesame, garlic, soy, egg, dairy",
    preset: "Extra napkins",
    tags: ['sweet-savory',  'spicy',  'crunchy']
  },
  {
    id: 'food-swine-and-dandy',
    sourcePage: 'Menu Knowledge, p.11',
    name: "Swine & Dandy",
    category: 'food', subcategory: 'main',
    blurb: "Ask yourself, what pairs best with pork? APPLE. Smoked applewood bacon and apple chutney are the soulmate to anything pork.",
    composition: "Grove City pork & boar burger, applewood smoked bacon, aged white cheddar, apple chutney, dijon aioli, crispy onion.",
    allergens: "Gluten, pork, sulfites, garlic, onion, dairy",
    preset: "N/A",
    tags: ['smoky',  'sweet-savory',  'savory-umami']
  },
  {
    id: 'food-pastrami-burger',
    sourcePage: 'Menu Knowledge, p.11',
    name: "Pastrami Burger",
    category: 'food', subcategory: 'main',
    blurb: "Chef James has an all-time favourite food, and that food is sandwiches. There is, without a doubt, a KING of all sandwiches and that is the pastrami — so we thought, let's make it a burger.",
    composition: "Pastrami spiced beef burger, sauerkraut, gruyère, house pickles, russian dressing.",
    allergens: "Gluten, nightshades, seafood, seed, sulfites, garlic, onion, dairy",
    preset: "N/A",
    tags: ['meaty-beef',  'savory-umami',  'spice']
  },
  {
    id: 'food-tarragon-chicken-sandwich',
    sourcePage: 'Menu Knowledge, p.11',
    name: "Tarragon Chicken Sandwich",
    category: 'food', subcategory: 'main',
    blurb: "What's the best part of the holidays? Dinner, of course. This sandwich takes the entirety of Christmas dinner and puts it between two pieces of sourdough.",
    composition: "Roasted chicken, toasted sourdough, green apple, celery, pickled shallot, cranberry jam, crispy chicken skin, arugula, dijon aioli.",
    allergens: "Gluten, sulfites, garlic, onion",
    preset: "N/A",
    tags: ['comfort',  'fruit-forward',  'crunchy']
  },
  {
    id: 'food-maple-miso-salmon',
    sourcePage: 'Menu Knowledge, p.11',
    name: "Maple Miso Salmon",
    category: 'food', subcategory: 'main',
    blurb: "Chef James' favourite fish is salmon. Brushed with miso and grilled until cooked medium.",
    composition: "Cauliflower purée, rainbow baby carrot, pickled cauliflower, puffed rice.",
    allergens: "Soy, gluten, seafood, garlic, dairy",
    preset: "N/A",
    tags: ['seafood',  'sweet-savory',  'savory-umami']
  },
  {
    id: 'food-braised-short-rib',
    sourcePage: 'Menu Knowledge, p.12',
    name: "Braised Short Rib",
    category: 'food', subcategory: 'main',
    blurb: "The best things in life take time. That's what this dish represents. Short rib that has been braised in red wine jus for 12 hours.",
    composition: "Whipped cheddar mash, broccolini, black garlic jus, horseradish.",
    allergens: "Sulfites, alcohol, garlic, onion, dairy",
    preset: "N/A",
    tags: ['meaty-beef',  'comfort',  'savory-umami']
  },
  {
    id: 'food-calabrian-sausage-rigatoni',
    sourcePage: 'Menu Knowledge, p.12',
    name: "Calabrian Sausage Rigatoni",
    category: 'food', subcategory: 'main',
    blurb: "Tomato ragu sauce cooked just like Nonna used to make. We take this classic family recipe and elevate it.",
    composition: "Italian sausage ragu, Calabrian chili, roasted fennel, tomato cream, whipped ricotta, parmesan and basil oil.",
    allergens: "Gluten, nightshades, pork, alcohol, garlic, onion, dairy",
    preset: "N/A",
    tags: ['spicy',  'creamy',  'comfort']
  },
  {
    id: 'food-brown-butter-squash-risotto',
    sourcePage: 'Menu Knowledge, p.12',
    name: "Brown Butter Squash Risotto",
    category: 'food', subcategory: 'main',
    blurb: "Oh risotto, there will always be a spot for you in the comfort food hall of fame.",
    composition: "Seasonal squash, parmigiano reggiano, pepitas, maple chili oil.",
    allergens: "Gluten, nightshades, soy, alcohol, garlic, onion, dairy",
    preset: "N/A",
    tags: ['creamy',  'nutty',  'comfort']
  },
  {
    id: 'food-spiced-apple-cheesecake',
    sourcePage: 'Menu Knowledge, p.12',
    name: "Spiced Apple Cheesecake",
    category: 'food', subcategory: 'dessert',
    blurb: "How many times do we have to say apple is the ultimate cold weather fruit? One more time!",
    composition: "Vanilla cheesecake, spiced apple compote, brown butter graham crumb, salted maple caramel, cinnamon cream.",
    allergens: "Dairy, gluten",
    preset: "Dessert spoon",
    tags: ['sweet',  'creamy',  'spice',  'fruit-forward']
  },
  {
    id: 'food-sticky-toffee-pudding',
    sourcePage: 'Menu Knowledge, p.12',
    name: "Sticky Toffee Pudding",
    category: 'food', subcategory: 'dessert',
    blurb: "Kayla's favourite — rich, cozy, indulgent.",
    composition: "Spongy date cake, toffee sauce, vanilla ice cream.",
    allergens: "Eggs, gluten, dairy",
    preset: "Dessert spoon",
    tags: ['sweet',  'creamy',  'comfort']
  },
  {
    id: 'food-red-wine-butter',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Red Wine Butter",
    category: 'food', subcategory: 'sauce',
    blurb: "A new favourite? We think yes.",
    composition: "Red wine, shallots, herbs.",
    allergens: "Dairy, alcohol, garlic, onion, sulfites",
    preset: "N/A",
    tags: ['savory-umami',  'herbal']
  },
  {
    id: 'food-cowboy-butter',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Cowboy Butter",
    category: 'food', subcategory: 'sauce',
    blurb: "Think BBQ smoky flavour — our house made cajun spice (blackening spice used throughout the menu).",
    composition: "Butter, house made cajun spice.",
    allergens: "Dairy, garlic",
    preset: "N/A",
    tags: ['bbq',  'smoky',  'savory-umami']
  },
  {
    id: 'food-whiskey-peppercorn-sauce',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Whiskey Peppercorn Sauce",
    category: 'food', subcategory: 'sauce',
    blurb: "You asked for gravy? We gave you something even better.",
    composition: "Black peppercorn, whiskey, cream, pepper.",
    allergens: "Dairy, onion, sulfites, alcohol",
    preset: "N/A",
    tags: ['creamy',  'spice',  'savory-umami']
  },
  {
    id: 'food-garlic-mushrooms',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Garlic Mushrooms",
    category: 'food', subcategory: 'sauce',
    blurb: "Add-on.",
    composition: "Garlic butter, wild mushroom mix, thyme, tamari, white wine, kosher salt, black pepper, shallots.",
    allergens: "Garlic, onion, dairy, alcohol",
    preset: "N/A",
    tags: ['earthy',  'savory-umami']
  },
  {
    id: 'food-garlic-prawns',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Garlic Prawns",
    category: 'food', subcategory: 'sauce',
    blurb: "Add-on.",
    composition: "Garlic butter, 31–40 prawns, no tail.",
    allergens: "Garlic",
    preset: "N/A",
    tags: ['seafood',  'savory-umami']
  },
  {
    id: 'food-add-on-chicken-breast',
    sourcePage: 'Menu Knowledge, p.13',
    name: "Add-On Chicken Breast",
    category: 'food', subcategory: 'sauce',
    blurb: "Add-on.",
    composition: "Chicken breast, house rub.",
    allergens: "Garlic",
    preset: "N/A",
    tags: ['savory-umami']
  }
];

const ALL_ITEMS = [...WINES, ...COCKTAILS, ...FOOD];
