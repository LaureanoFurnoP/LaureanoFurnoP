import './Card.css'
import CardTecEstudios from '../cardTec-Estudios/cardTec-Estudios'


const Card = ({ nameTitulo, desc, tecnologias, verCert, fecha, btnLink }) => {

    return (
        <>
            <div data-aos="fade-left" className='background-CardEstudio'>
                <h3 className='nameTitulo'>{nameTitulo}</h3>
                <p className='fechaInicio-terminado'>{fecha}</p>
                <p className='descripcionEstudio'>{desc}</p>
                <div className='Tecnologias-Estudio'>
                    {tecnologias.map((tec, index) => (
                        <CardTecEstudios key={index} title={tec} />
                    ))}
                </div>
                {verCert && <button onClick={() => location.href = `${btnLink}`} className='btnCer_Est'>VER CERTIFICACIÓN</button>
                }
            </div>

        </>
    )
}

export default Card
