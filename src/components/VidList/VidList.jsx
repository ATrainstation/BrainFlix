import "./VidList.scss"
import { NextVid } from "../Modules/NextVid/NextVid";


export function VidList({videosList, selectedVideo}) {

    return (
    <>
        <section className="next-videos">
        <div className="next-videos__cont__title">
          <h4 className="next-videos__title">NEXT VIDEOS</h4>
        </div>
        
        {videosList.map((nextVideo) => (
        <NextVid key={nextVideo.id} image={nextVideo.image} title={nextVideo.title} channel={nextVideo.channel} chosenVideo={selectedVideo} nextVideo={nextVideo}/>

        ))}
        </section>
    </>

  );
}
