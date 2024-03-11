import "./VideoData.scss";
import likesIcon from "../../../assets/Icons/likes.svg"
import viewsIcon from "../../../assets/Icons/views.svg"

export function VideoData(props) {
  const { views, likes, timestamp, channel, comments } = props.video;


      // Date conversion
      function formatTimestamp(timestamp) {
        const currentDate = new Date();
        const commentDate = new Date(timestamp);
    
        const timeDifference = currentDate - commentDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
    
        if (months > 12) {
          return `${years} year${years === 1 ? "" : "s"} ago`;
        } else if (months >= 1) {
          return `${months} month${months === 1 ? "" : "s"} ago`;
        } else if (days > 0) {
          return `${days} day${days === 1 ? "" : "s"} ago`;
        } else if (hours > 0) {
          return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        } else if (minutes > 0) {
          return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        } else {
          return "Just now";
        }
      }
    
      const formattedDate = formatTimestamp(timestamp);

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
