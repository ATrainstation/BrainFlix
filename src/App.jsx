import './App.scss'

// import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Video } from './components/Video/Video'
import jsonData from './Data/videos.json'

import { HeaderText } from './components/Modules/HeaderText/HeaderText';


console.log(jsonData)
export function App() {
//   const [count, setCount] = useState(0)

  return (
    
    <>
     <NavBar />
    <main>
      <Video jsonData={jsonData}/>  
    </main>
    
    <HeaderText />
    {/* <VideoInfo /> */}
    </>
  )
}

