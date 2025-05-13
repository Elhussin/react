type ButtonProps = {
    label: string;
    fun?: () => void;
    children?: React.ReactNode;
};
const Buttoun = ({label, fun ,children}:ButtonProps) => {
    if (label == "" || label == null) {
        return null;
    }
    return (

    
        <button onClick={fun} className={'bg-fuchsia-700 text-white font-bold py-2 px-4 rounded hover:bg-fuchsia-900'}>
           {label}
          
            <div className="children">
                {children}
            </div>
        </button>
  
        )
        }
    
    
export default Buttoun;