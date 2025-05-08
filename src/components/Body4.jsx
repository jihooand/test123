import {useState,useRef} from 'react';
//const [text,setText]=useState("");
//에러, HOOK은 컴포넌트 내부에서 사용 가능

const Body4=()=>{
  const [text,setText]=useState("");
  const textRef=useRef();

  const handleChange=(e)=>{
    console.log(e.target.value); //확인용, 나중에 제거
    setText(e.target.value);
  };

  const handleClick=()=>{
    //사용자가 5글자 미만 입력하면 포커스 대기
    if(text.length<5){
      textRef.current.focus();
    }else{
      alert(text);
      setText("");  //value값을 공백 문자열로 초기화
      //textRef.current.value=""; 리렌더링이 안됨
    }
  };

  return(
    <div>
      <input type="text" ref={textRef}
        value={text} onChange={handleChange} />
      <button onClick={handleClick}>작성완료</button>  
    </div>
  );
}
export default Body4;