import '../orderPage/Style.css'
import TelZ from "../../assets/image/TelZ.svg"
import ZTel from "../../assets/icon/Ztel.svg"


const OrderPage = () => {
    return (
        <>
            <header className="Header1">
                <div className="containerH">
                    <div className="CardH">
                        <div className="TextImageDivH">
                            <div className="TextHDiv">
                                <h1 className="heddingH1">Заказать обратный звонок</h1>
                                <p className="textH1">Оставьте свои контакты - наш специалист свяжется с Вами в рабочее время.</p>
                            </div>
                            <img src={TelZ} alt="svg" />
                        </div>
                        <hr className="hr" />
                        <div className="InpDivH">
                            <div className="InpDivhh">
                                <input type="text" className="InpH1" placeholder='Как вас зовут?' />
                            </div>
                            <div className="InpDivhh InpH1">
                                <img src={ZTel} alt="svg" />
                                <input type="text" className="InpH2" placeholder='+ 7 (___)-___-__-__' />
                            </div>
                        </div>
                        <div className="TextAreaDiv">
                            <input type="textarea" className='inph3' placeholder='Сообщение' />
                        </div>
                        <div className="BtnDivh">
                            <button className="Btnh1">отправить</button>
                            <p className="textHend">Нажимая на кнопку «Отправить», я соглашаюсь с условиями.</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default OrderPage