import "./App.scss";
import "./components/VidList/VidList.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { VideoPage } from "./Pages/VideoPage/VideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from "./Pages/Upload/Upload";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/videos/:id" element={<VideoPage />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
