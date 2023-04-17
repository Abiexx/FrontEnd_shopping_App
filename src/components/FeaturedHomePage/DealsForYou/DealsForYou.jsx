import React from 'react'
import './DealsForYou.css'
import deal1 from '../../../assets/img/macBookPro14.jpg'
import deal2 from '../../../assets/img/iMax.jpg'
import deal3 from '../../../assets/img/microwave.jpg'

const DealsForYou = () => {
  return (
    <div className="my-4">
        <div className="row deals-for-you">
            <h4 className='my-2'>Deals for you - Like Black Fridays</h4>
            <div className="for-u-grid-container grid grid-cols-3 text-center gap-3 my-2">
                <div className="cooking">
                    <img src={deal3} alt="cooking"/>
                    <span><strong>Get cooking & save</strong><br/> Hamilton Beach 0.9 cu. ft. Countertop Microwave Oven, 900 Watts, Stainless Steel <br/><button className='border'>Shop now</button></span>
                </div>
                <div className="laptops">
                    <img src={deal1} alt="laptops"/>
                    <span><strong>Smart deals on laptops</strong> <br/> Upgrade with MacBook Pro (2021) 14.2-inch - Apple M1 Pro 8-core and 14-core GPU - 16GB RAM - SSD 512GB <br/><button className='border'>Shop now</button></span>
                </div>
                <div className="floor-care">
                    <img src={deal2} alt="floor care"/>
                    <span><strong>floor care finds</strong> <br/>Apple - AirPods Max - Space Gray, Size: One size
$549.00<br/><button className='border'>Shop now</button></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealsForYou