import React, { useState } from 'react'
import Buttons from '../component/Buttons';
// import Product from './Product'
// import Truth from './Truth'

//we create element by this way also..
// newElement = React.createElement = (
//   a, {href: 'http://google.com' ,target: '_blank'}, 'visit google'
// )

function App() {
  var [color,setColor] = useState("green");
  return (
    <>
    <div className='w-full h-screen flex justify-center items-end pb-14 ' style={{'background': color}}>
      <div className='bg-slate-100 px-4 py-4 rounded-xl  flex gap-4 '>
        <Buttons text='red' btnBg='red' newClr={()=>setColor('red')}/>
        <Buttons text='pink' btnBg='pink' newClr={()=>setColor('pink')}/>
        <Buttons text='orange' btnBg='orange' newClr={()=>setColor('orange')}/>
        <Buttons text='yellow' btnBg='yellow' newClr={()=>setColor('yellow')}/>
        <Buttons text='grey' btnBg='grey' newClr={()=>setColor('grey')}/>
        <Buttons text='blue' btnBg='blue' newClr={()=>setColor('blue')}/>
      </div>
    </div>
      {/* {newElement} */}
    </>
  )
}

export default App