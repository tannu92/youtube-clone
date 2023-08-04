import React from 'react'

const VideoCard = ({data}) => {
    const {snippet,statistics} = data
    const {channelTitle,title,thumbnails}= snippet
    console.log("****",data)
  return (
    <div className='p-2 m-2 shadow-lg w-[370px] h-[380px]'>
        <img 
        className='rounded-xl w-[100%]'
        src={thumbnails.medium.url} alt="thumbnail"/>
        <ul className='mt-2'>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard