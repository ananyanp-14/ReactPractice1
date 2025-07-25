import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';
const rD=['core','fundamental','crucial']

function genRandom(max)
{
  return Math.floor(Math.random()*(max+1));
}

export default function Header()
{
  return(
     <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentils</h1>
        <p>
          {rD[genRandom(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}