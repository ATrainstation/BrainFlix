import "./NextVid.scss";

export function NextVid({ image, title, channel, nextVideo, chosenVideo }) {
  return (
    <article className="video-list">
      <div
        className="video-list__cont__video"
        onClick={() => {
          chosenVideo(nextVideo.id);
        }}
      >
        <div className="video-list__cont__thumbnail">
          <div>
            <img src={`${image}`} className="video-list__thumbnail" />
            {/* Maybe insert image or use background-image?   */}
          </div>
        </div>
        <div className="video-list__cont__info">
          <div className="video-list__cont__title">
            <h3 className="video-list__title">{`${title}`}</h3>
          </div>

          <div className="video-list__cont__username">
            <p className="video-list__username">{`${channel}`}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
