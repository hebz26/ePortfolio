import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
                {/*left side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <h1>
                        Heba Sayed
                    </h1>
                </div>
                <div className=" hero-des">
                    <span>i’m a front end <br/> developer and designer.</span>
                </div>

            </div>
            {/*right side*/}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="images/doodlecomp.png" alt="doodle computer"  />
                </div>

            </div>
        </div>


    </section>
  )
}

export default Hero