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
    title: "Wireless Bluetooth Headphones",
    shortDescription:
      "Experience high-quality sound without the wires. These over-ear headphones offer superior comfort and noise-canceling capabilities.",
    image: imgOne,
  },
  {
    title: "4K Ultra HD Smart TV",
    shortDescription:
      "Bring the cinema experience home with this 55-inch 4K Ultra HD Smart TV. Stream your favorite shows with built-in apps.",
    image: imgTwo,
  },
  {
    title: "Stainless Steel Watch",
    shortDescription:
      "A timeless piece of craftsmanship. This stainless steel watch combines elegance with durability, perfect for any occasion.",
    image: imgThree,
  },
  {
    title: "Portable Air Purifier",
    shortDescription:
      "Keep your air clean wherever you go with this compact and efficient portable air purifier. Ideal for homes and offices.",
    image: imgFour,
  },
  {
    title: "Gaming Laptop",
    shortDescription:
      "Powerful performance meets portability. This gaming laptop features a high-speed processor and stunning graphics for the ultimate gaming experience.",
    image: imgFive,
  },
  {
    title: "Smartphone with Triple Camera",
    shortDescription:
      "Capture every moment in stunning detail with this smartphone's advanced triple camera system. Fast, responsive, and stylish.",
    image: imgSix,
  },
  {
    title: "Electric Toothbrush",
    shortDescription:
      "Achieve a superior clean with this electric toothbrush. Multiple modes and smart timers ensure you get the best oral care.",
    image: imgSeven,
  },
  {
    title: "Espresso Coffee Maker",
    shortDescription:
      "Brew barista-quality espresso at home with this easy-to-use espresso coffee maker. Enjoy rich and flavorful coffee every time.",
    image: imgEight,
  },
  {
    title: "Fitness Tracker",
    shortDescription:
      "Monitor your health and fitness with this sleek and lightweight fitness tracker. Track steps, heart rate, sleep, and more.",
    image: imgNine,
  },
  {
    title: "Robot Vacuum Cleaner",
    shortDescription:
      "Let this robot vacuum cleaner do the work for you. With powerful suction and smart navigation, it keeps your floors spotless.",
    image: imgTen,
  },
];

export const getCommonData = () => {
  return commonData;
};
