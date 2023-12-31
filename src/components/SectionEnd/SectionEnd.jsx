import "../SectionEnd/Style.css"
// import Card1 from "../../assets/image/Sendimage1.svg"
import Star from "../../assets/image/YulduzchaSariq.svg"
import StarWhite from "../../assets/image/yulduzchaOq.svg"
import { SectionEndCardMap } from "../../utils/utils.jsx"
import React from "react"
const SectionEnd = () => {
    return (
        <>
            <section className="SecyionEnd">
                <div className="container">
                    <h1 className="heddin1">Последние новости </h1>
                    <div className="CardBoxSectionEnd">
                        {SectionEndCardMap?.map(({ img, data, text, author },index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="CardBoxEnd">
                                        <img src={img} alt="svg" className="Card_S_end cursor" />
                                        <div className="ParagrifDiv">
                                            <p className="text1">{data}</p>
                                            <p className="starDiv">
                                                <img src={Star} alt="svg" className="cursor"/>
                                                <img src={Star} alt="svg" className="cursor"/>
                                                <img src={Star} alt="svg" className="cursor"/>
                                                <img src={StarWhite} alt="svg" className="cursor"/>
                                                <img src={StarWhite} alt="svg" className="cursor"/>
                                            </p>
                                        </div>
                                        <h1 className="hedding2">{text}</h1>
                                        <div className="ParagrifDiv2">
                                            <p className="textRigth">читать дальше  </p>
                                            <p className="textLeft">{author}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}


export default SectionEnd