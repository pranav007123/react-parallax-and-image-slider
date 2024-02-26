import React from 'react'
import { Parallax } from 'react-parallax'


function Landing() {
  return (
    <>
    <div className="row">
        <div className="col-lg-12">
        <Parallax
          bgImage=
          "bmw.png"
          strength={600} style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>
        </div>
    </div>
    <div className="para1">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 p-3">
                <h3>BMW</h3>
                <p>BMW, which stands for Bayerische Motoren Werke AG (Bavarian Motor Works in English), is a well-known German multinational company that produces luxury vehicles and motorcycles. BMW was founded in 1916 and is headquartered in Munich, Germany. The company is renowned for its high-quality engineering, performance-oriented driving dynamics, and luxury features in its vehicles.

BMW's product lineup includes a wide range of cars, SUVs, and motorcycles, catering to various market segments and customer preferences. Some of the notable car models produced by BMW include the 3 Series, 5 Series, 7 Series, X1, X3, X5, and X7, among others. Additionally, BMW produces high-performance variants under the "M" designation, such as the BMW M3 and M5, which are known for their exceptional performance capabilities.

In addition to vehicles, BMW also manufactures engines, motorcycles, and provides financial services through its subsidiary BMW Financial Services. The company has a strong global presence and is considered one of the leading luxury automotive brands worldwide. If you have any specific questions about BMW or its vehicles, feel free to ask!</p>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
    <div className="pic1">
        <div className="row">
            <div className="col-lg-12">
            <Parallax
          bgImage=
          "polo.png"
          strength={600} style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>
            </div>
        </div>
    </div>

<div className="para1">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 p-3">
                <h3>POLO</h3>
                <p>The Volkswagen Polo is a popular subcompact car produced by the German automaker Volkswagen since 1975. It's known for its compact size, fuel efficiency, and practicality, making it a popular choice for urban driving and as a first car for many drivers. Over the years, the Polo has undergone several generations and updates, with each iteration offering improvements in design, technology, and performance. If you have any specific questions about the Volkswagen Polo or if there's anything else you'd like to know, feel free to ask!</p>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>

    <div className="pic2">
        <div className="row">
            <div className="col-lg-12">
            <Parallax
          bgImage=
          "audi.png"
          strength={600} style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>
            </div>
        </div>
    </div>


    <div className="para2">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 p-3">
                <h3>AUDI</h3>
                <p>
                Audi is a German automobile manufacturer that designs, engineers, produces, markets, and distributes luxury vehicles. It is a member of the Volkswagen Group and has its roots dating back to the early 20th century. Audi's headquarters are located in Ingolstadt, Germany.

Audi is known for its high-quality engineering, innovative technology, and luxurious designs. The company offers a diverse range of vehicles, including sedans, coupes, SUVs, and sports cars, catering to various market segments and consumer preferences.

Some of the popular Audi models include the Audi A3, A4, A6, A8 sedans, the Q3, Q5, and Q7 SUVs, as well as performance-oriented models like the Audi RS line and the iconic Audi R8 sports car. Audi is also known for its quattro all-wheel-drive system, which provides enhanced traction and handling in various driving conditions.

In recent years, Audi has been focusing on electric mobility and has introduced electric and plug-in hybrid vehicles under its e-tron lineup. These vehicles aim to combine Audi's luxury and performance with environmentally friendly electric powertrains.

Overall, Audi is recognized as one of the leading luxury automotive brands globally, competing with other prestigious manufacturers such as BMW and Mercedes-Benz. If you have any specific questions about Audi or its vehicles, feel free to ask!









</p>
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
    </>
  )
}

export default Landing