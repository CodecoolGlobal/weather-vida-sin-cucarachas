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
  return (
    <div
      //class="compass-bg"
      style={{
        width: "200px",
        height: "200px",
        background:
          "url('http://vasilis-tsirimokos.com/codepen/compass-bg.png')",
      }}
    >
      <img
        //class="compass-pointer"
        src="http://vasilis-tsirimokos.com/codepen/compass-pointer.png"
        alt="compass"
        style={{ transform: `rotate(${Math.ceil(props.direction) + 45}deg)` }}
      />
    </div>
  );
};
export default CompassPen;
