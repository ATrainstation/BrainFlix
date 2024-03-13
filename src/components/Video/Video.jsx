import "./Video.scss";
import nextButton from '../../assets/Icons/next.png'

export function Video({videoDetails}) {
  
  const { image } = videoDetails;

  return (
    <>
      <section>
        <article className="video__cont">
          <video className="video" controls poster={image}></video>
          
          {/* <div className="next-button">
            <img className="next-button__img" src={nextButton}/>
            </div> */}
       
        </article>
      </section>
    </>
  );
}
