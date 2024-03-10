import "./VideoInfo.scss";
import { HeaderText } from "../Modules/HeaderText/HeaderText";
import { VideoData } from "../Modules/VideoData/VideoData";
import { VideoDesc } from "../Modules/VideoDesc/VideoDesc";

export function VideoInfo({ selectedVideo }) {
  return (
    <>
      <section className="video__cont__info">
        <HeaderText />
        <VideoData video={selectedVideo} />
        <VideoDesc selectedVideo={selectedVideo}/>
      </section>
    </>
  );
}

    