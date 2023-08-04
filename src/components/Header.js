import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch()
 const toggleMenuHandler=()=>{
       dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
                className='h-8 cursor-pointer'
                alt="menu"
                src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                onClick={()=>toggleMenuHandler()}
            />
            <a href="/">
            <img 
                className='h-8 ml-4'
                src="https://www.seekpng.com/png/full/77-772362_youtube-logo-youtube-logo-png.png" 
                alt="youtube-logo"/>
            </a>
        </div>
        <div className='col-span-10'>
            <input className='w-1/2 border border-gray-400 rounded-l-full p-1' type="text"/>
            <button className='border border-gray-400 rounded-r-full px-4 py-1 bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img 
                className='h-8'
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
                alt="user"/>
        </div>
    </div>
  )
}

export default Header