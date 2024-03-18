import "./VideoInfo.scss";
import { HeaderText } from "../Modules/HeaderText/HeaderText";
import { VideoData } from "../Modules/VideoData/VideoData";
import { VideoDesc } from "../Modules/VideoDesc/VideoDesc";

export function VideoInfo({ selectedVideo }) {
  return (
      <section className="video__cont__info">
        <HeaderText video={selectedVideo} />
        <VideoData video={selectedVideo} />
        <VideoDesc video={selectedVideo} />
      </section>
  );
}

    