import {useState} from "react";

const Body1=()=>{
  const [formData,setFormData]=useState({
    name : "",
    gender : "",
    birth : "",
    email : ""
  });

  const handlerChange=(e)=>{
    console.log("현재:",e.target.name);
    console.log("수정:",e.target.value);
    // setFormData({
    //   ...formData,
    //   [e.target.name] : e.target.value
    // });

    const {name,value}=e.target;
    setFormData((prevState)=>({
      ...prevState,
      [name] : value
    }));

  }
  return (
    <div>
      <h1>회원가입</h1>
      <div>
      이름 : <input type="text" name="name" value={formData.name} onChange={handlerChange} /></div>
      <div>성별 : <input type="radio" name="gender" value="M" checked={formData.gender==="M"} onChange={handlerChange} /> 
      남 <input type="radio" name="gender" value="F" checked={formData.gender==="F"} onChange={handlerChange} /> 여
      </div>
      <div>
        생년월일 :
        <input type="date" name="birth" value={formData.birth} onChange={handlerChange} />
      </div>
      <div>  
        이메일 : <input type="email" name="email" value={formData.email} onChange={handlerChange} />
      </div>
    </div>
  );

}
export default Body1;