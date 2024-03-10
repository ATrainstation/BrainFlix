import { Comment } from "../Modules/Comment/Comment";


export function Comments({videoComments}) {
  // const { name, comment, timestamp } = videoComments


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
