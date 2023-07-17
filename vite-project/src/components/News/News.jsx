import React from 'react'
import { Newsinfo } from '../../utils/utils'
import Star from "../../assets/image/YulduzchaSariq.svg"
import StarWhite from "../../assets/image/yulduzchaOq.svg"
import "./style.css"




export default function News() {
  return (
    <div>
            <section className="News">
                <div className="container">
        <h2 className='menu'>Главная >    <span>Новости</span></h2>
                    <h1 className="new_page">Новости</h1>
                    <div className="card_div">
                        {Newsinfo?.map(({ img, data, text, author },index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="Cards">
                                        <img src={img} alt="svg" className="Card_S" />
                                        <div className="text">
                                            <p className="text_p">{data}</p>
                                            <p className="star">
                                                <img src={Star} alt="svg" />
                                                <img src={Star} alt="svg" />
                                                <img src={Star} alt="svg" />
                                                <img src={StarWhite} alt="svg" />
                                                <img src={StarWhite} alt="svg" />
                                            </p>
                                        </div>
                                        <h1 className="new_page2">{text}</h1>
                                        <div className="text_p2">
                                            <p className="textR">читать дальше  </p>
                                            <p className="textL">{author}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
    </div>
  )
}
