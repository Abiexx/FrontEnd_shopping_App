import React from 'react'
import health1 from '../../../assets/img/health1.jpg'
import health2 from '../../../assets/img/health2.jpg'

const HealthFeaturedProducts = () => {
  return (
    <div>
        <div className="row top-deals">
            <h4>Health Featured Products</h4>
            <div className="grid grid-cols-2 gap-2 text-center mb-4">
                <div className="electronics">
                    <img src={health1} alt="electronics"/>
                    <span>At home COVID-19 tests</span>
                </div>
                <div className="toys">
                    <img src={health2} alt="toys"/>
                    <span>Supplements, & Vitamins</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthFeaturedProducts