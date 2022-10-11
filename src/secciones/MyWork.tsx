import style from '../secciones/secciones.module.css'
import { Card } from '../components/Card';
import { cards } from '../objects/card'

export const MyWork = () => {
  return (
    <div className={style['myWork-container']} >
      {
        cards.map(card=>(
          <>
            <Card h1={card.h1} h3={card.h3} p={card.p} img={card.img} href={card.ref}/>
            <span></span>
          </>
          
        ))
      }
    </div>
  )
}
