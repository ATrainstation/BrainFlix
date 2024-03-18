import "./Video.scss";
import nextButton from "../../assets/Icons/next.png";

export function Video({ videoDetails }) {
  const { image } = videoDetails;

  return (
    <>
      <section>
        <article className="video__cont">
          <video className="video" controls poster={image} alt={`Thumbnail for {${videoDetails.image}`}></video>
        </article>
      </section>
    </>
  );
}
