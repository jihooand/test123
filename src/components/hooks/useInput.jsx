//custom hook 만들기
//이름 앞에 use 접두사 사용
//컴포넌트 내부에 반복적인 로직을 분리해서 커스텀 훅을 만듬

import {useState} from "react";

const useInput=()=>{
  const [input,setInput]=useState("");

  const onChange=(e)=>{
    setInput(e.target.value);
  }
  return [input,onChange];
}
export default useInput;