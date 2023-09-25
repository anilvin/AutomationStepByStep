import React, { useState } from "react";

const Circle = () => {
  const [no, fuckno] = useState(0);
  const [arr, setarr] = useState([]);
  const [show, setshow] = useState(0);

  const handleClick = () => {
    fuckno((p) => p + 1);
    let ar = arr;
    ar.push(1);
    setarr([...ar]);
    console.log(arr, show);
  };
  const han = (i)=>{
    setshow(i)
  }

  return (
    <div style={{display:'flex', flexWrap:'wrap', width:'100vw'}}>
    <div
             
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >a</div>

      <button onClick={handleClick}>generate</button>
      
      {no}
      {arr.length !== 0 &&
        arr.map((x, i, a) => {
          return (
            <div
              onClick={(e) =>han(i) }
              style={{
                minWidth: "100px",
                height: "100px",
                borderRadius: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >an
              {show === i ? <span>{i + 1}</span> : null}
            </div>
          );
        })}
    </div>
  );
};

export default Circle;
