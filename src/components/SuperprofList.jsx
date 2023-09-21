import React from 'react'
import { Link } from 'react-router-dom'

const SuperprofList = () => {
    const superprof = [
        {
            nombre: 'pepe',
            precioHora: 3000,
            image: '/messi.jpg',
            id: 0,
            comentarios: [
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 0
                },
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 1
                },
            ]
        },
        {
            nombre: 'maria',
            precioHora: 4000,
            image: '/messi.jpg',
            id: 1,
            comentarios: [
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 0
                },
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 1
                },
            ]
        },
        {
            nombre: 'juan',
            precioHora: 8000,
            image: '/messi.jpg',
            id: 2,
            comentarios: [
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 0
                },
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 1
                },
            ]
        },
        {
            nombre: 'juan',
            precioHora: 2100,
            image: '/messi.jpg',
            id: 4,
            comentarios: [
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 0
                },
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 1
                },
            ]
        },
        {
            nombre: 'juan',
            precioHora: 5400,
            image: '/messi.jpg',
            id: 5,
            comentarios: [
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 0
                },
                {
                    user: 'pepe23',
                    mensaje: 'me gustaria que des clases los dom a la noche',
                    id: 1
                },
            ]
        },
    ]
  return (
    <div>
        <h1>Lista de profes: </h1>
        <div className='profesListContainer'>
            {superprof.map(profesor =>(
                <div className='cartaProfe' key={profesor.id}>
                    <h2>{profesor.nombre}</h2>
                    <img src={profesor.image} width={200} />
                    <span>Precio: ${profesor.precioHora}</span>
                    <Link to={'/detail/' + profesor.id}>Ver mas</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SuperprofList