import Buttoun from "./button";
function Saide() {
  return (
    <div className="grid grid-cols-2 gap-2 side border border-red-300 p-4 rounded-lg shadow-md">
      <Buttoun label="Last" >
        <img src="./" alt="me" />
         </Buttoun>     

      <Buttoun label="New" />      
      <Buttoun  label="Spesial"/>

    </div>
  );
}
export default Saide;