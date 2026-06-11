import { useState } from "react";
import firstIMG from "./assets/lukas-konvica-cgmvDZnIHAI-unsplash.jpg";
import secondIMG from "./assets/damien-dufour-T_dAmNJdoMA-unsplash.jpg";
import thirdIGM from "./assets/martin-masson-RnuCWHJq4zE-unsplash.jpg";
import fourthIMG from "./assets/jack-berry-og8C5C6H-BI-unsplash.jpg";
import fifthIMG from "./assets/pawel-czerwinski-INSkHvVkvKE-unsplash.jpg";

import "./App.css";

function App() {
  const sliderArray = [
    { img: firstIMG, className: "slider-part4" },
    { img: secondIMG, className: "slider-part5" },
    { img: thirdIGM, className: "slider-part6" },
    { img: fourthIMG, className: "slider-part7" },
    { img: fifthIMG, className: "slider-part8" },
  ];

  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [sliderRotate, setSliderRotate] = useState<number>(0);
  const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0);
  //const [nextSlinderIndex, setNextSliderIndex] = useState<number>(1);
  /*const [prevSliderIndex, setPrevSliderIndex] = useState<number>(
    sliderArray.length - 1,
  );*/

  function moveSlider(direction: number) {
    if (direction === 1) {
      setCount((prevCount) => prevCount + 45);
    } else {
      setCount((prevCount) => prevCount - 45);
    }
  }

  function moveSlider2() {
    setCount2((prevCount) => prevCount - 45);
  }

  function moveSlider3(direction: number) {
    if (direction === 1) {
      if (currentSliderIndex >= sliderArray.length - 1) {
        setCurrentSliderIndex(0);
      } else {
        setCurrentSliderIndex((prevSliderIndex) => prevSliderIndex + 1);
      }

      setSliderRotate((prevSliderRotate) => prevSliderRotate - 72);
    } else {
      if (currentSliderIndex <= 0) {
        setCurrentSliderIndex(sliderArray.length - 1);
      } else {
        setCurrentSliderIndex((prevSliderIndex) => prevSliderIndex - 1);
      }

      setSliderRotate((prevSliderRotate) => prevSliderRotate + 72);
    }
  }

  return (
    <>
      <h1>React + Vite 3D Slider Übung</h1>
      <div className="main-div">
        <div
          style={{
            transform: `rotateX(${count2}deg) rotateY(${count}deg)`,
          }}
          className="slider"
        >
          <div className="slider-part"></div>
          <div className="slider-part2"></div>
          <div className="slider-part3"></div>
        </div>
        <div className="button-div">
          <button
            onClick={() => {
              moveSlider(-1);
            }}
          >
            Links
          </button>
          <button
            onClick={() => {
              moveSlider(1);
            }}
          >
            Rechts
          </button>
          <button onClick={moveSlider2}>X</button>
        </div>
      </div>

      <div className="main-div2">
        <div
          style={{
            transform: `rotateX(${-45}deg) rotateY(${sliderRotate}deg)`,
          }}
          className="slider2"
        >
          {sliderArray.map((sliderPart, index) => {
            const currentIMG = currentSliderIndex === index;
            const nextIMG = currentSliderIndex + 1 === index;
            const prevIMG = currentSliderIndex - 1 === index;
            const lastIMG =
              currentSliderIndex + sliderArray.length - 1 === index;

            const firstIMG =
              currentSliderIndex - (sliderArray.length - 1) === index;

            return (
              <div
                style={{
                  display: `${currentIMG || nextIMG || prevIMG || lastIMG || firstIMG ? "block" : "none"}`,
                }}
                className={`${sliderPart.className}`}
              >
                <img src={sliderPart.img} className="slider-img" alt="" />
              </div>
            );
          })}
        </div>

        <div className="button-div2">
          <button
            onClick={() => {
              moveSlider3(-1);
            }}
          >
            links
          </button>
          <button
            onClick={() => {
              moveSlider3(1);
            }}
          >
            rechts
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
