import React from 'react'

const Buttons = (props) => {
  return (
    <>
      <button className='px-4 py-1 rounded-lg' style={{backgroundColor:props.btnBg}} onClick={props.newClr}>{props.text}</button>
    </>
  )
}

export default Buttons
