import React from 'react'
import styles from "./QueEsEsto.module.css"

const QueEsEsto = () => {
  return (
    <div id="¿Qué_es_esto?" className={styles.servicesContainer}>
      <h1>¿Qué es esta página?</h1>
      <p>
        Esta es una página que se enfoca en la aleatoriedad, arriba del todo 
        podemos ver un sistema de aleatoriedad hecho con JavaScript en donde 
        puedes poner cualquier lista de palabras, tareas o frases que quieras,
        y luego al pulsar el botón "Palabra Aleatoria" recibirás al azar una de
        las palabras que pusiste en tu lista de palabras, esto puede ser 
        especialmente útil al momento de estudiar vocabularios para algún examen
        o también para ver a quien de tus amigos le toca hacer alguna cosa, realmente
        hay varias posibles utilidades para este sistema... solo hay que usar la 
        imaginación.
      </p>
      <p>
        En un futuro actualizaré la página y estaré poniendo más funcionalidades
        todas basadas siempre en la aleatoriedad, como por ejemplo un sistema 
        que te devuelva poemas al azar, frases al azar, adivinanzas al azar...
        hay una infinidad de cosas que tengo en mente y que solo es cuestión de 
        hecharle ganas y unas cuantas horas para hacerlas posibles.
      </p>
    </div>
  )
}

export default QueEsEsto