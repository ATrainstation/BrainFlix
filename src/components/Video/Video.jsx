import "./Video.scss";

export function Video({selectedVideo}) {
  
  const { image } = selectedVideo;

  return (
    <>
      <section>
        <article className="video__cont">
          <video className="video" controls poster={image}></video>
        </article>
      </section>
    </>
  );
}
