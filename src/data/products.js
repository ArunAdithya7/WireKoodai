const basePath = import.meta.env.BASE_URL;

export const products = [
  {
    id: 'classic-kattam',
    name: 'Classic Kattam Checkered Wire Koodai',
    tag: 'Bestseller',
    description: 'Traditional multi-color plaid weaving. Water-resistant, sturdy and perfect for everyday grocery runs or beach outings.',
    image: `${basePath}Bag 1.png`,
  },
  {
    id: 'contemporary-tote',
    name: 'Contemporary Dual-Tone Jute Bag',
    tag: 'Minimalist',
    description: 'Clean modern dual-block design. Durable non-woven border finish with comfortable wide handles.',
    image: `${basePath}Bag 2.png`,
  },
  {
    id: 'geometrical-craft',
    name: 'Geometrical Pattern Craft Cloth Bag',
    tag: 'Unique Weave',
    description: 'Fine patterned weave design featuring a central medallion emblem for a distinct visual look.',
    image: `${basePath}Bag 1.png`,
  },
  {
    id: 'earthy-textured',
    name: 'Earthy Textured Jute Bag',
    tag: 'Natural Look',
    description: 'Earthy brown and beige textured weave with reinforced border framing for heavy-duty storage.',
    image: `${basePath}Bag 3.png`,
  },
  {
    id: 'custom-design',
    name: 'Design Your Own Koodai',
    tag: 'Customizable',
    description: 'Pick your own weave patterns and preferred colors. Handcrafted specifically for your unique style.',
    image: `${basePath}Cust.png`,
    isCustom: true,
  }
];
