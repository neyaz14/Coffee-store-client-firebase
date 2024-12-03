import React from 'react';
import icon1 from '../assets/images/icons/1.png';
import icon2 from '../assets/images/icons/2.png';
import icon3 from '../assets/images/icons/3.png';
import icon4 from '../assets/images/icons/4.png';
const Banner = () => {
    return (
        <div>
            <div className='bannerBG h-[800px] relative'>
                <div className='text-amber-50 space-y-5  w-[520px]  absolute top-56 ml-8'>


                    <h1 className='text-5xl font-semibold text-amber-100'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                </div>

            </div>

            <div className='bannerDIV text-amber-950 flex py-6 mx-auto'>
                <div className='w-[310px] mx-auto'>
                    <figure>
                        <img src={icon1} alt="" />
                        <div>
                            <h1>Awesome Aroma</h1>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                    </figure>
                </div>

                <div className='w-[310px] mx-auto'>
                    <figure>
                        <img src={icon2} alt="" />
                        <div>
                            <h1>High Quality</h1>
                            <p>We served the coffee to you maintaining the best quality</p>
                        </div>
                    </figure>
                </div>

                <div className='w-[310px] mx-auto'>
                    <figure>
                        <img src={icon3} alt="" />
                        <div>
                            <h1>Pure Grades</h1>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                    </figure>
                </div>

                <div className='w-[310px] mx-auto'>
                    <figure>
                        <img src={icon4} alt="" />
                        <div>
                            <h1>Proper Roasting</h1>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </figure>
                </div>

            </div>
        </div>
    );
};

export default Banner;