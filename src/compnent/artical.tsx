type ArticalProps = {

    name: string;
    age: number;
    email: string;
};

const Artical = ({name ,age ,email}:ArticalProps) => {
 console.log(name ,age ,email);
    return (
        <div>
        <h1>Artical</h1>
        <p>Artical</p>
        </div>
    );
    }
export default Artical;