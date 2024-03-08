import React, { useReducer, useRef } from 'react'
import './Video.css'
import video1 from '../../assets/v1.mp4'

const video = ({playState, setPlayState}) => {
  
  const player = useRef(null);
  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-p ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video1} alt='Video' autoPlay muted controls ></video>
      
    </div>
  )
}

export default video
