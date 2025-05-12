import Post from './post';
import Saide from './saide';

    function main() {
        const post1 : {title:string , content: string} = {
        title:`hello`,
        content:"this is a post"
    }
        console.log(post1);
    return(


        // post2:{title, content}={
        //     title:"hello",
        //     content:"this is a post"
        // }
        // post3:{title, content}={
        //     title:"hello",
        //     content:"this is a post"
        // }
        <div className='grid grid-cols-3 gap-4 p-4 m-4' > 
            <div className='col-span-2'>
              <div className='grid grid-cols-1 gap-4'>  
                    <Post title="First Post" content='THIs is my First Post'/>
                    <Post title="Secand Post" content='THIs is my Secand Post'/>
                    <Post title="Thired Post" content='THIs is my Thired Post'/>


                </div>
            </div>

            <div>
                <Saide/>
            </div>

        </div>
    )
}

export default main;

