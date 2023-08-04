import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {closeMenu} from '../utils/appSlice'


const WatchPage = () => {
    const [searchParams]= useSearchParams()
    console.log("qqqq",searchParams.get("v"))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='px-5 w-[100%]'>
        <iframe width="70%" 
         height="500"
         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage