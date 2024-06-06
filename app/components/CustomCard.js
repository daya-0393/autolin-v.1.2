'use client'

import useScreenSize from "./customHooks/useScreenSize";
import { Oswald } from "next/font/google";

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap' 
});


const CustomCard = ({title, imageUrl, bodyText, onSelection, textVisible, selected}) => {

  const screenSize = useScreenSize();

  return (
    <div className="card bg-primary p-3 border border-0 h-100">
      {screenSize >= 576 
        ? <div className="d-flex flex-column text-light">
            <img src={imageUrl} alt={`${title}`} className='card-image w-25 mb-1'/>
            <h3 className={`card-title fs-2 ${oswald.className}`}>{title}</h3>
            <p className='card-text'>{bodyText}</p>
          </div>
        : <div className="card-inner text-light" onClick={onSelection}>
            <div className="d-flex flex-row align-items-center">
              <img src={imageUrl} alt={`${title}`} className='card-image w-25 mb-1'/>
              <h3 className={`card-title fs-1 ${oswald.className}`}>{title}</h3>
              <span className="position-absolute bottom-0 end-0 p-3">+</span>
            </div>
            {textVisible && selected &&(
              <div className="pt-3">
                <p>{bodyText}</p>
              </div> 
            )}
          </div> 
      }
    </div>
  )
}

export default CustomCard;