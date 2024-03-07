import './VideoInfo.scss';
import { HeaderText } from '../components/Modules/HeaderText/HeaderText';

export function VideoInfo() {

    return (
         
        <>
            <section class="video__cont__info">
            <HeaderText />
      
      
            <article class="video__cont__description">
              <p>Explore the cutting-edge developments and 
              predictions for Artificial Intelligence in the 
              coming years. From revolutionary breakthroughs 
              in machine learning to the ethical considerations 
              influencing AI advancements, this exploration 
              transcends the boundaries of mere speculation. 
              Join us on a journey that navigates the intricate 
              interplay between innovation, ethics, and the 
              ever-evolving tech frontier</p>
                </article>
      
                <article class="comments__cont__counter"> 
                  <p class="comments__counter">3 Comments</p>
                </article>
          </section>
        </>

    )
}
    