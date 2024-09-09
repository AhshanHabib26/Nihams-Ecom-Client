import imgOne from "../assets/images/wireless-bluetooth-headphones.png";
import imgTwo from "../assets/images/4k-ultra-hd-smart-tv.png";
import imgThree from "../assets/images/stainless-steel-watch.png";
import imgFour from "../assets/images/portable-air-purifier.png";
import imgFive from "../assets/images/gaming-laptop.png";
import imgSix from "../assets/images/smartphone-triple-camera.png";
import imgSeven from "../assets/images/electric-toothbrush.png";
import imgEight from "../assets/images/espresso-coffee-maker.png";
import imgNine from "../assets/images/fitness-tracker.png";
import imgTen from "../assets/images/robot-vacuum-cleaner.png";

const commonData = [
  {
    id: "1",
    title: "Espresso Coffee Maker",
    description:
      "Brew barista-quality espresso at home with this easy-to-use espresso coffee maker. Enjoy rich and flavorful coffee every time.",
    price: 89.99,
    image: imgEight,
    category: "Kitchen Appliances",
    quantity: 2,
  },
  {
    id: "2",
    title: "Stainless Steel Watch",
    description:
      "A timeless piece of craftsmanship. This stainless steel watch combines elegance with durability, perfect for any occasion.",
    price: 99.99,
    image: imgThree,
    category: "Watches",
    quantity: 3,
  },
  {
    id: "3",
    title: "Portable Air Purifier",
    description:
      "Keep your air clean wherever you go with this compact and efficient portable air purifier. Ideal for homes and offices.",
    price: 149.99,
    offerPrice: 129.99,
    image: imgFour,
    category: "Home Appliances",
    quantity: 4,
  },
  {
    id: "4",
    title: "Powerful Gaming Laptop",
    description:
      "Powerful performance meets portability. This gaming laptop features a high-speed processor and stunning graphics for the ultimate gaming experience.",
    price: 999.99,
    image: imgFive,
    category: "Electronics",
    quantity: 5,
  },
  {
    id: "5",
    title: "4K Ultra HD Smart TV",
    description:
      "Bring the cinema experience home with this 55-inch 4K Ultra HD Smart TV. Stream your favorite shows with built-in apps.",
    price: 190.99,
    offerPrice: 169.99,
    image: imgTwo,
    category: "Electronics",
    quantity: 2,
  },
  {
    id: "6",
    title: "Wireless Bluetooth Headphones",
    description:
      "Experience high-quality sound without the wires. These over-ear headphones offer superior comfort and noise-canceling capabilities.",
    price: 190.49,
    image: imgOne,
    category: "Audio",
    quantity: 2,
  },
  {
    id: "7",
    title: "Smartphone with Triple Camera",
    description:
      "Capture every moment in stunning detail with this smartphone's advanced triple camera system. Fast, responsive, and stylish.",
    price: 249.99,
    offerPrice: 219.99,
    image: imgSix,
    category: "Electronics",
    quantity: 2,
  },
  {
    id: "8",
    title: "Electric Toothbrush",
    description:
      "Achieve a superior clean with this electric toothbrush. Multiple modes and smart timers ensure you get the best oral care.",
    price: 190,
    image: imgSeven,
    category: "Personal Care",
    quantity: 2,
  },
  {
    id: "9",
    title: "Fitness Tracker",
    description:
      "Monitor your health and fitness with this sleek and lightweight fitness tracker. Track steps, heart rate, sleep, and more.",
    price: 749.99,
    offerPrice: 699.99,
    image: imgNine,
    category: "Fitness",
    quantity: 2,
  },
  {
    id: "10",
    title: "Robot Vacuum Cleaner",
    description:
      "Let this robot vacuum cleaner do the work for you. With powerful suction and smart navigation, it keeps your floors spotless.",
    price: 1199.99,
    image: imgTen,
    category: "Home Appliances",
    quantity: 2,
  },
];

export const getCommonData = () => {
  return commonData;
};
