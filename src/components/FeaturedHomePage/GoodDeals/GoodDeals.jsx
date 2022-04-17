import React from 'react'
import './GoodDeals.css'
import product1 from '../../../assets/img/s-good-1.jpg'
import product2 from '../../../assets/img/s-good-2.jpg'
import product3 from '../../../assets/img/s-good-3.jpg'
import product4 from '../../../assets/img/s-good-4.jpg'

const GoodDeals = () => {
  return (
    <div className="good-deals">
        <div className="row s-good-deals">
            <h4>Seriously good deals</h4>
            <div className="good-grid-container grid grid-cols-4 gap-4 text-center mb-4 my-2">
                <div className="electronics">
                    <img src={product1} alt="electronics"/>
                    <span>Up to 25% off electronics</span>
                </div>
                <div className="toys">
                    <img src={product2} alt="toys"/>
                    <span>Up to 30% off toys & ride-ons</span>
                </div>
                <div className="kitchen">
                    <img src={product3} alt="kitchen"/>
                    <span>kitchen deals from $20</span>
                </div>
                <div className="fashion">
                    <img src={product4} alt="kitchen"/>
                    <span>Up to 60% off fashion</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GoodDeals