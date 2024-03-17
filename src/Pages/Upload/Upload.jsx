import "./Upload.scss";
import React from "react";
import { useState } from "react";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { NavLink, useNavigate } from "react-router-dom";

export function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const uploadHandler = (e) => {
    console.log("upload handlin)");
    if (!title || !desc) {
      alert("Form is not valid!");
      return;
    }

    if (title && desc) {
      alert("Form submitted!");
    }
    navigate("/");
  };

  return (
    <>
      <div className="upload__title">
        <h1>Upload Video</h1>
      </div>

      <main className="upload__content">
        <div className="upload__left">
          <div className="upload__thumbnail__label">
            <h4>VIDEO THUMBNAIL</h4>
          </div>

          <div className="upload__thumbnail__cont">
            <img
              className="upload__thumbnail"
              src={uploadThumbnail}
              alt="video thumbnail"
            />
          </div>
        </div>

        <div className="upload__right">
          <form
            id="uploadForm"
            onSubmit={uploadHandler}
            className="upload-form"
          >
            <div className="upload-form__title-input__cont">
              <label className="upload-form__title__label">
                TITLE YOUR VIDEO
                <input
                  className="upload-form__title__input"
                  placeholder="Add a title to your video"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                ></input>
              </label>
            </div>

            <div className="upload-form__desc__cont">
              <label className="upload-form__desc__label">
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="upload-form__desc__input"
                  placeholder="Add a description to your video"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </label>
            </div>
          </form>
        </div>
      </main>

      <div className="upload__bottom">
          <button
            form="uploadForm"
            type="submit"
            className={`button button--symbol__${name} upload-form__button`}
          >
            <span className="upload-form__button__text">UPLOAD</span>
          </button>

        <div className="upload__cancel__cont">
          <NavLink to="/">
            <h4 className="upload__cancel">CANCEL</h4>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Upload;
