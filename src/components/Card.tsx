import style from './card.module.css'

export const Card = ({h1 , h3 , p, img,href}:{h1:string,h3:string,p:string,img?:string,href:string}) => {
  return (
    <div className={style.card}>
        <div className={style['card-left']} >
          <h1>{h1}</h1>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        <div className={style['card-right']} >
        <img alt='img' src={img}/>
        </div>
    </div>
  )
}
