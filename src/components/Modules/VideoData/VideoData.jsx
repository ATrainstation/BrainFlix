import "./VideoData.scss";
import likesIcon from "../../../assets/Icons/likes.svg"
import viewsIcon from "../../../assets/Icons/views.svg"

export function VideoData(props) {
  const { views, likes, timestamp, channel, comments } = props.video;


      // Date conversion
      const newDate = new Date(timestamp);
      const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
      const formattedDate = newDate.toLocaleDateString('en-US', options);

  return (

    <article className="video__cont__data">
      <div className="video__by-date">
        <div className="video__cont__author">
          <h3 className="video__author">{`By: ${channel}`}</h3>
        </div>

        <div className="video__cont__date">
          <p className="video__date">{`${formattedDate}`}</p>
        </div>
      </div>

      <div className="video__cont__impressions">
        <div className="video__cont__views">
          <img className="video__views__icon" src={viewsIcon} />
          <p className="video__views">{`${views}`}</p>
        </div>

        <div className="video__cont__likes">
          <img className="video__likes__icon" src={likesIcon}/>
          <p className="video__likes">{`${likes}`}</p>
        </div>
      </div>
    </article>
  );
}
