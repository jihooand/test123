import {useState} from "react";

              //구조 분해 할당
const Viewer=({number})=>{
  return <div>{number%2===0?<h2>짝수</h2>:<h2>홀수</h2>}</div>
}

const Body2=()=>{
  const [number,setNumber]=useState(0);

  const onIncreAndDecre=(e)=>{
    const eventName=e.target.name;
    if(eventName=="increase"){
      setNumber(number+1);
    }else{
      setNumber(number-1);
    }
  }

  return(
    <div>
      <h1>{number}</h1>
      {/* Body2의 State를 Viewer에 Props로 전달 */}
      <Viewer number={number} />
      <div>
        <button name="increase" onClick={onIncreAndDecre}>
          +
        </button>
        <button name="decrease" onClick={onIncreAndDecre}>
          -
        </button>
      </div>
    </div>
  );
}
export default Body2;