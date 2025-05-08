import useInput from "./hooks/useInput";
const HookExam=()=>{
  const[input,onChange]=useInput(""); // custom hook
  console.log(input);

  return(
    <div>
      <input type="text" value={input} onChange={onChange} />

    </div>
  );
}
export default HookExam;