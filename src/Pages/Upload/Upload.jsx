import "./Upload.scss";
import React from "react";
import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Button } from "../../components/Modules/Button/Button";
import { NavLink } from "react-router-dom";

export function Upload() {
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
          <article className="upload-form__cont">
            <form className="upload-form">
              <div className="upload-form__title-input__cont">
                <label className="upload-form__title__label">
                  TITLE YOUR VIDEO
                  <input
                    className="upload-form__title__input"
                    placeholder="Add a title to your video"
                  ></input>
                </label>
              </div>

              <div className="upload-form__desc__cont">
                <label className="upload-form__desc__label">
                  ADD A VIDEO DESCRIPTION
                  <textarea
                    className="upload-form__desc__input"
                    placeholder="Add a description to your video"
                  ></textarea>
                </label>
              </div>
            </form>
          </article>
          </div>
      </main>

          <div className="upload__bottom">
            <div className="upload-form__button">
              <Button />
            </div>

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
