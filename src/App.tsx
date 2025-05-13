import { useState } from 'react'

import Nav from './compnent/nav'
import Main from './compnent/main'
import Artical  from './compnent/artical'
import List from './compnent/list'
import {todo} from './assets/data'
function App() {

  return (
    <>
 
      <Nav/>
      <List list={todo}/>
      <Main/>
      <Artical name='John' age={30} email='h@mail.com'> 
        <p style={{color:"red"}}>this is a child</p>
     
      </Artical>
    </>
  )
}

export default App
