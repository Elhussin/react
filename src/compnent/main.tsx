import Post from './post';
import Saide from './saide';
function main() {
    return(
        <div className='grid grid-cols-3 gap-4 p-4 m-4' > 
            <div className='col-span-2'>
              <div className='grid grid-cols-2 gap-4'>  
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>

            <div>
                <Saide/>
            </div>

        </div>
    )
}

export default main;