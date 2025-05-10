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

//   git config --global user.email "hasin3112@gmail.com"
//   git config --global user.name "Elhussin"
// ssh-keygen -t ed25519 -C "hasin3112@gmail.com"
// ~/.ssh/id_ed25519.pub
//ssh -T git@github.com
