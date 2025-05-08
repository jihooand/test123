import {useState,useRef} from "react";

const Body3=()=>{
  const [text,setText]=useState("hi!!!");
  const textRef=useRef(0);
  // console.log(textRef);
  // console.log(textRef.current);
  console.log("아래 버튼을 클릭하더라도 난 리렌더링이 안됨~~~");
  return(
    <div>
      <hr/>
      {/* 값이 변화하면서 리렌더링 */}
      <button onClick={()=>{
        setText(text+"a");
        console.log(text);
        console.log("리렌더링");
      }}>{text}</button>

      {/* 값은 증가하지만 리렌더링은 되지 않음 */}
      <button onClick={()=>{
        textRef.current++;
        console.log(textRef.current);
        
      }}
      > ref증가여부테스트</button>
    </div>
  );
}
export default Body3;