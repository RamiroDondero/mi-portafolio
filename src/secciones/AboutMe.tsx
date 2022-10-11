import style from './secciones.module.css'
import { motion , useMotionValue, useTransform } from "framer-motion"
import logoReact from '../assets/react.svg'

export const AboutMe = () => {

  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    [ "rgb(230, 255, 0)", "#fff","rgb(255, 174, 0)"]
  )
  
  return (
    <motion.div className={style['about-container']} style={{background}}> 
     <div className={style['about-left']} >
        <h1>Ramiro Dondero</h1>
        <h3>Web Developer</h3>
        <p>Soy un entusiasta de la tecnología y la programación , quien a través de su trayectoria como desarrollador web, día a día, sigue aprendiendo nuevos lenguajes y tecnologías para su crecimiento profesional</p>
     </div>
     <motion.div className={style['about-right']} >
        <h3>Juega conmigo ...</h3><br/>
        <motion.img
            src={logoReact}
            // whileHover={{ scale: 1.1 }}
            className={style.cuadrado}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{duration:2}}
            drag
            dragConstraints={{
              top: -300,
              left: -300,
              right: 20,
              bottom: 50,
            }}
            style={{x}}
          />
     </motion.div>
    </motion.div>
  )
}
