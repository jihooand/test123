const Header=(props)=>{
  //기본값 설정
  const {user="김자바",age=0,hobby=["사과","딸기"]}=props;

  return(
    <>
      <h2>사용자 : {user}</h2>
      <h2>나이 : {age}</h2>
      <h2>취미 : {hobby}</h2>
      <h2>취미1 : {hobby[0]}</h2>
    </>
  );
}
export default Header;