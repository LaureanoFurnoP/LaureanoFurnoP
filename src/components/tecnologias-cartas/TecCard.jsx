import { useState } from 'react'
import './TecCard.css'

const TecCard = ({nameTecs, img}) => {
    const [nameTec] = useState(nameTecs)
    return (
        <>
            <div className='background-Gray'>
                <img className='imgTecnologia' src={img} alt="imgTec" />
                <h2 className='nameTecnologia'>{nameTec}</h2>
            </div>
           
        </>
    )
}

export default TecCard
