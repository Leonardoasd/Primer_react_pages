import React from 'react'
import styles from "./Contactame.module.css"

const Contactame = () => {
  return (
    <div name="Contacto" className={styles.contacto}>
      <h1>Contactame</h1>
      <form action='https://getform.io/f/c7239dbc-4c30-4f22-b77f-9e740f6d5f16' method="POST" className={styles.form}>
        <label for="name">Nombre Completo</label>
        <input id="name" name="Nombre Completo" className={styles.input} />
        <label for="email">Correo Electrónico</label>
        <input id="email" name="Correo Electrónico" placeholder='Ingresa tu correo electrónico.' className={styles.input} />
        <label>Mensaje</label>
        <textarea id="Mensaje" className={styles.textarea} ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contactame