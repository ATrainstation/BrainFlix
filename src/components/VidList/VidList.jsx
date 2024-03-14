import "./VidList.scss";
import { NextVid } from "../Modules/NextVid/NextVid";

export function VidList({ videoList, selectedVideo }) {
  return (
    <>
      <section className="next-videos">
        <div className="next-videos__cont__title">
          <h4 className="next-videos__title">NEXT VIDEOS</h4>
        </div>

        {videoList.map((nextVideo) => (
          <NextVid
            key={nextVideo.id}
            changeVideo={selectedVideo}
            nextVideo={nextVideo}
          />
        ))}
      </section>
    </>
  );
}
