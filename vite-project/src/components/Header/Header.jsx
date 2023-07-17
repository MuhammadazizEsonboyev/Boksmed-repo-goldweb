
import logo from '../../assets/logo/metrax logo 1.svg'
import right from '../../assets/logo/Group 49.svg'
import left from '../../assets/logo/Group 48.svg'
import oil from '../../assets/logo/баннер дифы 1.svg'
import "./style.css"


export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="div-right">
          <img src={logo} alt="" className="logo-header" />
          <h1 className="puch">Ручные и автоматические <br /> дефибрилляторы «Primedic»</h1>
          <p className="paragraf">что то нужно написать, может быть <br /> качество и выгодные цены..</p>
          <div className="img-div">
            <button className="btn-header">перейти в каталог</button>
            <img src={right} alt="" className="arrow-right" />
            <img src={left} alt="" className="arrow-left" />
          </div>
        </div>
        <div className="div-left">
          <img src={oil} alt="" className="oil" />
        </div>
      </div>
    </header>
  )
}
