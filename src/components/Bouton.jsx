import { IonCol } from '@ionic/react'
import style from './Bouton.module.css'

export default function Bouton(props) {
    const {val,special,clickEvent}=props
  return (
    <IonCol className={`${ special ? style.Special:style.NonSpecial}`} onClick={(e)=>{clickEvent(e,val)}}>
        {
            val === "/" ?<>&divide;</>:val === "*" ?<>&times;</>:val
        }
    </IonCol>
  )
}
