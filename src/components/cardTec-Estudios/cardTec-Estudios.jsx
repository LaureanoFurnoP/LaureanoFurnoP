import { useState, useEffect } from 'react'
import './cardTec-Estudios.css'

import imagenReact from '../../assets/images/reactIcon.svg'
import imagenBootstrap from '../../assets/images/Bootstrap_logo.svg'
import imagenJS from '../../assets/images/jsIcon.svg'
import imagenExpress from '../../assets/images/expressIcon.svg'
import imagenMysql from '../../assets/images/MySQL-logo.svg'
import imagenNode from '../../assets/images/nodeIcon.svg'
import imagenFigma from '../../assets/images/figma_logo.svg'
import imagenHTML from '../../assets/images/HTML5_logo_and_wordmark.svg'
import imagenPostgreSQL from '../../assets/images/Postgresql_elephant.svg'
import imagenCSS from '../../assets/images/CSS.svg'

const CardTecEstudios = ({ title }) => {
    const [imagen, setImg] = useState()

    useEffect(() => {
        const tituloTec = title.toLowerCase()
        switch (tituloTec) {
            case "html":
                setImg(imagenHTML)
                break
            case "css":
                setImg(imagenCSS)
                break
            case "javascript":
            case "js":
                setImg(imagenJS)
                break
            case "react":
                setImg(imagenReact)
                break
            case "bootstrap":
                setImg(imagenBootstrap)
                break
            case "express":
                setImg(imagenExpress)
                break
            case "mysql":
                setImg(imagenMysql)
                break
            case "node":
            case "nodejs":
                setImg(imagenNode)
                break
            case "figma":
                setImg(imagenFigma)
                break
            case "postgresql":
                setImg(imagenPostgreSQL)
                break
            default:
                setImg(null)
        }
    }, [title])
    return (
        <>
            <div className='titleVerde-CardEstudio'>
                <p>{title}</p>
                <div className='circle-cardEstTec'><img src={imagen} alt="tecImagen" /></div>
            </div>

        </>
    )
}

export default CardTecEstudios
