import Image from "next/image";
import styles from "./page.module.css";
import Title from '../app/components/Title';
import Subtitle from '../app/components/Tipoke';
import ImgNum from "./components/ImgNum";
import ImageWithNumber from '../app/components/ImgNum';

const HomePage = () => {
  return (
    <div>
      <Title>My Pokemon</Title>
      {}

      <Subtitle text="Clefairy" />

      <ImgNum
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
        number={35}
      />
    </div>
  );
}
export default HomePage;