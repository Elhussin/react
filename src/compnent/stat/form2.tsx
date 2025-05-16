import { useState } from "react";   

const Form2 = () => {
const [inputData, setInpudtData] = useState({
    name: '',
    email: '',
    age: 0 , 
});

const hendeSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    console.log(inputData);         

}

return (
<form onSubmit={hendeSubmit}>
    <input type="text" value={inputData.name} onChange={(e)=>{setInpudtData({...inputData,name:e.target.value})}}  />
    <input type="email" value={inputData.email} onChange={(e)=>{setInpudtData({...inputData,email:e.target.value})}}  />
    <input type="number" value={inputData.age} onChange={(e)=>{setInpudtData({...inputData,age:Number(e.target.value)})}}  />
    </form>

)

}

export default Form2;