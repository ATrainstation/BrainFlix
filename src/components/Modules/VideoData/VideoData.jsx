import './VideoData.scss';

export function VideoData() {

    return (
           
      
            <article class="video__cont__data">
              <div class="video__by-date">
      
                <div class="video__cont__author">
                  <h3 class="video__author">By Aiden Thompson</h3>
                </div>
      
                <div class="video__cont__date">
                  <p class="video__date"></p>
                </div>
                
              </div>
      
              <div class="video__cont__impressions">
                <div class="video__cont__views">
                  <img class="video__views_icon" />
                  <p class="video__views"></p>
                </div>
      
                <div class="video__cont__likes">
                  <img class="video__likes_icon" />
                  <p class="video__likes"></p>
                </div>
              </div>
            </article>

    )
}
  