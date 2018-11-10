const foods = [
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'sourdough loaf',
    price: '$5.00 17 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'rosemary olive oil loaf',
    price: '$5.00 18 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'sourdough half loaf',
    price: '$3.00 9 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'rosemary olive oil half loaf',
    price: '$3.00 8 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'soft 100% whole wheat bread, family pack',
    price: '$2.99 40 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'white bread made with whole grain, family pack',
    price: '$2.99 42 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: '27 grains & seeds sandwich bread',
    price: '$5.00 24 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'sprouted multigrain sandwich bread',
    price: '$5.00 24 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'assorted in store baked muffins, 4 pack',
    price: '$4.50 18 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'mini muffins, blueberry, family pack',
    price: '$6.50 20 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'soft bagels, plain, family pack',
    price: '$5.00 40 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'assorted whole wheat muffins, 4 pack, family pack',
    price: '$4.50 11 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'pumpkin roll, 2 slice',
    price: '$4.00 6 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'half pumpkin roll',
    price: '$7.00 10 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'pumpkin roll- whole',
    price: '$12.00 21 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'celebration cake slice',
    price: '$4.00 7 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'famous chocolate chip mini cookies, family pack',
    price: '$5.50 28 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'ultimate chocolate chip cookies, family pack',
    price: '$10.99 1 lb.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'mega chocolate chunk cookies, family pack',
    price: '$6.50 28 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'rainbow chip mega chunk cookies, family pack',
    price: '$6.50 28 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'large ultimate plain cheesecake',
    price: '$24.00 50 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'assorted cupcakes, 12 pack, family pack',
    price: '$13.00 30 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'mini fudgy & chewy brownie bites with chocolate chips, family pack',
    price: '$6.50 24 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'single pumpkin cupcake',
    price: '$1.75 3 oz.'
  },
  {
    category: 'bakery',
    brand: 'mama marys',
    food: 'pizza crusts, gourmet, gluten free',
    price: '$4.49 7 oz.'
  },
  {
    category: 'bakery',
    brand: 'mama marys',
    food: 'crust, gourmet, gluten free thin',
    price: '$5.99 10 oz.'
  },
  {
    category: 'bakery',
    brand: "the world's most perfect roll",
    food: 'original white house rolls, 12 rolls',
    price: '14 oz.'
  },
  {
    category: 'bakery',
    brand: 'ukrops',
    food: 'rainbow cookies',
    price: '11 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'traditional naan, family pack',
    price: '$6.99 26.45 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'garlic naan, family pack',
    price: '$6.99 26.45 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: '100% whole wheat pita bread',
    price: '$2.99 12 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans organic',
    food: 'white pita bread',
    price: '$2.99 12.7 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'hamburger rolls, 16 pack, family pack',
    price: '$1.79 28 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'hot dog rolls, 16 pack, family pack',
    price: '$1.79 28 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans',
    food: 'organic ciabatta roll, 6 pack',
    price: '$4.50 16 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'hamburger rolls, 8 pack',
    price: '$0.99 14 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans food you feel good about',
    food: 'marshmallow rice cereal treat',
    price: '$10.00 20 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans gluten free',
    food: 'double chocolate frosted brownies',
    price: '$7.99 20.25 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans gluten free',
    food: 'chocolate chip cookies',
    price: '$7.29 6.7 oz.'
  },
  {
    category: 'bakery',
    brand: 'wegmans gluten free',
    food: 'snickerdoodle cookies',
    price: '$7.29 7.9 oz.'
  },
  {
    category: 'bakery',
    brand: 'pepperidge farm',
    food: 'stuffing, classic, herb seasoned',
    price: '$2.50* 14 oz.'
  },
  {
    category: 'bakery',
    brand: 'pepperidge farm',
    food: 'stuffing, cubed, herb seasoned',
    price: '$2.50* 12 oz.'
  },
  {
    category: 'bakery',
    brand: 'arnold',
    food: 'stuffing, premium, herb seasoned',
    price: '$2.50* 12 oz.'
  },
  {
    category: 'bakery',
    brand: 'pepperidge farm',
    food: 'stuffing, cubed, country style',
    price: '$2.50* 12 oz.'
  },
  {
    category: 'beverage',
    brand: "hershey's",
    food: 'syrup, chocolate',
    price: '$4.49  48 oz.'
  },
  {
    category: 'beverage',
    brand: "hershey's",
    food: 'syrup, genuine chocolate flavor',
    price: '$2.49  24 oz.'
  },
  {
    category: 'beverage',
    brand: 'swiss miss',
    food: 'hot cocoa mix, marshmallow',
    price: '$1.69*  11.04 oz.'
  },
  {
    category: 'beverage',
    brand: 'swiss miss',
    food: 'hot cocoa mix, milk chocolate flavor',
    price: '$1.69*  11.04 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'tonic water',
    price: '$0.79  1 liter'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'diet tonic water',
    price: '$0.79  1 liter'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'club soda',
    price: '$0.79  1 liter'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'zing zang bloody mary',
    price: '$4.99  32 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: '100% arabica ground coffee, french roast',
    price: '$5.99  24.2 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: '100% arabica ground coffee, colombian',
    price: '$5.99  24.2 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: '100% arabica ground coffee, traditional',
    price: '$5.99  30.5 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: '100% arabica ground coffee, traditional, family pack',
    price: '$8.99  46 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic',
    food: 'chocolate lowfat 1% milk, 12 milk boxes, family pack',
    price: '$8.99*  96 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic',
    food: 'chocolate lowfat 1% milk',
    price: '$1.49  8 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic',
    food: 'lowfat 1% milk, 12 milk boxes, family pack',
    price: '$8.99*  96 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic',
    food: 'lowfat 1% milk',
    price: '$1.49  8 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'country time',
    food: 'drink mix, lemonade',
    price: '$6.19  82.5 oz.'
  },
  {
    category: 'beverage',
    brand: 'gatorade g series',
    food:
      'thirst quencher, instant powder mix, 02 perform, frost glacier freeze',
    price: '$8.99  50.9 oz.'
  },
  {
    category: 'beverage',
    brand: 'gatorade g series',
    food: 'thirst quencher, instant powder mix, 02 perform, lemon-lime',
    price: '$8.99  50.9 oz.'
  },
  {
    category: 'beverage',
    brand: 'stur organic',
    food: "drink mix sticks, taylor's raspberry lemonade, powder",
    price: '$2.39  2.45 oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic',
    food: "juic'd right, honeycrisp apple",
    price: '$2.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic food you feel good about',
    food: 'lemonade',
    price: '$2.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic food you feel good about',
    food: 'fruit punch flavored juice beverage',
    price: '$2.79  54 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic food you feel good about',
    food: 'apple juice',
    price: '$2.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic food you feel good about',
    food: 'premium orange juice, original, pulp free',
    price: '$4.49  59 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'no pulp premium orange juice, family pack',
    price: '$4.79  128 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'orange juice',
    price: '$3.89  128 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans organic food you feel good about',
    food: 'premiun orange juice, calcium & vitamin d',
    price: '$4.49  59 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'so delicious',
    food: 'coconut milk beverage, unsweetened',
    price: '$2.49  32 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'pacific organic',
    food: 'non-dairy beverage, oat, original',
    price: '$2.79  32 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'westsoy',
    food: 'soymilk, organic, unsweetened, plain',
    price: '$2.29  32 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'rice dream',
    food: 'rice drink, organic, original enriched, value size',
    price: '$3.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'vanilla unsweetened almondmilk',
    price: '$1.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'original unsweetened almondmilk',
    price: '$1.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'vanilla almondmilk',
    price: '$1.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'original almondmilk',
    price: '$1.99  64 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aquazero',
    food: 'vitamin water, zero calorie, orange',
    price: '$1.00*  20 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aquazero',
    food: 'vitamin water, zero calorie, fruit punch',
    price: '$1.00*  20 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aquazero',
    food: 'vitamin water, zero calorie, dragon fruit',
    price: '$1.00*  20 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aquazero',
    food: 'vitamin water, zero calorie, pomegranate acai berry',
    price: '$1.00*  20 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'coca-cola',
    food: 'cola, fridge pack',
    price: '$4.34*  144 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aquazero (aqua z)',
    food: 'vitamin water, zero calorie, assorted flavors, family pack',
    price: '$8.99  240 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans aqua-v',
    food: 'vitamin infused water beverage, variety pack, family pack',
    price: '$8.99  240 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'cola',
    price: '$0.75  2 liter'
  },
  {
    category: 'beverage',
    brand: 'gatorade g series',
    food: 'thirst quencher, 02 perform, classic pack',
    price: '$8.49  216 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food:
      'mvp maximum velocity power performance sports drink variety pack, family pack',
    price: '$7.99  216 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food:
      'mvp maximum velocity power performance sports drink variety pack, family pack',
    price: '$11.99  480 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'mvp 2 maximum velocity power performance sports drink, family pack',
    price: '$11.99  480 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans',
    food: 'black tea',
    price: '$2.49  100 ct.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'just tea, green, family pack',
    price: '$10.99  202.8 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'just tea, decaffeinated green tea, family pack',
    price: '$10.99  202.8 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'just tea, green jasmine, family pack',
    price: '$10.99  202.8 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about',
    food: 'purified water, 35 bottles',
    price: '$2.59  591.5 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about wonder water',
    food: 'lemon',
    price: '$1.49  16 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about wonder water',
    food: 'lime',
    price: '$1.49  16 fl. oz.'
  },
  {
    category: 'beverage',
    brand: 'wegmans food you feel good about wonder water',
    food: 'tangerine',
    price: '$1.49  16 fl. oz.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'rolled oats',
    price: '1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'organic brown flaxseeds',
    price: '$3.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'organic pearled barley',
    price: '$2.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'organic red wheat bran',
    price: '$1.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'french vanilla almond granola',
    price: '$5.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'organic oats rolled',
    price: '$2.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'millet, hulled, organic',
    price: '$2.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'quick oats',
    price: '$1.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: undefined,
    food: 'assorted pic-a-mix candy',
    price: '$4.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'organic sunny worms',
    price: '$9.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate almonds',
    price: '$6.99  11.5 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate caramels with sea salt',
    price: '$7.99  8 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'peanut butter filled pretzel nuggets',
    price: '$5.99  24 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'chocolate covered peanut butter filled pretzel nuggets',
    price: '$8.49  20 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'goldfish',
    food: 'baked snack crackers, cheddar',
    price: '$5.99*  30 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'goldfish flavor blasted',
    food: 'baked snack crackers, xtra cheddar',
    price: '$5.99*  30 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic specialty coffee',
    food: 'french roast, whole bean',
    price: '$13.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic specialty coffee',
    food: 'sumatra kopi, whole bean',
    price: '$13.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic',
    food: 'chamomile herbal tea',
    price: '$23.84  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic',
    food: 'yerba mate herbal tea',
    price: '$13.60  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'voortman',
    food: 'cookies',
    price: '$3.29  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: "stauffer's",
    food: 'animal crackers, original',
    price: '$3.19  32 oz.'
  },
  {
    category: 'bulk-food',
    brand: "stauffer's",
    food: 'organic thompson raisins',
    price: '$3.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: "stauffer's",
    food: 'organic date coconut roll',
    price: '$5.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic',
    food: 'banana chips',
    price: '$2.99  5 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic',
    food: 'organic currants',
    price: '$5.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans organic',
    food: 'rainbow delight',
    price: '$5.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'mountain trail mix, family pack',
    price: '$12.99  48 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans food you feel good about',
    food: 'orchard trail mix, family pack',
    price: '$12.99  30 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'beach mix, family pack',
    price: '$12.99  42 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'raw organic almonds',
    price: '$18.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'unsalted roasted peanuts',
    price: '$5.99  48 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'salted roasted peanuts',
    price: '$5.99  48 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'raw pumpkin seeds',
    price: '$7.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'dog biscuit, small',
    price: '1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: "mac's rawhide chips, basted beef",
    price: '1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: "mac's rawhide chips, peanut butter",
    price: '1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'dog biscuit, medium',
    price: '1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'organic wild rice blend',
    price: '$5.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'quinoa tri color',
    price: '$4.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'organic quinoa grain',
    price: '$4.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'organic short grain brown rice',
    price: '$3.49  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'wegmans',
    food: 'organic hulled sesame seeds',
    price: '$4.99  1 lb.'
  },
  {
    category: 'bulk-food',
    brand: 'dion',
    food: 'star anise',
    price: '$3.99  1.34 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'dion',
    food: 'juniper berries',
    price: '$3.49  0.92 oz.'
  },
  {
    category: 'bulk-food',
    brand: 'dion',
    food: 'sumac, powder',
    price: '$4.99  1.48 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'traditional blue stilton cheese',
    price: '$19.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'organic creamery',
    food: 'blue cheese crumbles',
    price: '$4.99  4 oz.'
  },
  {
    category: 'cheese',
    brand: 'laqueuille',
    food: "organic blue d'auvergne blue cheese",
    price: '$19.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'rogue creamery organic',
    food: 'smokey blue cheese',
    price: '$21.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about cave-ripened',
    food: 'intense brie cheese- earthy',
    price: '$15.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about cave-ripened',
    food: 'mild cremeux de bourgogne',
    price: '$10.99  7 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about cave-ripened',
    food: 'mild brie cheese- milky',
    price: '$15.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about cave-ripened',
    food: 'medium brie cheese- buttery',
    price: '$15.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: '26 month aged cheddar cheese- intense',
    price: '$14.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: '16-18 month aged white cheddar cheese- medium',
    price: '$9.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: '12 month aged cheddar cheese- mild',
    price: '$5.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: '12 month aged orange cheddar cheese- mild',
    price: '$5.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'self-serve mediterranean olive bar',
    price: '$9.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'tzatziki dip',
    price: '$3.99  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'tzatziki',
    price: '$6.99  17.6 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: "danny's favorite olive mix",
    price: '$9.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'european cheese tray- half quartet',
    price: '$18.00  14 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'balsamic cherry topping',
    price: '$12.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'french cheese tray- half quartet',
    price: '$18.00  14 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'artichoke asiago cheese spread',
    price: '$8.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'crumbled feta cheese -plain, family pack',
    price: '$6.49  16 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans organic',
    food: 'crumbled feta cheese- plain',
    price: '$5.49  6 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'crumbled feta cheese- plain',
    price: '$3.49  6 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'in brine feta cheese- plain',
    price: '$3.49  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'kerrygold',
    food: 'pure irish butter- salted',
    price: '$3.79  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'kerrygold',
    food: 'pure irish butter- unsalted',
    price: '$3.79  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'kerrygold',
    food: 'pure irish butter- naturally softer',
    price: '$4.49  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'la ferme',
    food: 'buerre de barrate- french butter with sea salt',
    price: '$17.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans cave-ripened',
    food: '1916 aged goat cheese',
    price: '$9.99  4.25 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans cave-ripened',
    food: 'cypress grove humboldt fog haze remix cheese',
    price: '$26.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'vermont creamery',
    food: 'crumbled goat cheese -classic chevre',
    price: '$4.99  4 oz.'
  },
  {
    category: 'cheese',
    brand: 'vermont creamery',
    food: 'fresh goat cheese- classic chevre',
    price: '$4.99  4 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'mild gouda cheese',
    price: '$8.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'medium gouda cheese',
    price: '$14.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'intense aged gouda cheese',
    price: '$18.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'beemster pumpkin spice gouda',
    price: '$12.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans italian classics',
    food: 'shredded italian blend cheese- family pack',
    price: '$14.99/lb  1 each approx. 0.75 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans italian classics',
    food: 'fresh mozzarella cheese',
    price: '$3.99  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans italian classics',
    food: 'fresh mozzarella cheese',
    price: '$5.99  16 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'parmigiano reggiano love bites',
    price: '$21.99/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'cheese wrapping paper',
    price: '$1.99  1 ea.'
  },
  {
    category: 'cheese',
    brand: 'trois petits cochons',
    food: 'petits toasts, organic, whole wheat',
    price: '$2.99  2.8 oz.'
  },
  {
    category: 'cheese',
    brand: 'les trois petits cochons',
    food: 'petits toasts',
    price: '$2.99  2.8 oz.'
  },
  {
    category: 'cheese',
    brand: 'mitica',
    food: 'marcona almonds- fried and salted',
    price: '$17.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'aged 6 months manchego cheese- medium',
    price: '$14.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: '3 month aged manchego cheese- mild',
    price: '$10.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'aged 8 months manchego cheese -intense',
    price: '$17.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans food you feel good about',
    food: 'limited edition pastoral cheese',
    price: '$19.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'belgioioso',
    food: 'fresh mozzarella snacking cheese',
    price: '$8.99*  18 oz.'
  },
  {
    category: 'cheese',
    brand: 'trinity valley',
    food: 'handcrafted artisan cheese curds',
    price: '$4.99  8 oz.'
  },
  {
    category: 'cheese',
    brand: 'belgioioso',
    food: 'parmesan snacking cheese',
    price: '$8.99*  18 oz.'
  },
  {
    category: 'cheese',
    brand: 'belgioioso',
    food: 'fontina snacking cheese',
    price: '$8.99*  18 oz.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'mild gruyere- shredded',
    price: '$12.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'aged 5 months le gruyere cheese -medium',
    price: '$16.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'aged 4-6 months gruyere cheese- mild',
    price: '$10.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cheese',
    brand: 'wegmans',
    food: 'cave-aged 12 months le gruyere -intense',
    price: '$19.99/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'cultural',
    brand: 'old el paso',
    food: 'taco shells, crunchy',
    price: '$1.99  4.6 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic food you feel good about',
    food: 'medium salsa',
    price: '$2.79  15.5 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic food you feel good about',
    food: 'mild salsa',
    price: '$2.79  15.5 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic food you feel good about',
    food: 'black bean dip',
    price: '$2.99  16.5 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic',
    food: 'stir-fry sauce',
    price: '$3.29  14 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic',
    food: 'sesame garlic sauce',
    price: '$3.29  14 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic',
    food: 'teriyaki sauce',
    price: '$3.29  14 oz.'
  },
  {
    category: 'cultural',
    brand: 'wegmans',
    food: 'seaweed snack, roasted and sea salted, family pack',
    price: '$5.99  2.04 oz.'
  },
  {
    category: 'cultural',
    brand: "mcvitie's digestive",
    food: 'biscuits, wheat, the original',
    price: '$3.49  14.1 oz.'
  },
  {
    category: 'cultural',
    brand: "mcvitie's digestives",
    food: 'biscuit, milk chocolate',
    price: '$3.49  7 oz.'
  },
  {
    category: 'cultural',
    brand: 'walkers',
    food: 'shortbread, pure butter',
    price: '$3.99  5.3 oz.'
  },
  {
    category: 'cultural',
    brand: 'aero',
    food: 'milk chocolate',
    price: '$1.29  1.26 oz.'
  },
  {
    category: 'cultural',
    brand: 'daelmans',
    food: 'stroopwafels, caramel',
    price: '$4.49  10.94 oz.'
  },
  {
    category: 'cultural',
    brand: 'mestemacher',
    food: 'bread, natural sunflower seed',
    price: '$3.29  17.6 oz.'
  },
  {
    category: 'cultural',
    brand: 'mestemacher',
    food: 'bread, organic, whole rye',
    price: '$3.29  17.6 oz.'
  },
  {
    category: 'cultural',
    brand: 'mestemacher',
    food: 'bread, organic three grain',
    price: '$3.29  17.6 oz.'
  },
  {
    category: 'cultural',
    brand: 'maille',
    food: 'gherkins, original',
    price: '$5.99  13.5 fl. oz.'
  },
  {
    category: 'cultural',
    brand: 'lowensenf',
    food: 'mustard, extra hot, original',
    price: '8.7 oz.'
  },
  {
    category: 'cultural',
    brand: 'mezzo mix',
    food: 'soda',
    price: '$1.99  11.7 fl. oz.'
  },
  {
    category: 'cultural',
    brand: 'seitenbacher',
    food: 'broth and seasoning, vegetable',
    price: '5 oz.'
  },
  {
    category: 'cultural',
    brand: 'laxmi brand',
    food: 'basmati rice',
    price: '$5.99  2 lb.'
  },
  {
    category: 'cultural',
    brand: 'wegmans organic food you feel good about',
    food: 'tahini',
    price: '$6.99  16 oz.'
  },
  {
    category: 'cultural',
    brand: 'saffron road',
    food: 'chickpeas, crunchy, sea salt',
    price: '$3.99  6 oz.'
  },
  {
    category: 'cultural',
    brand: 'deer park',
    food: 'basmati rice',
    price: '$19.99  20 lb.'
  },
  {
    category: 'cultural',
    brand: "sylvia's",
    food: 'crispy fried chicken mix',
    price: '10 oz.'
  },
  {
    category: 'cultural',
    brand: 'walkerswood',
    food: 'jerk seasoning, traditional jamaican, mild',
    price: '$4.99  10 oz.'
  },
  {
    category: 'cultural',
    brand: 'walkerswood',
    food: 'jerk seasoning, traditional, hot & spicy',
    price: '$4.99  10 oz.'
  },
  {
    category: 'cultural',
    brand: 'walkerswood',
    food: 'jerk marinade, spicy',
    price: '$6.49  17 fl. oz.'
  },
  {
    category: 'cultural',
    brand: 'cacique',
    food: 'queso fresco',
    price: '$2.99  10 oz.'
  },
  {
    category: 'cultural',
    brand: 'cacique ranchero',
    food: 'cheese, part skim milk',
    price: '$3.49  10 oz.'
  },
  {
    category: 'cultural',
    brand: 'cacique',
    food: 'table cream, grade a',
    price: '$3.49  15 fl. oz.'
  },
  {
    category: 'cultural',
    brand: 'cacique',
    food: 'cotija',
    price: '$4.99  10 oz.'
  },
  {
    category: 'cultural',
    brand: 'flamous',
    food: 'chips, falafel, original',
    price: '$3.99  8 oz.'
  },
  {
    category: 'cultural',
    brand: 'krinos',
    food: 'tahini',
    price: '$7.99  1 lb.'
  },
  {
    category: 'cultural',
    brand: 'krinos',
    food: 'grape leaves, in vinegar brine',
    price: '$5.49  1 lb.'
  },
  {
    category: 'cultural',
    brand: 'sultan',
    food: 'molasses, pomegranate',
    price: '$5.49  10.5 fl. oz.'
  },
  {
    category: 'cultural',
    brand: 'stonewall kitchen organics',
    food: 'jam, organic, maple apple onion',
    price: '$6.99  9 oz.'
  },
  {
    category: 'cultural',
    brand: 'stonewall kitchen organics',
    food: 'jam, organic, sweet chili',
    price: '$6.99  8.5 oz.'
  },
  {
    category: 'cultural',
    brand: 'stonewall kitchen',
    food: 'jam, wild maine blueberry',
    price: '$6.99  12.5 oz.'
  },
  {
    category: 'cultural',
    brand: 'stonewall kitchen',
    food: 'jelly, hot pepper',
    price: '$6.99  13 oz.'
  },
  {
    category: 'cultural',
    brand: 'goya',
    food: 'capers',
    price: '$1.99  2.25 oz.'
  },
  {
    category: 'cultural',
    brand: 'goya',
    food: 'olives, spanish, manzanilla',
    price: '$2.29  6.75 oz.'
  },
  {
    category: 'cultural',
    brand: 'goya',
    food: 'salad olives, pitted manzanilla',
    price: '$2.29  7 oz.'
  },
  {
    category: 'cultural',
    brand: 'goya',
    food: 'olive oil, extra virgin',
    price: '$7.49  17 fl. oz.'
  },
  {
    category: 'deli',
    brand: 'russer',
    food: 'wunderbar german brand bologna',
    price: '$2.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'russer',
    food: 'wunderbar bologna',
    price: '$2.99  1 lb.'
  },
  {
    category: 'deli',
    brand: "zweigle's",
    food: 'beef bologna',
    price: '$6.49  1 lb.'
  },
  {
    category: 'deli',
    brand: "seltzer's",
    food: 'bologna, lebanon, sweet',
    price: '$6.79  16 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'sweet sopressata salame',
    price: '$6.99  9 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'prosciutto',
    price: '$4.99  4 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'diced pancetta',
    price: '$4.99  4 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'genoa salame',
    price: '$5.99  9 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'white american cheese',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'provolone cheese',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'sliced provolone cheese',
    price: '$4.99  5 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'sliced mild cheddar cheese',
    price: '$4.99  5 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic',
    food: 'fully cooked uncured ham',
    price: '$11.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'fully cooked uncured ham, presliced',
    price: '$6.49  7 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans',
    food: '97% fat free ham',
    price: '$4.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans',
    food: 'old fashioned ham off the bone',
    price: '$7.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans food you feel good about',
    food: 'oktoberfest bratwurst',
    price: '$6.99  16 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans food you feel good about',
    food: 'german red hots',
    price: '$5.39  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans food you feel good about',
    food: 'german brand bratwurst',
    price: '$6.99  16 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans handcrafted by josef brunner',
    food: 'smoked andouille sausage',
    price: '$6.99  16 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'riserva hard salami',
    price: '$7.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'genoa salami',
    price: '$7.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'hard salami',
    price: '$7.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans italian classics',
    food: 'genoa salami',
    price: '$4.49  6 oz.'
  },
  {
    category: 'deli',
    brand: 'josef brunner',
    food: 'fine smoked liverwurst',
    price: '$4.49  8 oz.'
  },
  {
    category: 'deli',
    brand: 'josef brunner',
    food: 'fine liverwurst',
    price: '$4.49  8 oz.'
  },
  {
    category: 'deli',
    brand: 'schaller & webber',
    food: 'teawurst',
    price: '$4.49  7 oz.'
  },
  {
    category: 'deli',
    brand: "zweigle's",
    food: 'braunschweiger',
    price: '$5.49  1 lb.'
  },
  {
    category: 'deli',
    brand: "zweigle's",
    food: 'olive loaf',
    price: '$5.99  1 lb.'
  },
  {category: 'deli', brand: "smith's", food: 'olive loaf', price: '1 lb.'},
  {category: 'deli', brand: 's&w', food: 'headcheese', price: '1 lb.'},
  {
    category: 'deli',
    brand: 'russer',
    food: 'sweet cooked salami',
    price: '1 lb.'
  },
  {
    category: 'deli',
    brand: 'margherita',
    food: 'sandwich pepperoni',
    price: '$7.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'citterio',
    food: 'salumi pronti pepperoni- thick sliced',
    price: '$9.49  1 lb.'
  },
  {
    category: 'deli',
    brand: 'margherita',
    food: 'stick pepperoni',
    price: '$8.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'applegate',
    food: 'pepperoni, uncured',
    price: '$5.49  5 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'grass fed fully cooked roast beef',
    price: '$12.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'grass fed fully cooked roast beef, pre sliced',
    price: '$6.99  7 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans',
    food: 'london broil',
    price: '$8.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans delicatessen',
    food: 'black angus seasoned roast beef, usda choice top round',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans delicatessen',
    food: 'mini snackers tray',
    price: '$9.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans',
    food: 'ez delights tray',
    price: '$20.00  48 oz.'
  },
  {
    category: 'deli',
    brand: 'fiorucci',
    food: 'panino, prosciutto',
    price: '$6.49  5 oz.'
  },
  {
    category: 'deli',
    brand: 'fiorucci',
    food: 'panino, uncured hard salame',
    price: '$5.99  6 oz.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'oven roasted turkey breast',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'honey roasted turkey breast',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic food you feel good about',
    food: 'hickory smoked turkey breast',
    price: '$10.99  1 lb.'
  },
  {
    category: 'deli',
    brand: 'wegmans organic',
    food: 'oven roasted chicken breast',
    price: '$10.99  1 lb.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'crescent rolls',
    price: '$1.49*  8 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'biscuits, buttermilk',
    price: '$0.69  7.5 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'jumbo flaky biscuits, buttermilk',
    price: '$1.19*  16 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'cinnamon rolls with icing',
    price: '$1.49*  12.4 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic',
    food: 'salted butter sweet cream',
    price: '$4.99  1 lb.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'salted butter sweet cream',
    price: '$2.49  1 lb.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'butter, unsalted, sweet cream',
    price: '$2.49  1 lb.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'spreadable butter with canola oil',
    price: '$3.29  15 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'extra sharp cheddar cheese, white',
    price: '$6.49  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'cheese sticks, mozzarella, family pack',
    price: '$8.99  48 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'cheese, extra sharp cheddar, yellow',
    price: '$6.49  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'low-moisture part-skim shredded mozzarella, family pack',
    price: '$11.49  80 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'half & half, grade a pasteurized, homogenized',
    price: '$1.99  16 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'half & half',
    price: '$3.49  1 qt.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'ultra pasteurized half & half',
    price: '$1.69  1 pt.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'half & half',
    price: '$1.19  16 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'oscar mayer',
    food: 'bologna',
    price: '$2.49  16 oz.'
  },
  {
    category: 'diary',
    brand: 'oscar mayer deli fresh',
    food: 'turkey breast, oven roasted',
    price: '$3.49  9 oz.'
  },
  {
    category: 'diary',
    brand: 'hillshire farm deli select',
    food: 'turkey breast, oven roasted, ultra thin',
    price: '$3.79  9 oz.'
  },
  {
    category: 'diary',
    brand: "land o'frost simply delicious",
    food: 'turkey breast, slow roasted',
    price: '$3.29  8 oz.'
  },
  {
    category: 'diary',
    brand: "kelchner's",
    food: 'horse-radish',
    price: '$2.79  6.5 oz.'
  },
  {
    category: 'diary',
    brand: "kelchner's",
    food: 'cocktail sauce',
    price: '$2.79  7 oz.'
  },
  {
    category: 'diary',
    brand: "kelchner's",
    food: 'cocktail sauce',
    price: '$5.49  16 oz.'
  },
  {
    category: 'diary',
    brand: "kelchner's",
    food: 'horseradish sauce, creamy',
    price: '$2.79  6 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'small curd cottage cheese, 1% milkfat, family pack',
    price: '$3.99  48 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: '2% milkfat cottage cheese, small curd',
    price: '$3.49  16 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: '4% milkfat minimum cottage cheese, small curd',
    price: '$3.49  16 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about cheese',
    food: 'part skim ricotta',
    price: '$2.49  15 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'original cream cheese, family pack',
    price: '$4.49  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'cream cheese',
    price: '$2.99  8 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'whipped cream cheese',
    price: '$2.79  12 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'cream cheese, original',
    price: '$1.29*  8 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'fill & bake pie crusts, 9 inch',
    price: '$1.99*  15 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'chocolate vanilla swirl pudding',
    price: '$2.99  23.25 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'sugar free chocolate vanilla swirl pudding',
    price: '$2.99  23.25 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'homestyle rice pudding',
    price: '$2.29  22 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'hummus, family pack',
    price: '$5.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'hummus, family pack',
    price: '$5.99  24 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'roasted red pepper hummus, family pack',
    price: '$5.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'roasted garlic hummus, family pack',
    price: '$5.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'large brown eggs',
    price: '$3.99  24 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'three dozen large eggs, family pack',
    price: '$4.19  72 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'extra large brown eggs',
    price: '$4.19  27 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'cage free grade a jumbo brown eggs',
    price: '$5.29  30 oz.'
  },
  {
    category: 'diary',
    brand: 'del monte sunfresh',
    food: 'red grapefruit, no sugar added',
    price: '$8.49  64 oz.'
  },
  {
    category: 'diary',
    brand: 'del monte sun fresh',
    food: 'red grapefruit, in extra light syrup',
    price: '$8.49  64 oz.'
  },
  {
    category: 'diary',
    brand: 'del monte fruit naturals',
    food: 'red grapefruit, no sugar added',
    price: '$1.59  6.5 oz.'
  },
  {
    category: 'diary',
    brand: 'del monte fruit naturals',
    food: 'grapefruit, red',
    price: '$1.59  7 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'skinless uncured chicken hot dogs',
    price: '$4.99  12 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'sliced pepperoni, italian style',
    price: '$2.49  6 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'sliced pepperoni, turkey',
    price: '$2.49  4.5 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans',
    food: 'italian style pepperoni',
    price: '$3.29  7 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'premium orange juice, original, pulp free',
    price: '$4.49  59 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'no pulp premium orange juice, family pack',
    price: '$4.79  128 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'orange juice',
    price: '$3.89  128 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'premiun orange juice, calcium & vitamin d',
    price: '$4.49  59 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: '2% reduced fat milk',
    price: '$2.09  1 gal.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: '1% low fat milk',
    price: '$1.79  1 gal.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'fat free milk',
    price: '$1.69  1 gal.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'vitamin d whole milk',
    price: '$2.09  1 gal.'
  },
  {
    category: 'diary',
    brand: 'rice dream',
    food: 'rice drink, enriched, original',
    price: '$3.99  64 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'rice dream',
    food: 'rice drink, enriched, vanilla',
    price: '$3.99  64 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'horizon organic',
    food: 'eggnog, organic lowfat',
    price: '$3.99  1 qt.'
  },
  {
    category: 'diary',
    brand: 'upstate farms',
    food: 'egg nog',
    price: '$2.79  1 qt.'
  },
  {
    category: 'diary',
    brand: 'upstate farms',
    food: 'egg nog',
    price: '$1.79  1 pt.'
  },
  {
    category: 'diary',
    brand: 'lactaid',
    food: 'eggnog',
    price: '$3.19  32 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans italian classics',
    food: 'cheese tortellini, family pack',
    price: '$9.49  40 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans italian classics',
    food: 'cheese ravioli, family pack',
    price: '$9.49  40 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans italian classics',
    food: 'potato gnocchi, family pack',
    price: '$6.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans italian classics',
    food: 'marinara sauce, family pack',
    price: '$8.99  42 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'refrigerated kosher dill sandwich slices pickles',
    price: '$2.99  24 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'refrigerated kosher dill spears pickles',
    price: '$2.99  24 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'refrigerated kosher dill mini pickles',
    price: '$2.99  24 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'refrigerated kosher dill halves pickles',
    price: '$2.99  32 fl. oz.'
  },
  {
    category: 'diary',
    brand: 'nardone bros.',
    food: 'pizza, family size',
    price: '32 oz.'
  },
  {
    category: 'diary',
    brand: "longo's",
    food: 'pizza crusts, tavern style',
    price: '13 oz.'
  },
  {
    category: 'diary',
    brand: "longo's",
    food: 'pizza crusts, sicilian',
    price: '32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'whipped mashed potatoes, family pack',
    price: '$5.49  48 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'whipped mashed potatoes',
    price: '$3.19  24 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'garlic cheese mashed potatoes',
    price: '$3.19  20 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'sweet mashed potatoes',
    price: '$3.19  20 oz.'
  },
  {
    category: 'diary',
    brand: "reser's american classics",
    food: 'potato salad, original',
    price: '$2.69  1 lb.'
  },
  {
    category: 'diary',
    brand: "reser's american classics",
    food: 'macaroni salad',
    price: '$2.69  1 lb.'
  },
  {
    category: 'diary',
    brand: "reser's",
    food: 'cole slaw',
    price: '$2.69  15 oz.'
  },
  {
    category: 'diary',
    brand: 'lunchables',
    food: 'lunch combinations, extra cheesy pizza',
    price: '$1.99  4.2 oz.'
  },
  {
    category: 'diary',
    brand: 'lunchables',
    food: 'lunch combinations, turkey & american cracker stackers',
    price: '$1.99  3.4 oz.'
  },
  {
    category: 'diary',
    brand: 'lunchables',
    food: 'lunch combinations, ham & cheddar cracker stackers',
    price: '$1.99  3.5 oz.'
  },
  {
    category: 'diary',
    brand: 'lunchables',
    food: 'lunch combinations, pizza with pepperoni',
    price: '$1.99  4.3 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic food you feel good about',
    food: 'sour cream',
    price: '$2.49  16 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'sour cream, family pack',
    price: '$3.49  48 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'sour cream',
    price: '$1.39*  16 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'sour cream',
    price: '$0.99  8 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'fajita tortilla gordita style, family pack',
    price: '$2.49  30.5 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans organic',
    food: 'stoneground yellow corn tortillas',
    price: '$2.99  12.69 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'taco tortillas, gordita style',
    price: '$0.99  10 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'fajita tortillas, gordita style',
    price: '$1.49  15 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'heavy whipped cream',
    price: '$3.49  14 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'light whipped cream',
    price: '$3.49  14 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'light whipped cream',
    price: '$2.19  6.5 oz.'
  },
  {
    category: 'diary',
    brand: 'reddi wip',
    food: 'whipped topping, original',
    price: '$2.79  6.5 oz.'
  },
  {
    category: 'diary',
    brand: "fleischmann's activedry",
    food: 'yeast, original',
    price: '$1.29*  0.75 oz.'
  },
  {
    category: 'diary',
    brand: "fleischmann's rapidrise",
    food: 'yeast, instant, fast acting',
    price: '$1.29*  0.75 oz.'
  },
  {
    category: 'diary',
    brand: "fleischmann's",
    food: 'yeast, active dry, original',
    price: '$4.69  4 oz.'
  },
  {
    category: 'diary',
    brand: "fleischmann's",
    food: 'yeast, pizza crust',
    price: '$1.29*  0.75 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'plain nonfat greek yogurt, family pack',
    price: '$3.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'vanilla nonfat greek yogurt, family pack',
    price: '$3.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'vanilla lowfat yogurt',
    price: '$1.99  32 oz.'
  },
  {
    category: 'diary',
    brand: 'wegmans food you feel good about',
    food: 'plain lowfat yogurt',
    price: '$1.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic',
    food: 'chicken dumplings, family pack',
    price: '$9.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans asian classics',
    food: 'vegetable potstickers',
    price: '$8.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: "hors d'oeuvres mini quiche collection, family pack",
    price: '$15.99  18.62 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: "hors d'oeuvres entertainment collection, 24 pieces, family pack",
    price: '$12.99  14.4 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'multigrain waffles',
    price: '$1.99  7.4 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'blueberry naturally flavored waffles',
    price: '$1.99  7.4 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'homestyle waffles',
    price: '$1.99  7.4 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'flaxseed waffles',
    price: '$1.99  7.4 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'breaded chicken breast strips, family pack',
    price: '$11.99  46 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'breaded chicken breast nuggets, family pack',
    price: '$11.99  46 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'chicken breast patties dinosaur shaped nuggets, family pack',
    price: '$11.99  46 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'breaded chicken breast strips',
    price: '$7.49  22 oz.'
  },
  {
    category: 'frozen',
    brand: 'sara lee oven fresh',
    food: 'pie, pumpkin',
    price: '$3.99*  34 oz.'
  },
  {
    category: 'frozen',
    brand: 'sara lee oven fresh',
    food: 'pie, dutch apple',
    price: '$3.99*  34 oz.'
  },
  {
    category: 'frozen',
    brand: 'edwards',
    food: "pie, hershey's chocolate creme",
    price: '$4.99*  25.5 oz.'
  },
  {
    category: 'frozen',
    brand: 'delizza',
    food: 'eclairs, belgian custard cream, mini',
    price: '$4.99  14.8 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'mozzarella sticks, family pack',
    price: '$7.29  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'potato skins, family pack',
    price: '$7.49  23 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'southwest veggie burgers, family pack',
    price: '$9.99  28.2 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'veggie tamale meal, family pack',
    price: '$5.99*  34 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'tater puffs',
    price: '$4.19  80 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic',
    food: 'tater puffs',
    price: '$2.49  16 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'crinkle cut potatoes',
    price: '$4.19  80 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'crinkle cut potatoes',
    price: '$2.49  16 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'garlic & cheese toast',
    price: '$2.49  13 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'garlic toast',
    price: '$2.29  11.25 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'garlic bread sticks',
    price: '$2.49  10.5 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans italian classics',
    food: 'roasted garlic bread',
    price: '$3.29  16 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'rosemary olive oil artisan rolls',
    price: '$3.99  18 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'sourdough artisan rolls',
    price: '$3.99  18 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'ciabatta artisan rolls',
    price: '$3.99  16.5 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'multigrain artisan rolls',
    price: '$3.99  18 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'frozen marrow bones',
    price: '$2.69  1 lb.'
  },
  {
    category: 'frozen',
    brand: "banquet brown 'n serve",
    food: 'sausage links, original, value pack',
    price: '$5.49  32 oz.'
  },
  {
    category: 'frozen',
    brand: "banquet brown 'n serve",
    food: 'sausage patties, fully cooked, original',
    price: '$5.49  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'jones dairy farm golden brown',
    food: 'turkey sausage, links',
    price: '$6.99  20 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'crunchy pollock fish sticks, family pack',
    price: '$8.29  64 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'crunchy haddock fillets',
    price: '$3.99  11.7 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'crunchy popcorn shrimp',
    price: '$3.69  8 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'crunchy pollock fish sticks',
    price: '$2.99  12 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about just picked and quickly frozen',
    food: 'blueberries, family pack',
    price: '$8.49  48 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about just picked and quickly frozen',
    food: 'mixed berries, family pack',
    price: '$8.79  48 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic',
    food: 'blueberries, family pack',
    price: '$8.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about just picked and quickly frozen',
    food: 'whole strawberries, family pack',
    price: '$5.79  48 oz.'
  },
  {category: 'frozen', brand: 'wegmans', food: 'ice', price: '$3.99  18 lb.'},
  {category: 'frozen', brand: 'wegmans', food: 'ice', price: '$1.99  7 lb.'},
  {category: 'frozen', brand: 'wegmans', food: 'ice', price: '7 lb.'},
  {
    category: 'frozen',
    brand: 'arctic glacier',
    food: 'ice, premium',
    price: '20 lb.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'vanilla premium ice cream',
    price: '$3.49  1 pt.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'vanilla & chocolate twist premium ice cream',
    price: '$3.49  1 pt.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'dark chocolate premium ice cream',
    price: '$3.49  1 pt.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic food you feel good about',
    food: 'mocha java premium ice cream',
    price: '$3.49  1 pt.'
  },
  {
    category: 'frozen',
    brand: "smucker's",
    food: 'topping, hot fudge',
    price: '$1.99  11.75 oz.'
  },
  {
    category: 'frozen',
    brand: 'joy',
    food: 'sugar cones',
    price: '$2.49  5 oz.'
  },
  {
    category: 'frozen',
    brand: "smucker's",
    food: 'topping, caramel flavored',
    price: '$1.99  12.25 oz.'
  },
  {
    category: 'frozen',
    brand: 'joy',
    food: 'ice cream cups',
    price: '$1.99  1.75 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'fudge bars, low fat',
    price: '$3.69  30 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'vanilla ice cream sandwiches',
    price: '$3.49  42 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans ice cream bars',
    food: 'vanilla',
    price: '$2.99  36 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'fudge bars, no sugar added',
    price: '$3.69  25 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic',
    food: 'chicken dumplings, family pack',
    price: '$9.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans asian classics',
    food: 'vegetable potstickers',
    price: '$8.99  32 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'vegetable egg rolls',
    price: '$4.49  15 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'chicken & vegetable egg rolls',
    price: '$4.49  15 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: '100% juice, orange, frozen concentrated',
    price: '$1.99  48 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: '100% juice, orange, pulp free, frozen concentrated',
    price: '$1.99  48 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'lemonade, frozen concentrated',
    price: '$1.69  64 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'frozen concentrated orange juice, calcium rich',
    price: '$1.99  48 fl. oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'oven-baked meatballs with romano cheese, family pack',
    price: '$10.39  64 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'cheese ravioli, family pack',
    price: '$5.49  48 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'cheese tortellini, family pack',
    price: '$6.99  48 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'white cheddar pierogies, family pack',
    price: '$6.49  64 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'bake & rise pizza, pepperoni, family pack',
    price: '$8.69  88.8 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'bake & rise four cheese pizza, famly pack',
    price: '$8.69  84.6 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'thin crust cheese pizza, family pack',
    price: '$8.69  39.9 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'thin crust uncured pepperoni pizza, family pack',
    price: '$8.69  40.35 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about just picked and quickly frozen',
    food: 'broccoli florets, family pack',
    price: '$5.99  64 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans organic',
    food: 'just picked and quickly frozen broccoli florets, family pack',
    price: '$5.99  64 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about just picked and quickly frozen',
    food: 'sweet peas, family pack',
    price: '$4.69  80 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans food you feel good about',
    food: 'just picked and quickly frozen mixed vegetables, family pack',
    price: '$4.69  80 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'whipped topping',
    price: '$0.99*  8 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'whipped topping, lite',
    price: '$0.99*  8 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'whipped topping',
    price: '$2.49  16 oz.'
  },
  {
    category: 'frozen',
    brand: 'wegmans',
    food: 'whipped topping, fat free',
    price: '$0.99*  8 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'all purpose flour',
    price: '$2.99  32 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'all purpose unbleached flour',
    price: '$0.99*  5 lb.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: '100% pumpkin, solid pack',
    price: '$1.99  15 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'semi-sweet chocolate morsels, family pack',
    price: '$4.39*  36 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'cereal, raisin bran',
    price: '$1.99  18.7 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'vanilla & almonds granola',
    price: '$3.99  12 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'strawberry fruit & grain bars made with organic grains',
    price: '$2.69  10.4 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'fruit & grain bars, apple',
    price: '$2.69  10.4 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate, 72% cacao',
    price: '$1.99  3 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate with sea salt toffee',
    price: '$1.99  3 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate with almonds',
    price: '$1.99  3 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate with raspberry flavored flakes',
    price: '$1.99  3 oz.'
  },
  {
    category: 'pantry',
    brand: 'bumble bee',
    food: 'clams, chopped, in clam juice',
    price: '$1.99  6.5 oz.'
  },
  {
    category: 'pantry',
    brand: "bumble bee snow's",
    food: 'clams, in clam juice, minced',
    price: '$1.99  6.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'bumble bee',
    food: 'sardines in water',
    price: '$1.29  3.75 oz.'
  },
  {
    category: 'pantry',
    brand: 'bumble bee',
    food: 'salmon, pink, premium wild',
    price: '$3.49  14.75 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: 'san marzano tomato of agro sarnese-nocerino area, family pack',
    price: '$8.99  90 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'tomato puree',
    price: '$0.99  29 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'diced tomatoes, chili style',
    price: '$0.69  14.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'crushed tomatoes',
    price: '$0.99  28 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'wavy potato chips',
    price: '$1.50*  11 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'blue corn tortilla chips',
    price: '$2.50*  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'popcorn, himalayan salt, family pack',
    price: '$3.99  10 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'wavy potato chips, family pack',
    price: '$2.69  20 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'bbq sauce original',
    price: '$2.29  18 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'lemon & garlic marinade',
    price: '$3.49  16 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'salsa verde hot sauce',
    price: '$0.99*  5 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'teriyaki marinade',
    price: '$3.49  16 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "w o's halloween double filled chocolate sandwich creme cookies",
    price: '$1.99  15.35 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'honey graham crackers',
    price: '$1.99  14.4 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "w o's chocolate sandwich creme cookies",
    price: '$1.99  14.3 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "w o's double filled chocolate sandwich creme cookies",
    price: '$1.99  15.35 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'thin & crispy wheat crackers',
    price: '$1.79*  9 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'whole wheat baked crackers',
    price: '$1.79*  8.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'original saltines',
    price: '$1.49  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'soup & snack oyster crackers',
    price: '$1.99  8 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'yellow cling diced peaches',
    price: '$2.19  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'unsweetened apple sauce pouches, family pack',
    price: '$8.99  76.08 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'applesauce, no sugar added',
    price: '$2.79  24 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'cinnamon apple sauce pouches, family pack',
    price: '$8.99  76.08 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'breakfast gift basket',
    price: '$19.99  1 ea.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'snacking gift basket',
    price: '$24.99  1 ea.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: 'gift basket',
    price: '$29.99  1 ea.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'coffee & tea gift basket',
    price: '$24.99  1 ea.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'gluten free penne rigate',
    price: '$1.99  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'gluten free fusilli',
    price: '$1.99  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'gluten free rigatoni',
    price: '$1.99  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'gluten free elbows',
    price: '$1.99  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'mccormick',
    food: 'seasoning mix, chili, original',
    price: '$1.49  1.25 oz.'
  },
  {
    category: 'pantry',
    brand: 'mccormick organics',
    food: 'seasoning mix, chili',
    price: '$1.69  1.25 oz.'
  },
  {
    category: 'pantry',
    brand: 'mccormick organics',
    food: 'seasoning mix, taco',
    price: '$1.69  1 oz.'
  },
  {
    category: 'pantry',
    brand: 'mccormick organics',
    food: 'seasoning mix, fajita',
    price: '$1.69  1 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'tomato ketchup',
    price: '$1.99  20 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'tomato ketchup',
    price: '$2.99  32 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'spicy brown mustard',
    price: '$1.69  12 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'yellow mustard',
    price: '$1.69  12 oz.'
  },
  {
    category: 'pantry',
    brand: "hellmann's",
    food: 'mayonnaise, real',
    price: '$3.69  30 fl. oz.'
  },
  {
    category: 'pantry',
    brand: "hellmann's",
    food: 'classic mayonnaise',
    price: '$2.49  30 fl. oz.'
  },
  {
    category: 'pantry',
    brand: "hellmann's",
    food: 'classic mayonnaise',
    price: '$1.79  15 fl. oz.'
  },
  {
    category: 'pantry',
    brand: "hellmann's",
    food: 'light mayonnaise',
    price: '$1.79  15 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: '100% mediterranean blend olive oil, pure',
    price: '$3.49  16.9 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'basting oil',
    price: '$6.99  8 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'basting oil',
    price: '$8.99  16 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'extra virgin coconut oil, unrefined',
    price: '$4.99  14 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'kalamata olives, pitted',
    price: '$3.99  5.6 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'roasted red peppers, whole',
    price: '$4.49  16.2 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'sliced ripe olives',
    price: '$1.39  2.25 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'olives stuffed with garlic',
    price: '$4.99  7.8 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: 'cavatappi premium enriched pasta',
    price: '$1.79  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'spaghetti, family pack',
    price: '$2.99  64 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'thin spaghetti, family pack',
    price: '$2.99  64 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'penne rigate, family pack',
    price: '$2.99  64 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: "grandma's pomodoro sauce",
    price: '$2.29  24 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: "grandma's pomodoro sauce, family pack",
    price: '$6.49  90 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans italian classics',
    food: "grandpa's sauce, family pack",
    price: '$6.49  90 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'sauce, tomato basil',
    price: '$0.99*  24 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'creamy peanut butter, family pack',
    price: '$5.09  80 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'wild & raw honey',
    price: '$5.99  16 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'clover honey, family pack',
    price: '$10.79  80 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'clover honey',
    price: '$3.29  12 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'lemon vinaigrette',
    price: '$2.99  12 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'white balsamic vinaigrette',
    price: '$2.99  12 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'lightly seasoned twice-baked croutons',
    price: '$2.49  4.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'caesar twice-baked croutons',
    price: '$2.49  4.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'near east',
    food: 'rice pilaf mix, original',
    price: '$2.19  6.09 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'jasmine rice',
    price: '$4.79  35 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'basmati rice',
    price: '$4.79  35 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'arborio rice',
    price: '$4.79  35 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'italian style wedding with meatballs & chicken ready to serve soup',
    price: '$1.50*  19 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'free range chicken broth',
    price: '$2.29*  32 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'vegetable broth',
    price: '$2.29*  32 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'beef broth',
    price: '$2.29*  32 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "cracked pepper seasoning shak'r",
    price: '$3.99  3.53 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'premium pure vanilla extract',
    price: '$6.99  2 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'organic hulled sesame seeds',
    price: '$4.99  1 lb.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'pure vanilla extract',
    price: '$3.99  2 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'solid white albacore tuna in water',
    price: '$1.49  6 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'tuna, solid white albacore, in water, family pack',
    price: '$11.29  48 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'chunk light yellowfin tuna in water, family pack',
    price: '$9.99  48 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'premium chunk chicken breast in water, family pack',
    price: '$9.99  75 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "whole kernel crisp'n sweet corn",
    price: '$0.49  15.25 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic food you feel good about',
    food: 'whole kernel corn',
    price: '$1.49  15.25 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: 'black beans, family pack',
    price: '$3.69  93 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans food you feel good about',
    food: "whole kernal crisp'n sweet corn, family pack",
    price: '$2.79  91.5 oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'white distilled vinegar, family pack',
    price: '$2.69  128 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans',
    food: 'vinegar, balsamic, of modena',
    price: '$3.99  16.9 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic italian classics',
    food: 'organic glaze with balsamic vinegar of modena',
    price: '$5.99  7.3 fl. oz.'
  },
  {
    category: 'pantry',
    brand: 'wegmans organic',
    food: 'apple cider vinegar with the mother',
    price: '$4.99  33.8 fl. oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans ready to cook',
    food: 'small homestyle meatloaf',
    price: '$6.50  15 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans ready to cook',
    food: 'specialty irradiated bacon cheddar burgers',
    price: '$6.99/lb  1 package approx. 0.7 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans ready to cook',
    food: 'garlic parmesan chicken breast',
    price: '$6.50  6 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans ready to cook',
    food: 'large homestyle beef meatloaf',
    price: '$13.00  30 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'bacon, hickory smoked, thick sliced, family pack',
    price: '$15.99  48 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: 'uncured bacon, apple wood smoked',
    price: '$8.99  12 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: 'uncured turkey bacon',
    price: '$6.29  10 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic',
    food: 'cherrywood smoked uncured bacon',
    price: '$8.99  12 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans ready to cook',
    food: 'beef chuck roast with stew vegetables (cook in bag), family pack',
    price: '$20.00  1 ea.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'boneless beef strip steak 1st cut',
    price: '$7.49/lb  1 package approx. 1.7 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'strip steaks, family pack',
    price: '$7.99/lb  1 package approx. 3.4 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'chuck roast, family pack',
    price: '$4.39/lb  1 package approx. 5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'boneless & skinless chicken breasts with rib meat, family pack',
    price: '$1.99/lb  1 package approx. 6 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'lemon & garlic marinated chicken breast cutlet, family pack',
    price: '$4.49/lb  1 package approx. 4.5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'italian style boneless marinated chicken breast cutlet, family pack',
    price: '$4.49/lb  1 package approx. 4.5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food:
      'boneless & skinless highly trimmed chicken breast cutlets, family pack',
    price: '$2.79/lb*  1 package approx. 4 lb.'
  },
  {
    category: 'meat',
    brand: 'great range',
    food: 'bison, ground',
    price: '$9.99  16 oz.'
  },
  {
    category: 'meat',
    brand: 'great range',
    food: 'steaks, sirloin, bison',
    price: '$14.99  12 oz.'
  },
  {
    category: 'meat',
    brand: 'dartagnan',
    food: 'sausage, andouille',
    price: '$6.49  12 oz.'
  },
  {
    category: 'meat',
    brand: 'dartagnan',
    food: 'duck breast, fresh magret, moulard',
    price: '$15.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: '80% lean ground beef, family pack',
    price: '$2.49/lb  1 package approx. 6.1 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: 'ground turkey',
    price: '$5.99  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'ground turkey',
    price: '$8.97  48 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: '93/7 grass fed ground beef',
    price: '$6.79  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'brown sugar boneless ham steaks',
    price: '$3.69  8 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'honey boneless ham steaks',
    price: '$3.69  8 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'boneless ham slices',
    price: '$6.79  14 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'boneless brown sugar cured 1/4 ham, dinner sliced',
    price: '$4.99/lb  1 package approx. 2.5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'bbq pulled pork with memphis-style bbq sauce',
    price: '$6.79  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'sauerkraut',
    price: '$2.69  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'smoked beef brisket with kansas city-style bbq sauce',
    price: '$12.99  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'bbq center cut spare ribs with kansas city-style bbq sauce',
    price: '$12.99  36 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'lamb rack',
    price: '$22.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'thomas farms',
    food: 'lamb, ground, grass fed',
    price: '$7.49  16 oz.'
  },
  {
    category: 'meat',
    brand: 'thomas farms',
    food: 'free range frenched rack of lamb',
    price: '$21.49/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'thomas farms',
    food: 'frenched rack of lamb',
    price: '$14.99/lb  1 each approx. 1.5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic',
    food: 'boneless skinless chicken breasts',
    price: '$7.99/lb  1 package approx. 1.5 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: 'lemon garlic marinated chicken breast cutlet',
    price: '$9.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic food you feel good about',
    food: '93/7 grass fed ground beef',
    price: '$6.79  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic',
    food: 'boneless skinless chicken breasts, family pack',
    price: '$5.99/lb  1 package approx. 3 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'boneless center cut pork chops, family pack',
    price: '$2.19/lb  1 package approx. 3.32 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'pork tenderloin, 4 pieces, family pack',
    price: '$2.69/lb  1 package approx. 4.6 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'whole bone-in pork shoulder blade roast, family pack',
    price: '$1.49/lb  1 package approx. 8.4 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans',
    food: 'center-cut boneless pork roast',
    price: '$3.19/lb  1 package approx. 3 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'home-style gravy',
    price: '$2.99  8 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'demi-glace',
    price: '$3.49  8 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'home-style gravy',
    price: '24 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans italian classics',
    food: 'mild italian sausage, family pack',
    price: '$2.99/lb  1 package approx. 3 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans italian classics',
    food: 'all pork hot italian sausage link, family pack',
    price: '$2.99/lb  1 package approx. 3.25 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic italian classics',
    food: 'mild pork italian sausage',
    price: '$7.99/lb  1 package approx. 1.3 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'breakfast maple pork sausage links',
    price: '$4.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans organic',
    food: 'turkey breast',
    price: '$5.99/lb  1 each approx. 4.6 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'turkey wings (2)',
    price: '$2.19/lb  1 package approx. 1.25 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: '99% fat free turkey cutlets, 10 count',
    price: '$5.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'turkey thighs (2)',
    price: '$2.99/lb  1 package approx. 1.75 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'veal top round cutlets',
    price: '$20.99/lb  1 package approx. 0.4 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'ground veal',
    price: '$7.49  16 oz.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'veal center cut shanks',
    price: '$11.99/lb  1 each approx. 1.4 lb.'
  },
  {
    category: 'meat',
    brand: 'wegmans food you feel good about',
    food: 'veal liver',
    price: '$11.99/lb  1 package approx. 0.6 lb.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'extra firm tofu',
    price: '$1.99  14 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'firm tofu',
    price: '$1.99  14 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'cranberry peach kombucha',
    price: '$2.49  12 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'ginger honey lemon kombucha',
    price: '$2.49  12 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'almond meal flour',
    price: '$6.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'gluten free honey cornbread mix',
    price: '$3.79  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans gluten free',
    food: 'double chocolate brownie mix',
    price: '$3.79  17.2 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'gluten free all purpose baking mix',
    price: '$3.79  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'pure coconut water, family pack',
    price: '$16.99  202.8 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'pure coconut water, family pack',
    price: '$19.99  202.8 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'just tea, peppermint herbal caffeine free tea bags',
    price: '$3.99  40 ct.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'pure coconut water',
    price: '$3.49  33.8 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'raw pumpkin seeds',
    price: '$7.99  1 lb.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'organic oats rolled',
    price: '$2.49  1 lb.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'organic pumpkin seeds with tamari seasoning',
    price: '$9.49  1 lb.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'organic brown flaxseeds',
    price: '$3.99  1 lb.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'diced tomatoes in juice',
    price: '$1.49  14.5 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'tomato paste',
    price: '$0.89  6 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'diced tomatoes in juice',
    price: '$1.99  28 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'crushed tomatoes in puree',
    price: '$1.99  28 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate cherry cashew wholesum bars, 12 pack',
    price: '$11.99  16.8 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'peanut butter dark chocolate wholesum bars, 12 pack',
    price: '$11.99  16.8 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'wholesum bars, family pack, 24 bars',
    price: '$19.99  33.6 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans food you feel good about',
    food: 'dark chocolate nuts & sea salt wholesum bars, 12 pack',
    price: '$11.99  16.8 oz.'
  },
  {
    category: 'organic',
    brand: "mary's gone crackers",
    food: 'crackers, organic, everything',
    price: '$4.99  5.5 oz.'
  },
  {
    category: 'organic',
    brand: "mary's gone crackers",
    food: 'crackers, organic, super seed, classic',
    price: '$4.99  5.5 oz.'
  },
  {
    category: 'organic',
    brand: 'lukes',
    food: 'crackers, multigrain & seed, chia seed',
    price: '$3.99  3.5 oz.'
  },
  {
    category: 'organic',
    brand: 'lance',
    food: 'crackers, gluten free, baked, original',
    price: '$3.99  5 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'microwaveable just picked and quickly frozen broccoli florets',
    price: '$1.99  12 oz.'
  },
  {
    category: 'organic',
    brand:
      'wegmans organic food you feel good about just picked and quickly frozen',
    food: 'microwaveable super sweet corn',
    price: '$1.99  12 oz.'
  },
  {
    category: 'organic',
    brand:
      'wegmans organic food you feel good about just picked and quickly frozen',
    food: 'microwaveable sweet peas',
    price: '$1.99  12 oz.'
  },
  {
    category: 'organic',
    brand:
      'wegmans organic food you feel good about just picked and quickly frozen',
    food: 'microwaveable spinach',
    price: '$2.69  12 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'tomato paste',
    price: '$0.89  6 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics organic',
    food: 'roasted garlic sauce, organic',
    price: '$2.79  23.5 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics organic',
    food: 'marinara sauce, chunky',
    price: '$2.79  23.5 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'smooth almond butter, unsalted',
    price: '$9.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic farm & orchard',
    food: 'wheat grass powder',
    price: '$19.99  8.5 oz.'
  },
  {
    category: 'organic',
    brand: 'navitas organics',
    food: 'cacao powder, organic',
    price: '$8.49  8 oz.'
  },
  {
    category: 'organic',
    brand: 'navitas organics',
    food: 'cacao, organic, nibs',
    price: '$8.99  8 oz.'
  },
  {
    category: 'organic',
    brand: 'navitas organics',
    food: 'hemp seeds, organic',
    price: '$10.99  8 oz.'
  },
  {
    category: 'organic',
    brand: 'biobag',
    food: 'food scrap bags, compostable, tall, 13 gallon',
    price: '$4.99  12 ct.'
  },
  {
    category: 'organic',
    brand: 'biobag',
    food: 'food scrap bags, compostable, small, 3 gallon',
    price: '25 ct.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics',
    food: 'organic penne rigate, no. 32',
    price: '$1.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics organic',
    food: 'spaghetti, no. 4',
    price: '$1.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics organic',
    food: 'angel hair, no. 1',
    price: '$1.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans italian classics organic',
    food: 'whole wheat spaghetti, no. 4',
    price: '$1.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'natural peanut butter creamy',
    price: '$4.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'p.b. creamy peanut butter spread',
    price: '$3.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'smooth almond butter, unsalted',
    price: '$9.99  16 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic food you feel good about',
    food: 'natural peanut butter crunchy',
    price: '$4.99  16 oz.'
  },
  {
    category: 'organic',
    brand: "gillian's",
    food: 'croutons, garlic, gourmet cut',
    price: '$3.99  5 oz.'
  },
  {
    category: 'organic',
    brand: 'pacific organic',
    food: 'broth, low sodium, free range chicken',
    price: '$3.99  32 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'pacific organic',
    food: 'broth, low sodium, vegetable',
    price: '$3.99  32 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'pacific organic',
    food: 'broth, low sodium, free range chicken',
    price: '$3.99  32 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'imagine',
    food: 'broth, low sodium, organic, vegetarian, no-chicken',
    price: '$3.99  32 fl. oz.'
  },
  {
    category: 'organic',
    brand: 'simply organic',
    food: 'cinnamon',
    price: '$5.49  2.45 oz.'
  },
  {
    category: 'organic',
    brand: 'simply organic',
    food: 'garlic powder',
    price: '$5.99  3.64 oz.'
  },
  {
    category: 'organic',
    brand: 'simply organic',
    food: 'turmeric',
    price: '$4.49  2.38 oz.'
  },
  {
    category: 'organic',
    brand: 'simply organic',
    food: 'chili powder',
    price: '$4.99  2.89 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'black beans',
    price: '$0.99  15 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'cannellini beans',
    price: '$0.99  15 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'garbanzo beans',
    price: '$0.99  15 oz.'
  },
  {
    category: 'organic',
    brand: 'wegmans organic',
    food: 'dark red kidney beans',
    price: '$0.99  15 oz.'
  },
  {
    category: 'produce',
    brand: undefined,
    food: 'mini apples',
    price: '$0.25  1 ea.'
  },
  {
    category: 'produce',
    brand: undefined,
    food: 'organic honeycrisp apples',
    price: '$3.99/lb  1 each approx. 0.4 lb.'
  },
  {
    category: 'produce',
    brand: undefined,
    food: 'organic gala apples',
    price: '$2.99/lb  1 each approx. 0.4 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'fuji apples',
    price: '$2.99/lb  1 each approx. 0.45 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'artichokes',
    price: '1.50  1 ea.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'organic artichokes',
    price: '1.0  1 ea.'
  },
  {
    category: 'produce',
    brand: 'ocean mist farms',
    food: 'artichokes, baby',
    price: '$4.99  32 oz.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'baby artichokes, fresh picked',
    price: '$4.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'petite shanghai',
    price: '$1.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'petite baby bok choy bag',
    price: '$1.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'yu choy',
    price: '$1.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'ocean mist',
    food: 'gai lan',
    price: '$1.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'asparagus',
    price: '$4.99/lb  1 bunch approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'asparagus',
    price: '$2.99/lb  1 bunch approx. 1.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'white asparagus',
    price: '$3.99/lb  1 bunch approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'apples, honeycrisp',
    price: '$7.99  48 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'apples, gala, family pack',
    price: '$5.99  128 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'apples, gala, family pack',
    price: '$5.99  3 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'apple wedges',
    price: '$3.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bananas',
    price: '$0.59/lb  1 bunch approx. 2 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bananas',
    price: '$0.49/lb  1 bunch approx. 2.4 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'baby bananas',
    price: '$0.79/lb  1 bunch approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'red bananas',
    price: '$0.69/lb  1 bunch approx. 0.87 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'fresh green beans',
    price: '$1.99/lb  1 bag approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'sugar snap peas',
    price: '$4.99/lb  1 bag approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'fancy okra',
    price: '$3.29  12 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'yellow beans (wax beans)',
    price: '$2.99/lb  1 bag approx. 0.75 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'strawberries, family pack',
    price: '$5.99  32 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'strawberries',
    price: '$4.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'blueberries, family pack',
    price: '$8.99  18 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'raspberries, family pack',
    price: '$4.99  12 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'organic cauliflower',
    price: '$4.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'broccoli crowns',
    price: '$1.99/lb  1 crown approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'cauliflower',
    price: '$1.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'purple cauliflower',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'green cabbage',
    price: '$1.29/lb  1 head approx. 1.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'red cabbage',
    price: '$1.29/lb  1 head approx. 2 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'parsnips',
    price: '$2.69/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'brussels sprouts',
    price: '$2.99/lb  1 bag approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'carrots',
    price: '$1.29  16 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'carrots',
    price: '$2.29  32 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'baby-cut carrots',
    price: '$1.29  16 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'petite carrots',
    price: '$1.99  12 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'lemons',
    price: '$3.99  32 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'clementine oranges, spanish, family pack',
    price: '$7.99  5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'imported oranges',
    price: '$5.49  3 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'lemons',
    price: '$6.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'mini seedless cucumbers, family pack',
    price: '$2.99  6 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'seedless cucumbers, family pack',
    price: '$3.99  3 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'mini cucumbers',
    price: '$3.99  12 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'seedless cucumbers',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'purple eggplant',
    price: '$1.99/lb  1 each approx. 0.75 lb.'
  },
  {
    category: 'produce',
    brand: 'pero family farms freshwrap',
    food: 'eggplant, organic',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'dates',
    price: '$6.99/lb  1 bag approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bulk dates - medjool',
    price: '$5.99/lb  1 bag approx. 0.75 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'fresh chestnuts',
    price: '$6.49/lb  1 bag approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bulk nuts - mixed nuts',
    price: '$4.99/lb  1 bag approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut fruit',
    food: 'watermelon hearts, family pack',
    price: '$7.99  42 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut fruit',
    food: 'fruit bowl',
    price: '$12.00  32 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut fruit',
    food: 'traditional fruit bowl, family pack',
    price: '$16.99  64 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut fruit',
    food: 'berry bowl',
    price: '$8.99/lb  1 package approx. 2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut veggies',
    food: 'organic zucchini noodles',
    price: '$8.49/lb  1 package approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut veggies',
    food: 'zucchini noodles',
    price: '$7.49/lb  1 each approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut veggies',
    food: 'husked bi-color corn, 5 ct',
    price: '$5.00  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans fresh cut veggies',
    food: 'fresh cut asparagus',
    price: '$7.49/lb  1 package approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic seedless red grapes',
    price: '$5.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic seedless green grapes',
    price: '$5.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic seedless black grapes',
    price: '$5.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'red seedless grapes',
    price: '$1.99/lb  1 bag approx. 2.25 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh living basil',
    price: '$3.49  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'thyme',
    price: '$1.29  0.25 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh cilantro (corriander)',
    price: '$1.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'rosemary',
    price: '$1.29  0.25 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'lemon ginger cayenne juice',
    price: '$6.00  14.5 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'greens with pear juice',
    price: '$6.00  14.5 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic apple cider',
    price: '$5.99  64 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'cold pressured lemonade',
    price: '$5.00  14.5 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'cleaned and cut tuscan kale',
    price: '$3.99  10 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'cleaned and cut kale greens',
    price: '$3.99  12 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'organic kale',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'organic italian parsley',
    price: '$1.69  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'organic cantaloupe',
    price: '$3.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'mini seedless watermelon',
    price: '$4.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'cantaloupes',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'honeydew',
    price: '$3.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'sliced baby bella mushrooms, family pack',
    price: '$3.99  20 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'whole baby bella mushrooms, family pack',
    price: '$3.99  24 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'sliced white mushrooms, family pack',
    price: '$3.99  20 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'mushrooms, whole white',
    price: '$3.99  24 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'yellow onions',
    price: '$4.99  48 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'red onions',
    price: '$4.99  48 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'cleaned and cut peeled garlic, family pack',
    price: '$4.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'shallots',
    price: '$2.99  3 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'brussels sprouts, family pack',
    price: '$3.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'cleaned and cut trimmed green beans, family pack',
    price: '$5.99  32 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'cleaned and cut broccoli florets, family pack',
    price: '$4.99  3 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'cleaned and cut butternut squash, family pack',
    price: '$5.49  48 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'white peaches',
    price: '$4.49/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'nectarine, regular, large',
    price: '$1.99  1 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'locally grown peaches',
    price: '$2.49  1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: "d'anjou pears, family pack",
    price: '$2.99  3 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic bartlett pears',
    price: '$2.69/lb  1 each approx. 0.45 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic anjou pears',
    price: '$2.69/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'organic red pears',
    price: '$2.69/lb  1 each approx. 0.5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'mixed peppers, family pack',
    price: '$5.49  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'mini sweet peppers, family pack',
    price: '$5.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'mini sweet peppers',
    price: '$3.49  8 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: '6 pack red peppers, family pack',
    price: '$5.99  2 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'white potatoes, family pack',
    price: '$1.99  5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'premium russet baking potatoes',
    price: '$2.99  5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'butter potatoes',
    price: '$4.99  5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'red potatoes',
    price: '$4.99  5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'green onions',
    price: '$1.49  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'radish bunch',
    price: '$2.69  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'green onions (scallions)',
    price: '$0.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bunch radishes',
    price: '$1.69  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'buttermilk ranch dressing',
    price: '$3.29  12 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'chunky blue cheese dressing',
    price: '$3.29  12 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic',
    food: 'coleslaw dressing',
    price: '$3.29  12 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'ranch yogurt dressing',
    price: '$3.29  12 fl. oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh romaine hearts',
    price: '$2.49  22 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'triple washed baby spinach, family pack',
    price: '$3.99  11 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'triple washed baby spinach',
    price: '$2.49  5 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans organic food you feel good about',
    food: 'triple washed spring mix, family pack',
    price: '$3.99  16 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'apple, pretzel, & cheese with peanut butter',
    price: '$4.00 for 2, 4.1 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'baby-cut carrots',
    price: '$1.99  12 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'carrots & grapes with pretzels & cheese',
    price: '$4.00 for 2, 5 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'food you feel good about apples, grapes & cheese bites',
    price: '$4.00 for 2, 5.5 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'celery root',
    price: '$3.49/lb  1 each approx. 1.25 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'watercress',
    price: '$1.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'sunchokes',
    price: '$4.99/lb  1 package approx. 1 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans',
    food: 'rhubarb',
    price: '$4.99/lb  1 each approx. 0.18 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh bean sprouts',
    price: '$2.99  8 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh gourmet mix sprouts, pre-washed',
    price: '$2.99  4 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh clover sprouts, pre-washed',
    price: '$2.99  4 oz.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'fresh zesty sprouts, pre-washed',
    price: '$2.99  4 oz.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'yellow squash',
    price: '$1.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'acorn squash',
    price: '$1.49/lb  1 each approx. 2 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'butternut squash',
    price: '$1.49/lb  1 each approx. 2.5 lb.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'green squash (zucchini)',
    price: '$1.99/lb  1 each approx. 0.55 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'grape tomatoes, family pack',
    price: '$3.99  1 qt.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'regional grape tomatoes',
    price: '$2.99  1 pt.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'tomatoes roma, family pack',
    price: '$2.99  1.5 lb.'
  },
  {
    category: 'produce',
    brand: 'wegmans food you feel good about',
    food: 'flavorful medley snacking tomatoes, family pack',
    price: '$5.49  1.5 lb.'
  },
  {
    category: 'produce',
    brand: 'del monte',
    food: 'pineapple, extra sweet',
    price: '$2.99  1 ea.'
  },
  {
    category: 'produce',
    brand: 'organic',
    food: 'bagged avocados',
    price: '$5.00  3 ea.'
  },
  {category: 'produce', brand: 'organic', food: 'kiwi', price: '$3.99  15 oz.'},
  {
    category: 'produce',
    brand: 'organic',
    food: 'kiwi, family pack',
    price: '$5.99  3 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'coconut shrimp with sweet chili sauce',
    price: '$6.50  7 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'lobster stuffed mushrooms',
    price: '$16.99/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'crabmeat stuffed mushrooms',
    price: '$16.99/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'stuffed clams, 1/2 dozen',
    price: '$7.00  10 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'grilled scallops',
    price: '$29.99/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'cold water lobster tails, family pack',
    price: '$35.00  1 ea.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'live lobster',
    price: '$13.99/lb  1 each approx. 3.75 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'snow crab clusters, cooked',
    price: '$12.99/lb  1 each approx. 2.25 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'wild lobster tail, cold water (5-6 oz size)',
    price: '$10.00  1 ea.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'prepared horseradish',
    price: '$2.29  8.5 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'tartar sauce',
    price: '$2.29  8 fl. oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'zesty cocktail sauce',
    price: '$2.29  9 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'lemon butter sauce',
    price: '$2.49  4 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh tilapia fillet, family pack',
    price: '$4.99/lb  1 package approx. 2 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'atlantic cod fillets, family pack',
    price: '$7.99/lb  1 package approx. 2.1 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh haddock fillets, family pack',
    price: '$8.99/lb  1 package approx. 2 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh catfish fillets, family pack',
    price: '$7.49/lb  1 package approx. 2.25 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'farm raised atlantic salmon, family pack',
    price: '$17.49  32 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'wild caught sockeye salmon fillets, family pack',
    price: '$24.98  32 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'farm raised tilapia fillets, family pack',
    price: '$9.98  32 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans organic',
    food: 'raw peeled & deveined large shrimp, 31/40 count',
    price: '$14.99  16 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'scallops with garlic pesto sauce',
    price: '$10.00  12 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'signature crab cakes',
    price: '$28.00  16 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'seasoned bronzini',
    price: '$14.99/lb  1 each approx. 1 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans ready to cook',
    food: 'shrimp scampi',
    price: '$7.00  6 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh farm raised atlantic salmon, family pack',
    price: '$8.49/lb  1 package approx. 2.75 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'eu organic salmon',
    price: '$18.99/lb  1 fillet approx. 1 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'eu organic atlantic salmon fillet',
    price: '$18.99/lb  1 package approx. 0.8 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh yukon keta salmon fillets',
    price: '$13.99/lb  1 package approx. 2 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'live farm-raised littleneck clams - 50 ct.',
    price: '1 ea.'
  },
  {
    category: 'seafood',
    brand: 'wegmans canadian organic food you feel good about',
    food: 'mussels, 2 lb. bag',
    price: '$7.00  32 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'live farm-raised littleneck clams',
    price: '$79.99  1 ea.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh sea scallops 15-20 per pound',
    price: '$17.99/lb  1 package approx. 0.75 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'fresh wild caught north carolina shrimp',
    price: '$16.99  1 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'wild easy peel shrimp (previously frozen)',
    price: '$19.99/lb  1 package approx. 0.75 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'colossal garlic shrimp',
    price: '$36.99/lb  1 package approx. 0.5 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'uncooked peeled & deveined shrimp',
    price: '$13.99/lb  1 each approx. 1 lb.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'new york style smoked nova salmon, family pack',
    price: '$19.99  12 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'smoked scottish style salmon, family pack',
    price: '$19.99  12 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans food you feel good about',
    food: 'smoked sockeye salmon, family pack',
    price: '$24.99  12 oz.'
  },
  {
    category: 'seafood',
    brand: 'wegmans',
    food: 'new york style smoked nova salmon',
    price: '$8.99  4 oz.'
  }
]
