import React from 'react';
import heroImage from '../../assets/images/hero.png'
import heroCardImg from '../../assets/images/heroCard.png'

const HeroSection = () => {
    return (
        <div className='heroSection max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-5'>
            <img className='heroImage' src={heroImage} alt="" />
            <div className="heroCards__row flex">
                <img src={heroCardImg}className="heroCardImage mr-3" alt="" />
                <img src={heroCardImg}className="heroCardImage mr-3" alt="" />
                <img src={heroCardImg}className="heroCardImage mr-3" alt="" />
                <img src={heroCardImg}className="heroCardImage mr-3" alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
