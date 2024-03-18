import './Comments.scss'
import { Comment } from "../Modules/Comment/Comment";


const apiKey= "d5f7af9d-5c2e-4325-bdc1-c33027164785"
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/"


export function Comments({videoComments}) {
  
  
 videoComments.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <>
      
      <section className="comments__cont">
        
        {videoComments.map((oneComment) => (
          <Comment
            key={oneComment.id}
            name={oneComment.name}
            comment={oneComment.comment}
            date={oneComment.timestamp}
          />
        ))}
      </section>
    </>
  );
}

