import "./style.css"
import React from 'react'
import { SectionThreeImages } from '../../utils/utils'
export default function SectionThree() {
  return (
    <div>
      <section>
        <h5>Бренды и заводы производители</h5>
        <div className="cards">

        {SectionThreeImages?.map(({img},index) => {
          return (
            <React.Fragment key={index}>
                <div className="card"><img src={img} alt="" /></div>
                <hr />
            </React.Fragment>
          )
        })}
              </div>

      </section>
    </div>
  )
}
