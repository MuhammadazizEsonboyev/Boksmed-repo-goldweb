import "./Style.css"
import assets from "../../assets/image/sectionone-1.svg"
import noname from "../../assets/image/sectionone-2.svg"
import one from "../../assets/image/sectionone-3.svg"
import two from "../../assets/image/sectionone-5.svg"


export const Section = () => {
    return (
        <>

            <div className="SOZ">
                <h1 className="none">Медицинское оборудование</h1>
            </div>
            <div className="section">
                <div className="asad">
                    <div className="xarp">
                        <div className="divchA">
                            <h1 className="h">ДЕФИБРИЛЯТОРЫ</h1>
                            <p className="p">перейти в каталог</p>
                        </div>
                    </div>
                    <img id="foto" src={assets} alt="" />
                </div>
                <div className="cards1">
                    <div className="hello">
                        <div className="divchA">
                            <h1 className="h">ДЕФИБРИЛЯТОРЫ</h1>
                            <p className="p">перейти в каталог</p>
                        </div>
                        <img className="hi" src={noname} alt="" />
                    </div>
                    <div className="hello">
                        <div className="divchA">
                            <h1 className="h">ДЕФИБРИЛЯТОРЫ</h1>
                            <p className="p">перейти в каталог</p>
                        </div>
                        <img className="hi" src={noname} alt="" />
                    </div>                    <div className="hello">
                    <div className="divchA">
                            <h1 className="h">МЕДИЦИНСКИЙ</h1>
                            <p className="p">перейти в каталог</p>
                        </div>
                        <img className="hi" src={one} alt="" />
                    </div>                    <div className="hello">
                        <h1 className="m">РЕАНИМАЦИЯ</h1>
                        <p className="n">перейти в каталог</p>
                        <img className="hi" src={two} alt="" />
                    </div>
                </div>
            </div>






        </>

    )
}





