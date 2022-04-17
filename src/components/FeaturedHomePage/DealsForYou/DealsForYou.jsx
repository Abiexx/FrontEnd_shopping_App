import React from 'react'
import './DealsForYou.css'
import deal1 from '../../../assets/img/for-u1.jpg'
import deal2 from '../../../assets/img/for-u2.jpg'
import deal3 from '../../../assets/img/for-u3.jpg'

const DealsForYou = () => {
  return (
    <div className="my-4">
        <div className="row deals-for-you">
            <h4 className='my-2'>Deals for you - Like Black Fridays</h4>
            <div className="for-u-grid-container grid grid-cols-3 text-center gap-3 my-2">
                <div className="cooking">
                    <img src={deal3} alt="cooking"/>
                    <span><strong>Get cooking & save</strong><br/> Ace mealtime with hot deals on kitchen appliances <br/><button className='border'>Shop now</button></span>
                </div>
                <div className="laptops">
                    <img src={deal1} alt="laptops"/>
                    <span><strong>Smart deals on laptops</strong> <br/> Upgrade with low prices on top brands <br/><button className='border'>Shop now</button></span>
                </div>
                <div className="floor-care">
                    <img src={deal2} alt="floor care"/>
                    <span><strong>floor care finds</strong> <br/>Sweep up savings on top mops, vaccums, & more<br/><button className='border'>Shop now</button></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealsForYou