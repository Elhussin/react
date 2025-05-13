import Buttoun from "./button";
import 'primeicons/primeicons.css';

function Saide() {
  const chape= <i className=" text-amber-300 pi pi-face-smile "></i>
  const src  = "https://www.w3schools.com/w3images/lights.jpg";
  return (
    <div className="grid grid-cols-2 gap-2 side border border-red-300 p-4 rounded-lg shadow-md">
      <Buttoun  label="Spesial"/>
      <Buttoun label="Last" >
        {chape}
        {chape}
        {chape}
         </Buttoun>     

      <Buttoun label="New">
        {chape}
        <img style={{width:200}} src={src} alt="RECT Shape" />
      </Buttoun>   
      <Buttoun label="d"/> 


    </div>
  );
}
export default Saide;