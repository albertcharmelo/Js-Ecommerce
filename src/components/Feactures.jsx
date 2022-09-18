import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faShoppingBag,faWallet,faMobile } from '@fortawesome/free-solid-svg-icons'
import './../styles/feactures.css'

import Feacture from './Feacture'

export const Feactures = () => {
  return (
    <div className="container">
      <div className='row p-5 '>
        <Feacture icon={faPaperPlane} title={"Envios dentro de la comunidad"} description="Envio gratis por la compra minima de 10$ en productos"/>
        <Feacture icon={faShoppingBag} title={"Productos de calidad"} description="Productos nacionales e importados a tu alcance"/>
        <Feacture icon={faWallet} title={"Pagos al instante"} description="Diferentes metodos de pago con facturación en linea"/>
        <Feacture icon={faMobile} title={"Atención al instante"} description="Soporte técnico al instante vía Whatsapp y Telegram"/>
      </div>
    </div>
    
  )
}

export default Feactures;