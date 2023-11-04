import React from 'react'; 

const Hero = ( props ) => {
  let SecondSection = <section className={`section-2 ${props.chapterName}-bg-color-b`} ></section>;
  return (
    <>
      <section className={`section-1 ${props.chapterName}-bg-color`}>
        <div className="heroSection">
          <div className="heroSection-text">
            {props.children}
            <div className="bg-img" style={{backgroundImage: `url(${props.backImage})`}}></div>
          </div>
        </div>
      </section>
      {props.secondColor === "Active" ? SecondSection : SecondSection = "0"}
    </>
  )
}

export default Hero