import style from '../footer/footer.module.css'
import {imgMenu} from '../assets/imgMenu'

export const Footer = () => {
  return (
    <div className={style.footer}  >
      <a href='https://www.linkedin.com/in/ramiro-dondero-9300ab203/' target='_blank'>
        <img src={imgMenu.linkedin} />
      </a>
      <a href='https://github.com/RamiroDondero' target='_blank'>
        <img src={imgMenu.github} />
      </a>
    </div>
  )
}
