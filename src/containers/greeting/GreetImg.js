import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
// import { Component } from "react";
// import Greet from "./greeting-01.svg"

//for animated svgs use json file
export default function GreetImg() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./greetImg.json"),
    });
  }, []);
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}

// //for static svgs
// class BannerImg extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//       <img src={banner} alt="" width="550" />
//       </div>
//       </div>
//     );
//   }
// }
// export default BannerImg;
