import React from 'react'

const Accuiel = () => {
  return (
    <div  >
     <video src={process.env.PUBLIC_URL + "/Trailer Djerba Island.mp4"}  autoPlay={true} loop={true} muted={true} className="video" ></video>
    </div>
  )
}

export default Accuiel

