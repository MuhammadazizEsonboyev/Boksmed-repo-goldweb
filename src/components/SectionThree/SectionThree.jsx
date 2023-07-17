import './style.css'
import React from 'react'
import { SectionThreeImages, SectionThreeImages2 } from '../../utils/utils'


export default function SectionThree() {
  return (
    <div>
      <section>
        <h5>Бренды и заводы производители</h5>
        <div className="cards">
          {SectionThreeImages?.map(({ img }, index) => {
            return (
              <React.Fragment key={index}>
                <div className="card">
                  <img src={img} className='imagehomersection' alt="" />
                </div>
                <hr />
              </React.Fragment>
            )
          })}
        </div>
        <hr />
        <div className="cards">
          {SectionThreeImages2?.map(({ img }, index) => {
            return (
              <React.Fragment key={index}>
                <div className="card">
                  <img src={img} className='imagehomersection' alt="" />
                </div>
                <hr />
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </div>
  )
}
