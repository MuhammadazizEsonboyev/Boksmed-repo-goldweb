import "../Footer/Style.css"
import logo from "../../assets/logo/Frame.svg"
import Icon1 from "../../assets/icon/viber.svg"
import Icon2 from "../../assets/icon/telegram 3.svg"
import Icon3 from "../../assets/icon/whatsapp 3.svg"
import Tel from "../../assets/icon/Tel .svg"
import IconEnd1 from "../../assets/icon/F 1.svg"
import IconEnd2 from "../../assets/icon/F 2.svg"

 
const Footer = () => {
    
    return (
        <>
            <footer className="Footer">
                <div className="container1">
                    <div className="RegihtBox">
                        <img src={logo} alt="svg" />
                        <div className="ThreeIconBox">
                            <img src={Icon1} alt="svg" />
                            <img src={Icon2} alt="svg" />
                            <img src={Icon3} alt="svg" />
                        </div>
                    </div>
                    <div className="CenterBox">
                        <ul className="ListItems1">
                            <li className="List1">О компании</li>
                            <li className="List1">Производители</li>
                            <li className="List1">Доставка</li>
                            <li className="List1">Оплата</li>
                        </ul>
                        <ul className="ListItems1">
                            <li className="List1">Каталог</li>
                            <li className="List1">Новости</li>
                            <li className="List1">Реквизиты</li>
                            <li className="List1">Контакты</li>
                        </ul>
                    </div>
                    <div className="EndBox">
                        <div className="EndBoxRigthBox">
                            <div className="TextIconBoxF">
                                <img src={Tel} alt="svg" />
                                <h5 className="HeddingF">Заказать обратный звонок</h5>
                            </div>
                            <p className="TextFend">Россия, Удмуртская Республика <br />
                                426011, г. Ижевск, ул. Пушкинская 290 <br />
                                тел. 8 (3412) 65-08-77</p>
                        </div>
                        <div className="EndBoxLeftBox">
                            <h1 className="HeddingEn">Политика конфиденциальности</h1>
                            <p className="TextEnd">ООО «Boksmed» © 2015 - 2022. <br /><br />
                                Сайт носит информационный характер <br /> и не является публичной офертой.</p>
                        </div>
                    </div>
                    <div className="EndEndBox">
                        <img src={IconEnd1} alt="svg" />
                        <img src={IconEnd2} alt="svg" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer