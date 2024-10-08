import React, { useEffect } from 'react';
import "./Home.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {

    useEffect(()=>{
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");

        const handleNext = () => {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            slide.append(items[0]);
        }

        const handlePrev = () => {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            slide.prepend(items[items.length -1]);
        }

        next.addEventListener("click", handleNext);
        prev.addEventListener("click", handlePrev);

        return ()=> {
            next.removeEventListener("click", handleNext);
            prev.removeEventListener("click", handlePrev);
        }


    },[])

    return (
        <div className='font-poppins'>
            <div className="container">

                <div className="slide">

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/8Dq6pvp/kolkata.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Kolkata</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, alias voluptatem consequatur odit culpa accusamus.
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/9phDM9X/dhaka.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Dhaka</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta magnam quam sunt doloribus voluptatibus.
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/0VN79R0/sajek.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Sajek</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium reiciendis laudantium doloribus ratione dolor.
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/4SyPs71/sundorbon.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Sundorbon</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facilis consectetur consequatur necessitatibus quasi deleniti!
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/m5SxrGm/coxbazar.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Cox's bazar</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit ullam tenetur, adipisci distinctio asperiores?
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/0hVV64r/rangamati.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Rangamti</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloribus perspiciatis! Distinctio, sit suscipit?
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/LrvXs38/saintmartin.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Saintmartin</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste error officia nihil, expedita alias.
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/SsR6RJn/mongla.png)"}}>
                        <div className="content">
                            <div className="name font-cinzel text-6xl font-bold">Mongla</div>
                            <div className="des max-w-lg mb-5 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fugit reprehenderit facilis tenetur vero possimus?
                            </div>
                            <button className='btn btn-active'>See more</button>
                        </div>
                    </div>

                </div>

                <div className="control-btn">
                    <button className="prev btn btn-circle btn-info text-white"><FaArrowLeft /></button>
                    <button className="next btn btn-circle btn-info text-white"><FaArrowRight /></button>
                </div>

            </div>
        </div>
    );
};

export default Home;