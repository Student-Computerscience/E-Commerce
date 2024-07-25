import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from './FeatureCard';

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Curbside Pickup",
    icon: <LiaGiftSolid />,
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
  },
];

const FetureSection = () => {
  return (
    <div className='container pt-16'>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
         {
          data.map((el) => (
            <FeatureCard 
            key={el.title} 
            tittle={el.title}
            icon={el.icon}
            />
          ))
         }
      </div>
      
    </div>
  )
}

export default FetureSection

