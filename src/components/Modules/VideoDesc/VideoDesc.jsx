import "./VideoDesc.scss";
import "../../Comments/Comments.scss"

export function VideoDesc({ video }) {
  const {description, comments} = video
  
    return (
     <>
          <article className="video__cont__description">
                  <p>{`${description}`}</p>
                    </article>
          
                    <article className="comments__cont__counter"> 
                      <p className="comments__counter">{`${comments.length} Comments`}</p>
                    </article>
     </>
  );
}