import React from 'react'
import styles from "./SistemaDeAleatoriedad.module.css"
import { useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

const SistemaDeAleatoriedad = () => {
const [palabra, setPalabra] = useState("")
const [palabra2, setPalabra2] = useState([])
const [palabraAleatoria, setPalabraAleatoria] = useState("Bienvenidoss")

const handleInputChange = (event) => {
  setPalabra(event.target.value); 
};

const handleSubmit = (event) => {
  event.preventDefault();
  palabra !== "" && setPalabra2([...palabra2, { id: Date.now(), word: palabra }]);
  setPalabra("");
};

const handleButtonClick2 = () => {
  let numDePalabras = palabra2.length
  const numeroAleatorio = Math.floor(Math.random() * numDePalabras) ;
  palabra2.length !== 0 ? setPalabraAleatoria(palabra2[numeroAleatorio].word) 
  : setPalabraAleatoria("No hay palabras en tu lista...")
}

const deletePalabra = (id) => {
  const filteredPalabras = palabra2.filter(wordObj => wordObj.id !== id);
  setPalabra2(filteredPalabras);
}
  return (
    <div name="Palabras_Aleatorias" className={styles.sistemaContainer}>
      <h1 className={styles.pantallaCentral}>{palabraAleatoria}</h1>
      <button className={styles.buttonAleatorio} onClick={handleButtonClick2}>Palabra Aleatoria</button>
      <div className={styles.panelAndList}>
        <div>
          <h3>Panel de control.</h3>
          <form onSubmit={handleSubmit} className={styles.inputAndButton}>
            <input onChange={handleInputChange} value={palabra} className={styles.inputPanel} placeholder='Escribe las palabras o frases aquí.'/>
            <button className={styles.buttonPanel}>Agregar</button>
          </form>
        </div>
        <div>
        <form>
          <h3>Lista de palabras.</h3>
          <form className={palabra2.length > 0 ? styles.formDePalabra : styles.formDePalabra2}>
          <ul>
            {palabra2.map((word, index) => (
          
          <li key={word.id} className={styles.lista}>
            {word.word}
            <button className={styles.basurero} onClick={() => deletePalabra(word.id)} ><i className="bi bi-trash"></i></button>
          </li>
          
        ))}
          </ul>
          </form>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SistemaDeAleatoriedad