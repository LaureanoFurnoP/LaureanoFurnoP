import './CardProyecto.css'
import CardTecEstudios from '../cardTec-Estudios/cardTec-Estudios'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardProyectos = ({title, imgTrabajo, id, desc, tecnologias, verPag, verFigma, fecha, btnLink , btnFigma, invertido}) => {
    useEffect(() =>{
        if(invertido){
            let cartaInvertida = document.getElementById(id);
            cartaInvertida.querySelector('.imgProyectoContainer').classList.add('imgContainerDerecha');

            cartaInvertida.querySelector('.containerC').classList.add('containerC-Derecha');
            cartaInvertida.querySelector('.imgProyectoContainer').setAttribute('data-aos', 'fade-left');
            cartaInvertida.querySelector('.containerC').setAttribute('data-aos', 'fade-right');
        }else{
            let cartaInvertida = document.getElementById(id);
            cartaInvertida.querySelector('.imgProyectoContainer').setAttribute('data-aos', 'fade-right');
            cartaInvertida.querySelector('.containerC').setAttribute('data-aos', 'fade-left');
        }
        AOS.init();
    },  [id, invertido])
    return (
        <>   
           <div id={id} className='containerProyectos'>
                <div className='imgProyectoContainer'>
                    <img src={imgTrabajo} alt="imgTrabajo" />
                </div>
                <div className='containerC'>
                    <h3 className='tituloH2'>{title}</h3>
                    <div className='background-CardProyecto'>
                        <p className='fechaInicio-terminado'>{fecha}</p>
                        <p className='descripcion'>{desc}</p>
                        <div className='Tecnologias-Estudio'>
                            {tecnologias.map((tec, index) => (
                                <CardTecEstudios key={index} title={tec} />
                            ))}
                        </div>
                        <div className='btns-Proyecto'>
                            {verPag && <button onClick={() => window.open(btnLink, '_blank')} className='btnPag_Est'>VER PAGINA</button>}
                            {verFigma && <button onClick={() => window.open(btnFigma, '_blank')} className='btnCer_Est'>VER FIGMA</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProyectos
