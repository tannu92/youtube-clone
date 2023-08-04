import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    // toggle sidebar according to menu icon
    // subscribe to specific portion of store 

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  return isMenuOpen && (
    <div className='p-5 shadow-lg'>
        <ul className='w-[180px]'>
            <li className='bg-gray-100 px-3 py-1 rounded-lg'><Link to="/">Home</Link></li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Shorts</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Videos</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Live</li>
        </ul>
        <h1 className='font-bold py-5'>Subscriptions</h1>
        <ul className='w-[180px]'>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Music</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Sports</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Gaming</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Movies</li>
        </ul>
        <h1 className='font-bold py-5'>Watch Later</h1>
        <ul className='w-[180px]'>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Music</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Sports</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Gaming</li>
            <li className='hover:bg-gray-100 px-3 py-1 my-2 rounded-lg'>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar