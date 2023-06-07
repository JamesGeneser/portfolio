import React, { useLayoutEffect, useRef } from "react";
import { Stage, Layer, Circle, Line } from "react-konva";
import { gsap } from "gsap";

// useLayoutEffect(() => {
//   let ctx = gsap.context(() => {
//     gsap.to(".circle1", { x: 200 });
//   }, comp);

//   return () => ctx.revert();
// }, []);

const BackgroundAnimation = () => {
  const circleRef = useRef();
  useLayoutEffect(() => {
    console.log(circleRef);
    gsap
      .to(circleRef.current, {
        x: 200,
        y: 400,
        duration: 5,
      })
      .then(
        setTimeout(
          gsap.to(circleRef.current, {
            x: 2,
            y: 4,
            duration: 5,
          }),
          2000
        )
      );
  }, []);

  return (
    <Stage width={300} height={300}>
      <Layer>
        <Circle className="circle" ref={circleRef} radius={50} fill="red" />
      </Layer>
    </Stage>
  );
};

export default BackgroundAnimation;
