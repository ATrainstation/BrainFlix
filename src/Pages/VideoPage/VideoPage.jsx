import "./VideoPage.scss"
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Video } from "../../components/Video/Video";
import { VideoInfo } from "../../components/VideoInfo/VideoInfo";
import { Comments } from "../../components/Comments/Comments";
import { VidList } from "../../components/VidList/VidList";
import { Form } from "../../components/Form/Form";
import { useParams } from "react-router-dom";

const apiKey = "d5f7af9d-5c2e-4325-bdc1-c33027164785";
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

export function VideoPage({ videoList }) {
  const [videoDetails, setVideoDetails] = useState(null);

  const { videoId } = useParams();
  const getVideoDetails = async () => {
    const getResponse = await axios.get(
      `${apiUrl}videos/${videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"}?api_key=${apiKey}`
    );
    setVideoDetails(getResponse.data);
  };


  useEffect(() => {
  
    getVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Video videoList={videoList} videoDetails={videoDetails} />

      <main>
        <section className="dt-bottom__container">
          <div className="dt-bottom__main">
            <VideoInfo selectedVideo={videoDetails} />
            <Form getVideoDetails={getVideoDetails} videoDetails={videoDetails} selectedVideo={videoDetails}/>
            <Comments
              videoComments={videoDetails.comments}
              selectedVideo={videoDetails}
            />
          </div>

          <aside className="dt-bottom__side-list">
            <VidList
              videoList={videoList.filter(
                (video) => video.id !== videoDetails.id
              )}
            />
          </aside>
        </section>
      </main>
    </>
  );
}

export default Video;
