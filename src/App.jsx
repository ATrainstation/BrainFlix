import "./App.scss";
import "./components/VidList/VidList.scss"

import { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Video } from "./components/Video/Video";
import videoList from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";
import userPic from "/src/assets/Images/Mohan-muruge.jpg"
import { VideoInfo } from "./components/VideoInfo/VideoInfo";
import { Form } from "./components/Form/Form"
import { Comments } from "./components/Comments/Comments";
import { VidList } from "./components/VidList/VidList";

export function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  function getVideoFromId(id) {
    const foundId = videoDetails.find((aspect) => aspect.id === id);
    setSelectedVideo(foundId);

  }

  return (
    <>
      <NavBar />
      <main>
        <Video videoList={videoList} selectedVideo={selectedVideo}/>
      

      <section className="dt-bottom__container">
        <div className="dt-bottom__main">
          <VideoInfo selectedVideo={selectedVideo}  />
          <Form />
          <Comments videoComments={selectedVideo.comments}/>
        </div>
  
        <aside className="dt-bottom__side-list">
          <VidList videosList={videoDetails.filter((video) => video.id !== selectedVideo.id)}
              selectedVideo={getVideoFromId} />
        </aside>
  
      </section>
      </main>
    </>
  );
}



