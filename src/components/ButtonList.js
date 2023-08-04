import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All","Gaming","Songs","Live","Cricket","News","Cooking"]
  return (
   <div className='flex'>
    {list.map((item)=> 
        <div>
         <Button name={item}/>
        </div>
    )}
    </div>
  )
}

export default ButtonList