import { useState } from "react";   
type formData = {
    name: string;
    email: string;
    age: number;
    descriptian: string;
    workState: boolean;
    
}
const Form2 = () => {
const [inputData, setInputData] = useState<formData>({
    name: '',
    email: '',
    age: 0,
    descriptian: '',
    workState: false
  });

const hendeSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    console.log(inputData);         

}
const styles = {
    border: "2px solid red",
    width: "100px",
    height: "30px",
    margin: "10px"
}

return (
<form onSubmit={hendeSubmit}> 
    <input type="text" style={{border:"2px solid red"}} value={inputData.name} onChange={(e)=>{setInputData({...inputData,name:e.target.value})}}  />
    <input type="email" style={styles} value={inputData.email} onChange={(e)=>{setInputData({...inputData,email:e.target.value})}}  />
    <input  style={styles}  type="number" value={inputData.age} onChange={(e)=>{setInputData({...inputData,age:Number(e.target.value)})}}  />
   <textarea  style={styles}   name="" id="" value={inputData.descriptian} onChange={(e)=>{setInputData({...inputData ,descriptian: e.target.value})}}></textarea>
    <input type="checkbox" style={styles} checked={inputData.workState} onChange={(e)=>{setInputData({...inputData,workState: e.target.checked})}} />
    <label htmlFor="">Work</label>
    <button type="submit" style={styles}>Submit</button>
    </form>

)

}

export default Form2;