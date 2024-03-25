import "./VideoPage.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Video } from "../../components/Video/Video";
import { HeaderText } from "../../components/Modules/HeaderText/HeaderText";
import { VideoData } from "../../components/Modules/VideoData/VideoData";
import { VideoDesc } from "../../components/Modules/VideoDesc/VideoDesc";
import { Comments } from "../../components/Comments/Comments";
import { VidList } from "../../components/VidList/VidList";
import { Form } from "../../components/Form/Form";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_URL;

export function VideoPage() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoList, setVideoList] = useState([]);

  const { id } = useParams();

  const getVideos = async () => {
    try {
      const getResponse = await axios.get(`${apiUrl}/videos`);
      setVideoList(getResponse.data);

      const selectedVideoId = id || getResponse.data[0].id;
      if (selectedVideoId) {
        getVideoDetails(selectedVideoId);
      }
    } catch {
      setVideoList(null);
      console.error(error);
    }
  };

  const getVideoDetails = async (id) => {
    try {
      const getResponse = await axios.get(`${apiUrl}/videos/${id}`);

      setVideoDetails(getResponse.data);
    } catch (error) {
      setVideoDetails(null);
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, [id]);

  if (!videoDetails) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Video videoList={videoList} videoDetails={videoDetails} />

      <main>
        <section className="dt-bottom__container">
          <div className="dt-bottom__main">
            <section className="video__cont__info">
              <HeaderText video={videoDetails} />
              <VideoData video={videoDetails} />
              <VideoDesc video={videoDetails} />
            </section>
            <Form
              getVideoDetails={getVideoDetails}
              videoDetails={videoDetails}
              selectedVideo={videoDetails}
            />
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
