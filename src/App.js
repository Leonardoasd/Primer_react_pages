import SistemaDeAleatoriedad from "./Screens/SistemaDeAleatoriedad";
import Contactame from "./Screens/Contactame"
import NavBar from './Components/NavBar';
import styles from "./App.css";
import QueEsEsto from "./Screens/QueEsEsto";
import ComoTrabajamos from "./Screens/ComoTrabajamos";

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <SistemaDeAleatoriedad />
      <QueEsEsto />
      <ComoTrabajamos />
      <Contactame />
    </div>
  );
}

export default App;
