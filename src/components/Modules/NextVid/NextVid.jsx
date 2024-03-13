import "./NextVid.scss";
import { Link, useParams } from "react-router-dom";

export function NextVid({ nextVideo, changeVideo }) {
  
  

  const handleClick = () => {
    changeVideo(nextVideo.id);
  };

  return (
    <Link to={`/videos/${nextVideo.id}`}>
    <article className="video-list">
      <div
        className="video-list__cont__video"
        onClick={handleClick}
      >
        <div className="video-list__cont__thumbnail">
          <div>
            <img src={`${nextVideo.image}`} className="video-list__thumbnail" />
            {/* Maybe insert image or use background-image?   */}
          </div>
        </div>
        <div className="video-list__cont__info">
          <div className="video-list__cont__title">
            <h3 className="video-list__title">{`${nextVideo.title}`}</h3>
          </div>

          <div className="video-list__cont__username">
            <p className="video-list__username">{`${nextVideo.channel}`}</p>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
