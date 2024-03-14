import "./App.scss";
import "./components/VidList/VidList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "./components/NavBar/NavBar";
import { VideoPage } from "./Pages/VideoPage/VideoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from "./Pages/Upload/Upload";

const apiKey = "d5f7af9d-5c2e-4325-bdc1-c33027164785";
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

export function App() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const getResponse = await axios.get(`${apiUrl}videos?api_key=${apiKey}`);
      setVideoList(getResponse.data);
    };
    getVideos();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VideoPage videoList={videoList} />} />
          <Route
            path="/videos/:videoId"
            element={<VideoPage videoList={videoList} />}
          />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
