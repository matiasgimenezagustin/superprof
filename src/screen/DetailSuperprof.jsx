import React from 'react'
import { useParams } from 'react-router-dom'
import { superprof } from '../data/superprofList'

const DetailSuperprof = () => {
    const parametros = useParams()
    
    const profeBuscado = superprof.find(profe=> profe.id == parametros.id)
    console.log(profeBuscado)
  return (
    <div>
        <h1>Detalle de: {profeBuscado.nombre}</h1>
        <h2>Precio por hora: {profeBuscado.precioHora}</h2>
        <div>
            {profeBuscado.comentarios.map(comentario =>(
                <div key={comentario.id}>
                    <h3>{comentario.user}</h3>
                    <p>{comentario.mensaje}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DetailSuperprof