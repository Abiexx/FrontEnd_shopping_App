import React from 'react'
import './Topdeals.css'
import brand1 from '../../../assets/img/brand1.jpg'
import brand2 from '../../../assets/img/brand2.jpg'

const Topdeals = () => {
  return (
    <div>
        <div className="row top-deals">
            <h4>Top Deals - Brand New</h4>
            <div className="grid grid-cols-2 gap-2 text-center mb-4 my-2">
                <div className="electronics">
                    <img src={brand1} alt="electronics"/>
                    <span>New outdoor picks for Spring</span>
                </div>
                <div className="toys">
                    <img src={brand2} alt="toys"/>
                    <span>Create your TV Bundle</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topdeals