type ButtonProps = {
    label: string;
    fun?: () => void;
    children?: React.ReactNode;
};
const Buttoun = ({label, fun ,children}:ButtonProps) => {
    return (

        <div className="button width-full h-full border border-blue-300 p-4 rounded-lg shadow-md">
        <button onClick={fun} className={'bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'}>
           {label}
            </button>

            <div className="children">
                {children}
            </div>

            </div>  
        )
        }
    
    
export default Buttoun;