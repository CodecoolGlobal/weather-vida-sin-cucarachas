import React, { useEffect } from "react";

const CompassPen = (props) => {
  /*
    https://codepen.io/Silisav/pen/BjYobj

        .compass-bg {
        width: 200px;
        height: 200px;
        background-image: url("http://vasilis-tsirimokos.com/codepen/compass-bg.png");
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%) }
        }
    */

  /*<div
      className="compass-bg"
      style={{
        width: "50%",
        height: "50%",
        background:
          "url('http://vasilis-tsirimokos.com/codepen/compass-bg.png')",
      }}
    ></div>*/

  return (
    <img
      className="compass-pointer"
      width="50px"
      height="50px"
      src="/compasspointer-100.png"
      alt="compass"
      style={{ transform: `rotate(${Math.ceil(props.direction) + 45}deg)` }}
    />
  );
};
export default CompassPen;
