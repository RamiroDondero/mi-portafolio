import style from '../secciones/secciones.module.css'
import {images} from '../assets/images'
import {motion} from 'framer-motion'

export const Skills = () => {
  return (
    <div className={style['skills-container']} >
      {
        Object.entries(images).map(([key,value])=>(
          <motion.img 
          alt='img'
          src={value}
          transition={{duration:2}}
          drag
          dragConstraints={{
            top: -300,
            left: -100,
            right: 100,
            bottom: 300,
          }}
          />
        ))
      }
    </div>
  ) 
}
