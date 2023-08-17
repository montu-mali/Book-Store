import React, { useState } from "react";
import Navbar from "./Navbar";
import Similar from "./Similar";

import image from "./slideImgApi";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "@mui/material";

const Home = () => {
  // const[image,setImage]=useState();
  const [images, setImages] = useState(image);

  return (
    <>
      <div className="slides">
        <Carousel className="heroslider">
          
          {image.map((i) => {
            return (
              <>
                <div className="slide">
                  <div className="image">
                    <img src={i.url} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
        {/* <div className="heroslider">




        </div> */}

      </div>

      <div className="similer-box">
        <Similar category={"Crime"} title={"Crime"} />
        <Similar category={"Programming"} title={"Programming"} />
        <Similar category={"History"} title={"History"} />
        <Similar category={"General Knowledge"} title={"General Knowledge"} />
        <Similar category={"Health"} title={"Health"} />
        <Similar
          category={"Financial Education"}
          title={"Financial Education"}
        />
        <Similar category={"Stories"} title={"Stories"} />
      </div>
    </>
  );
};

export default Home;
