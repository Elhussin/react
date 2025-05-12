import { useState } from 'react'

import Nav from './compnent/nav'
import Main from './compnent/main'
import Artical  from './compnent/artical'
function App() {

  return (
    <>
 
      <Nav/>
      <Main/>
      <Artical name='John' age={30} email='h@mail.com'> 
        <p style={{color:"red"}}>this is a child</p>
     
      </Artical>
    </>
  )
}

export default App
