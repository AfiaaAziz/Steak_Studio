
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  slug: string;
  link: string;
};

export const mainMenuItems: MenuItem[] = [
  {
    name: "Chicken Supreme Pizza",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu1.png",
    slug: "chicken-supreme-pizza",
    link: "/menu/chicken-supreme-pizza",
  },
  {
    name: "Hamburger Burger with Beef",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu2.png",
    slug: "hamburger-beef",
    link: "/menu/hamburger-beef",
  },
  {
    name: "Belgium waffles with strawberries",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu3.png",
    slug: "belgium-waffles-with-strawberries",
    link: "/menu/belgium-waffles-with-strawberries",
  },
  {
    name: "Chicken skewers",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu4.png",
    slug: "chicken-skewers",
    link: "/menu/chicken-skewers",
  },
  {
    name: "Delicious food on a white plate",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu5.png",
    slug: "delicious-food-on-a-white-plate",
    link: "/menu/delicious-food-on-a-white-plate",
  },
];

export const centerColumnItems: MenuItem[] = [
  {
    name: "Mutton or lamb biriyani",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu6.png",
    slug: "mutton-or-lamb-biriyani",
    link: "/menu/mutton-or-lamb-biriyani",
  },
  {
    name: "Spicy fried salmon fish salad",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu7.png",
    slug: "spicy-fried-salmon-fish-salad",
    link: "/menu/spicy-fried-salmon-fish-salad",
  },
];

export const bottomMenuItems: MenuItem[] = [
  {
    name: "Fresh cola drink with green lime",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu8.png",
    slug: "fresh-cola-drink-with-green-lime",
    link: "/menu/fresh-cola-drink-with-green-lime",
  },
  {
    name: "Ice cream cone",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu9.png",
    slug: "ice-cream-cone",
    link: "/menu/ice-cream-cone",
  },
  {
    name: "Chocolate ice cream",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu10.png",
    slug: "chocolate-ice-cream",
    link: "/menu/chocolate-ice-cream",
  },
  {
    name: "Chocolate topping for ice cream cups",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu11.png",
    slug: "chocolate-topping-for-ice-cream-cups",
    link: "/menu/chocolate-topping-for-ice-cream-cups",
  },
  {
    name: "Healthy breakfast",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu12.png",
    slug: "healthy-breakfast",
    link: "/menu/healthy-breakfast",
  },
  {
    name: "Breakfast with coffee and fresh croissants",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu13.png",
    slug: "breakfast-with-coffee-and-fresh-croissants",
    link: "/menu/breakfast-with-coffee-and-fresh-croissants",
  },
  {
    name: "Boiled eggs, sausages, zucchini",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu14.png",
    slug: "boiled-eggs-sausages-zucchini",
    link: "/menu/boiled-eggs-sausages-zucchini",
  },
  {
    name: "Salad, fried eggs and pastry",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chili",
    price: "From $150",
    imageUrl: "/images/menu15.png",
    slug: "salad-fried-eggs-and-pastry",
    link: "/menu/salad-fried-eggs-and-pastry",
  },
];

export const menuData: MenuItem[] = [
  ...mainMenuItems,
  ...centerColumnItems,
  ...bottomMenuItems,
];
