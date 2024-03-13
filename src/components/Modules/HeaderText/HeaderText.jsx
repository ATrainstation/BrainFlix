import "./HeaderText.scss";

export function HeaderText({video}) {
  return (
    <div className="video__cont__title">
      <h1 className="video__title">{video.title}</h1>
    </div>
  );
}
