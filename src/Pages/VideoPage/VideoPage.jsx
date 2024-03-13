import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Video } from "../../components/Video/Video";
import { VideoInfo } from "../../components/VideoInfo/VideoInfo";
import { Form } from "../../components/Form/Form"
import { Comments } from "../../components/Comments/Comments";
import { VidList } from "../../components/VidList/VidList";
// import userPic from "/src/assets/Images/Mohan-muruge.jpg"

const apiKey= "d5f7af9d-5c2e-4325-bdc1-c33027164785"
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/"


export function VideoPage({selectedVideo, setSelectedVideo, videoList}) {

const [videoDetails, setVideoDetails] = useState(null);

useEffect(() => {
  const getVideoDetails = async () => {
    const getResponse = await axios.get(
      `${apiUrl}videos/${selectedVideo.id}?api_key=${apiKey}`
    )
    setVideoDetails(getResponse.data)
  };

  if (selectedVideo) {
    getVideoDetails();
  }
  
}, [selectedVideo]); 

  function getVideoFromId(id) {
    const foundId = videoList.find((aspect) => aspect.id === id);
    setSelectedVideo(foundId);
  
  } 

  if (!videoDetails) {
    return (
    <h1>loading...</h1>
  )}

  return (
    
<>
      <Video videoList={videoList} videoDetails={videoDetails}/>

      <main>
        
      <section className="dt-bottom__container">
      <div className="dt-bottom__main">
        <VideoInfo selectedVideo={videoDetails}  />
        <Form />
        <Comments videoComments={videoDetails.comments}/>
      </div>
  
      <aside className="dt-bottom__side-list">
        <VidList videoList={videoList.filter((video) => video.id !== videoDetails.id)}
            selectedVideo={getVideoFromId} />
      </aside>
  
    </section>
    </main>
</>
  )
}

export default Video