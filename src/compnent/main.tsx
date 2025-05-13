import Post from './post';
import Saide from './saide';

    function main() {
        const post1 : {title:string , content: string} = {
        title:`hello`,
        content:"this is a first post"
    }
    const showSide:boolean = true;

    return(
        <div className='grid grid-cols-3 gap-4 p-4 m-4' > 
            <div className='col-span-2'>
              <div className='grid grid-cols-1 gap-4'>  
                    <Post title={post1.title} content={post1.content}/>
                    <Post title="Secand Post" content='THIs is my Secand Post'/>
                    <Post title="Thired Post" content='THIs is my Thired Post'/>
                </div>
            </div>

            <div>
                {showSide ? <Saide/> : null}
         
            </div>

        </div>
    )
}

export default main;

