import { useEffect, useState } from 'react'
import './header.css'
import imageLogo from '../../assets/images/icono-Lau.svg'

const Header = () => {
    const [estadoMenu, setEstadoMenu] = useState(false)

    function AbrirMenuResponsive() {
        let estadoActual = !estadoMenu
        if (estadoActual) {
            document.querySelector('.menu-Responsive').classList.add('activeMenu')
        } else {
            document.querySelector('.menu-Responsive').classList.remove('activeMenu')
        }
        setEstadoMenu(!estadoMenu)
    }
    
    useEffect(() =>{
        document.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', function(){
                document.querySelector('.menu-Responsive').classList.remove('activeMenu')
            })
        });
    })
    return (
        <>
            <header className='menu'>
                <div className='menuContainer'>
                    <img className='iconLogo' src={imageLogo} alt="LogoLau" />
                    <ul className='linksHeader'>
                        <li><a href="#about">SOBRE MI</a></li>
                        <li><a href="#Estudios">ESTUDIOS</a></li>
                        <li><a href="#experienciaLaboral">EXPERIENCIA LABORAL</a></li>
                        <li><a href="#proyectos">PROYECTOS</a></li>
                        <li>
                            <div className="btn-1">
                                <a href="#contactar"><span id='contTit'>CONTACTAR</span></a>
                            </div>
                        </li>
                    </ul>
                    <svg id='menuBar' onClick={AbrirMenuResponsive} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </div>
                <div className='menu-Responsive'>
                    <ul className='linksHeader-Responsive'>
                        <li><a href="#about">SOBRE MI</a></li>
                        <li><a href="#Estudios">ESTUDIOS</a></li>
                        <li><a href="#experienciaLaboral">EXPERIENCIA LABORAL</a></li>
                        <li><a href="#proyectos">PROYECTOS</a></li>
                        <li><a href="#contactar">CONTACTAR</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
