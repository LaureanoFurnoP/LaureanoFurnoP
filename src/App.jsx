import { useEffect } from 'react'

import Header from './components/header/header'
import Titles from './components/titles/Titles.jsx'
import TecCard from './components/tecnologias-cartas/TecCard.jsx'
import Card from './components/Card/Card.jsx'
import CardProyectos from './components/Card-Proyecto/CardProyecto.jsx'
import imgHSE from './assets/images/diseño-web/serium.webp'
import imgVoxaive from './assets/images/diseño-web/voxaive.webp'

import imagenReact from './assets/images/reactIcon.svg'
import contactarIMG from './assets/images/contactarIMG.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

import imagenBootstrap from './assets/images/Bootstrap_logo.svg'
import imagenJS from './assets/images/jsIcon.svg'
import imagenExpress from './assets/images/expressIcon.svg'
import imagenMysql from './assets/images/MySQL-logo.svg'
import imagenNode from './assets/images/nodeIcon.svg'
import imagenFigma from './assets/images/figma_logo.svg'
import imagenHTML from './assets/images/HTML5_logo_and_wordmark.svg'
import imagenPostgreSQL from './assets/images/Postgresql_elephant.svg'
import imagenCSS from './assets/images/CSS.svg'
import yoimagen from './assets/images/yoimagen.webp'
import doc from './assets/CV-Laureano-Furno.docx'

import experienicaLaboralIcono from './assets/images/experienicaLaboralIcono.svg'

import './App.css'
import ImagenBanner from './assets/images/banner.webp'

import instagram from './assets/images/instagram.svg'
import linkedin from './assets/images/linkedin.svg'
import gmail from './assets/images/gmail.svg'
function App() {

  useEffect(() => {
    const contenedor = document.querySelector('.limitarMenorWidth');

    let isDown = false;
    let startX;
    let scrollLeft;

    contenedor.addEventListener('mousedown', (e) => {
      isDown = true;
      contenedor.classList.add('active');
      startX = e.pageX - contenedor.offsetLeft;
      scrollLeft = contenedor.scrollLeft;
    });

    contenedor.addEventListener('mouseleave', () => {
      isDown = false;
      contenedor.classList.remove('active');
    });

    contenedor.addEventListener('mouseup', () => {
      isDown = false;
      contenedor.classList.remove('active');
    });

    contenedor.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - contenedor.offsetLeft;
      const walk = (x - startX) * 1;
      contenedor.scrollLeft = scrollLeft - walk;
    });
    
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        document.querySelector('.menu').classList.add('colorMenuScroll')
      }else{
        document.querySelector('.menu').classList.remove('colorMenuScroll')
      }
    });
  })
  function contactarIr(){
    location.href = '#contactar'
  }
  function despliguecont(){
    let confirmarActivo = document.querySelector(".active")
    if(confirmarActivo){
      document.querySelector('.botonesContacto').classList.remove('active')
    }else{
      document.querySelector('.botonesContacto').classList.add('active')
    }
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <section id='Banner'>
        <div className='containerBanner'>
          <div className='containerText'>
            <h2>Hola, Soy <span>Laureano Furno</span></h2>
            <h1>Desarrollador <span>Full-Stack</span><span className='escribir'>&#160;</span></h1>
            <p>Desarrollador full-stack, enfocado en aprender y construir aplicaciones web modernas y funcionales, apasionado de la creación de soluciones a problematicas y con muchas ganas de crecer, aprender y participar en proyectos.</p>
            <div className='containerButtons'>
              <button onClick={() => contactarIr()} className='btnContactarBanner'>CONTACTAR</button>
              <a href={doc} download className='btnSeparador btnCV'>DESCARGAR CV</a>
              <div className='contenedorBotones'>
                <div className='iconRed btnSeparador'>
                  <img onClick={() => location.href = "https://www.instagram.com/laureano20fg/"}  src={instagram} alt="imagenInstagram" />
                </div>
                <div className='iconRed btnSeparador'>
                  <img onClick={() => location.href = "https://www.linkedin.com/in/laureano-furno-47b76730a/"} src={linkedin} alt="imagenLinkedinl" />
                </div>
                <div className='iconRed btnSeparador'>
                  <img onClick={() => location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBBXlHJzcZvGQgrZwvrJrdktHsCbnTMLSMMQLZprrtvRPGbrbnBFvMkZmlrCJQnRzTtXB"}  src={gmail} alt="imagenGmail" />
                </div>
              </div>
            </div>
          </div>
          <img className='imgBanner' data-aos="fade-up" data-aos-anchor-placement="center-bottom"  src={ImagenBanner} alt="imagenBanner" />
        </div>
      </section>
      <section id='about'>
        <div className='superior-Sobremi'>
          <div className='imgSobremi'>
            <img src={yoimagen} alt="imagenAboutMe" />
          </div>
          <div className='textoSobreMi'>
            <Titles title={"SOBRE MI"} />
            <p>
              Soy Laureano Furno, desarrollador full-stack. Recién me gradué de una escuela técnica en computación, donde aprendí sobre desarrollo web, Java, Python, bases de datos como MySQL, metodologías ágiles y cómo documentar y diagramar proyectos.
            </p>
            <p>
              Me gusta estar siempre en movimiento en el mundo IT: miro contenido, sigo eventos, y hago cursos o capacitaciones sobre todo lo que me llama la atención. Disfruto aprender, crear y meterme de lleno en los proyectos que me desafían.
            </p>
            <p>
              Tuve la oportunidad de participar en una internship donde pude aplicar mis habilidades en desarrollo web creando una app para la gestión de newsletters. Usé tecnologías como JavaScript, Node.js, APIs REST, PostgreSQL, además de prácticas de diagramación y trabajo en equipo. Fue una experiencia muy enriquecedora, que me permitió desenvolverme en un entorno laboral real.
            </p>
            <p>
              Después de completar las prácticas, seguí trabajando en la empresa durante seis meses más para terminar la herramienta.
            </p>
          </div>
        </div>
        <div id='Tecnologias'>
          <Titles title={"TECNOLOGIAS QUE USO"} />
          <div className='containerTecnologias'>
            <TecCard nameTecs={"Bootstrap"} img={imagenBootstrap} />
            <TecCard nameTecs={"Express"} img={imagenExpress} />
            <TecCard nameTecs={"MySQL"} img={imagenMysql} />
            <TecCard nameTecs={"JavaScript"} img={imagenJS} />
            <TecCard nameTecs={"Node.js"} img={imagenNode} />
            <TecCard nameTecs={"Figma"} img={imagenFigma} />
            <TecCard nameTecs={"HTML"} img={imagenHTML} />
            <TecCard nameTecs={"React"} img={imagenReact} />
            <TecCard nameTecs={"PostgreSQL"} img={imagenPostgreSQL} />
            <TecCard nameTecs={"CSS"} img={imagenCSS} />
          </div>
        </div>
      </section>
      <div className='botonesContacto'>
        <div className='contButtonsFixed'>
          <div className='iconContact2 btnSeparador'>
            <img onClick={() => location.href = "https://www.instagram.com/laureano20fg/"}  src={instagram} alt="imagenInstagram" />
          </div>
          <div className='iconContact2 btnSeparador'>
            <img onClick={() => location.href = "https://www.linkedin.com/in/laureano-furno-47b76730a/"} src={linkedin} alt="imagenLinkedinl" />
          </div>
          <div className='iconContact2 btnSeparador'>
            <img onClick={() => location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCBBXlHJzcZvGQgrZwvrJrdktHsCbnTMLSMMQLZprrtvRPGbrbnBFvMkZmlrCJQnRzTtXB"}  src={gmail} alt="imagenGmail" />
          </div>
        </div>
        <div className='clickDespliegue' onClick={() => despliguecont()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#cfcfcf"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>
        </div>
      </div>
      <section id='Estudios'>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='ContainerEstudio'>
          <h2 className='tituloEstudios'>ESTUDIOS</h2>
          <Card  nameTitulo={"TECNICO EN COMPUTACION"} fecha={"2019-2024"} desc={"Asistí a un secundario técnico, donde en cuarto año comencé la orientación en computación. Allí pasé por temas como Arduino con C++, Python, Java, diagramaciones, APIs REST con Node.js, HTML, CSS, PHP, MySQL, JavaScript, y fue una experiencia espectacular. Me enamoré del hecho de programar y de resolver problemas. En sexto año, comenzamos materias como Desarrollo de Sistemas, donde desarrollamos una app web para gestionar torneos de eSports, y también en Prácticas Profesionalizantes, donde creamos una visual novel, entre otros proyectos que requerían documentar endpoints, realizar diagramas entidad-relación, diagramas de flujo, aplicar metodologías como Scrum, entre otros conocimientos que considero muy valiosos, sobre todo por haber tenido docentes realmente comprometidos."} tecnologias={["HTML", "CSS", "FIGMA", "JavaScript", "Node", "Express", "MySQL", "Bootstrap"]} />
        </div>
        <div className='ContainerEstudio'>
          <h2 className='tituloEstudios'>CERTIFICACIONES</h2>
          <div className='limitarMenorWidth'>
            <Card nameTitulo={"DESARROLLO WEB 1 - INTRODUCTORIO"} fecha={"2022-2022"} desc={"Cursé Desarrollo Web I en el programa Aprendé programando, este fue un curso introductivo dictado desde abril a junio donde aprendi lo fundamental de Figma, HTML y CSS, aprendiendo cosas sobre etiquetas y estilos CSS."} tecnologias={["HTML", "CSS", "FIGMA"]} verCert={true} btnLink={"https://drive.google.com/file/d/1jN-npUspOquHLNEQqtPJPHBM0n_DRJbM/view"} />
            <Card nameTitulo={"DESARROLLO WEB 1 - AVANZADO"} fecha={"2022-2022"} desc={"Cursé Desarrollo Web I Avanzado en el programa Aprendé Programando, este fue un curso avanzado dictado desde agosto a diciembre donde profundicé en HTML y CSS, aprendiendo técnicas de maquetado más complejas, diseño responsivo y buenas prácticas para el desarrollo de sitios web modernos."} tecnologias={["HTML", "CSS", "FIGMA"]} verCert={true} btnLink={"https://drive.google.com/file/d/1PVemj_0ikmZiQStiAIk68Pc6fVSGQQ7b/view"} />
            <Card nameTitulo={"DESARROLLO WEB I"} fecha={"2022-2022"} desc={"Al finalizar el curso avanzado, me dieron el último certificado luego de mostrar un proyecto de página web responsive con HTML, CSS y diseñada en Figma."} tecnologias={["HTML", "CSS", "FIGMA"]} verCert={true} btnLink={"https://drive.google.com/file/d/13jnz4Ozou7EzePIMrLGnvzZ2VvKSN42K/view"} />
          </div>
        </div>
      </section>
      
      <section id='experienciaLaboral'>
        <div className='centrarExpLaboral'>
          <h2>EXPERIENCIA LABORAL</h2>
          <div className='containerExp'>
            <div className='experiencias'>
              <div className='lineaExp'></div>
              <div className='experienciasCartas'>
                <div className='cartExp'>
                  <div className='Circulo'></div>
                  <svg className='flechaCartaExp' xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                  <Card nameTitulo={"SCHUB: FREELANCER"} fecha={"2025-Actualidad"} desc={"Actualmente estoy trabajando como freelancer en Schub, terminando la herramienta que comenzamos en la internship. Estoy desarrollando mejores habilidades para trabajar y también aprendiendo tecnologías como AWS, Kubernetes y Docker."} tecnologias={["HTML", "CSS", "FIGMA", "Javascript", "Node", "postgresql", "React"]} btnLink={"https://drive.google.com/file/d/13jnz4Ozou7EzePIMrLGnvzZ2VvKSN42K/view"} />
                </div>
                <div className='cartExp'>
                  <div className='Circulo'></div>
                  <svg className='flechaCartaExp' xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                  <Card nameTitulo={"SCHUB: INTERSHIP"} fecha={"2024-2024"} desc={"Tuve la oportunidad de ampliar significativamente mis conocimientos y, al mismo tiempo, desarrollar habilidades cruciales como la adaptabilidad y el trabajo en equipo. Mis mentores me brindaron una guía invaluable, ayudándome a desenvolverme en el entorno laboral y a aprender sobre tecnologías de vanguardia como API, bases de datos PostgreSQL y las mejores prácticas de seguridad web."} tecnologias={["HTML", "CSS", "FIGMA", "Javascript", "Node", "postgresql", "Bootstrap"]} btnLink={"https://drive.google.com/file/d/13jnz4Ozou7EzePIMrLGnvzZ2VvKSN42K/view"} />
                </div>
                <div className='cartExp'>
                  <div className='Circulo'></div>
                  <svg className='flechaCartaExp' xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                  <Card nameTitulo={"FREELANCER"} fecha={"2023 - 2024"} desc={"Trabajé estrechamente con un equipo para crear diseños para folletos, revistas, portadas y otros materiales gráficos y trabajos de desarrollo web."} tecnologias={["HTML", "CSS", "FIGMA", "Javascript"]} btnLink={"https://drive.google.com/file/d/13jnz4Ozou7EzePIMrLGnvzZ2VvKSN42K/view"} />
                </div>
              </div>
            </div>
            <div className='iconosExp'><img src={experienicaLaboralIcono} alt="ExperienciaIcono" /></div>
          </div>
        </div>
      </section>
      <section id='proyectos'>
        <div className='CentrarProyectos'>
          <h2>PROYECTOS REALIZADOS</h2>
          <div className='containerProyecto'>
            <CardProyectos title={"LANDING PAGE SERIUM360"} id={"proyecto1"} imgTrabajo={imgHSE} fecha={"2025-2025"} btnFigma={"https://www.figma.com/design/Q0pdAolfnL3ZYdZNeco7ul/HSE?node-id=0-1&p=f&t=QX5veKD52WbcIUuR-0"} desc={"Desarrollamos una landing page para un emprendimiento de seguridad e higiene, donde se presentan sus servicios de manera clara y accesible. La página incluye un formulario de contacto y múltiples opciones de comunicación para facilitar el acceso de los clientes a la empresa."} tecnologias={["HTML", "CSS","JavaScript", "FIGMA"]} verFigma={true} verPag={true} btnLink={"https://serium360.com/"} invertido={false}/>
            <CardProyectos title={"VOXAIVE"} id={"proyecto2"} imgTrabajo={imgVoxaive} fecha={"2025-2025"} desc={"Diseñé y desarrollé una página web para el grupo de trabajo freelancer que formé junto a excompañeros de la secundaria técnica. En ella presentamos nuestros proyectos de diseño gráfico, diseño web y desarrollo de páginas. El sitio funciona como portafolio colectivo y vitrina para nuestros servicios."} tecnologias={["HTML", "CSS","JavaScript", "FIGMA"]} verFigma={true} verPag={true} btnFigma={"https://www.figma.com/design/SsYwAyLF6kGArpS1hvQCWt/Untitled?t=z0rxY8Xo1xJ7Jxul-0"} btnLink={"https://voxaive.cloud"} invertido={true}/>
          </div>
        </div>
      </section>
      <section id='contactar'>
        <div className='centrarContactar'>
          <img src={contactarIMG} alt="contactarImagen" />
          <form className='formulario' action="https://formsubmit.co/laureanofurno@gmail.com" method="POST">
            <h2>CONTACTAR</h2>
            <input type="email" name='EMAIL' placeholder='EMAIL' /><br />
            <input type="text" name='NOMBRE' placeholder='NOMBRE'/><br />
            <input type="text" name='ASUNTO' placeholder='ASUNTO'/><br />
            <input type="text" name='DESCRIPCION' className='descripcion-input' placeholder='DESCRIPCION'/><br />
            <input type="submit" />
          </form>
        </div>
      </section>
      <footer>
        <div className='CentrarFooter'>
          <p>Material gráfico como iconos proporcionado de www.freepik.es</p>
        </div>
      </footer>
    </>
  )
}

export default App
