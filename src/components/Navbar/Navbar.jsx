
import logonav from "../../assets/logo/Group.svg"
import logo from "../../assets/logo/logo.svg"
import logo1 from "../../assets/logo/telegram 3.svg"
import logo2 from "../../assets/logo/whatsapp 3.svg"
import iconka1 from '../../assets/logo/polylines 1.svg'
import iconka2 from '../../assets/logo/shopping-cart — копия 1.svg'
import iconka3 from '../../assets/logo/doctor — копия 4 1.svg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import "./style.css"
import { ul_list } from "../../utils/utils"

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav1">
        <img src={logonav} alt="" className="logo" />
        <p className="katalog">КАТАЛОГ</p>
        <input className="btn-search" type="text" placeholder="Поиск медицинского оборудования" />
        <p className="zakazat">Заказать обратный звонок</p>
        <p className="number-nav">8 (3412) 65-08-77</p>
        <div className="img-icon">
          <img src={logo} alt="" className="icon" />
          <img src={logo1} alt="" className="icon" />
          <img src={logo2} alt="" className="icon" />
        </div>
      </div>
      <div className="nav2">
        <ul className="list">
          {ul_list?.map(({ li }) => {
            return (
              <>
                <li className="list-item">{li}</li>
              </>
            )
          })}
        </ul>
        <div className="div-nav">
          <div className="card-nav">
            <img src={iconka1} alt="" className="logo-navbar" />
            <p className="sra">Сравнения</p>
          </div>
          <div className="card-nav">
            <img src={iconka2} alt="" className="logo-navbar" />
            <p className="sra">Корзина</p>
          </div>
          <div className="card-nav">
            <img src={iconka3} alt="" className="logo-navbar" />
            <p className="sra">Личный кабинет</p>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}
