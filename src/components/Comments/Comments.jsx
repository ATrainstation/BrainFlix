import { Comment } from "../Modules/Comment/Comment";
// import { BrainFlixApi } from "../../BrainFlix-Api";

export function Comments({videoComments}) {

  return (
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
  );
}
