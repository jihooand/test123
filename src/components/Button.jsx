const Button=(props)=>{
  const {img,text,price}=props;
  return(
    <div style={{width:'200px',
                height:'300px'
    }}>
      <img src={img} alt="글자가 있는 그림" 
        style={{
          width:'180px',
          height:'180px'
          }}  />
      <br/>
      <span className="box">{text}</span><br/>
      <span className="box">{price}</span>
    </div>

  );


}
export default Button;