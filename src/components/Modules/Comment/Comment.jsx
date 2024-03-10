import "./Comment.scss";
import blankImage from "../../../assets/Images/transparent.png";
import { ProfilePic } from "../ProfilePic/ProfilePic";


export function Comment({ name, comment, date }) {
  // Dynamic timestamp Conversion
  function formatTimestamp(date) {
    const currentDate = new Date();
    const commentDate = new Date(date);

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

  const formattedDate = formatTimestamp(date);

  return (
    <article className="comment__cont">
      <ProfilePic hasImage={false}/>

      <div className="comment__text">
        <div className="comment__cont__top">
          <div className="comment__cont__username">
            <p className="comment__username">{`${name}`}</p>
          </div>

          <div className="comment__cont__date">
            <p className="comment__date">{`${formattedDate}`}</p>
          </div>
        </div>

        <div className="comment__cont__comment">
          <p className="comment__comment">{`${comment}`}</p>
        </div>
      </div>
    </article>
  );
}
