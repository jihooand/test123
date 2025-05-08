import {useState} from "react";
const Body=()=>{
  const [inputText,setInputText]=useState("");
  const [option,setOption]=useState("");
  const handleChange=(event)=>{
    console.log(event.target.value);
    setInputText(event.target.value);
  }
  const changeOption=(e)=>{
    console.log(e.target.value);
    setOption(e.target.value);
  }
  //console.log(inputText);
  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <select option={option} onChange={changeOption}>
          <option value={"fruitSelect"}>과일선택</option>
          <option value={"apple"}>사과</option>
          <option value={"strawberry"}>딸기</option>
      </select>
    </div>
  );
}
export default Body;