import "./Form.scss";
import axios from "axios";
import { useId, useState } from "react";
import { Button } from "../Modules/Button/Button";
import { ProfilePic } from "../Modules/ProfilePic/ProfilePic";
const apiKey= "d5f7af9d-5c2e-4325-bdc1-c33027164785"
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/"



export function Form({selectedVideo, getVideoDetails, videoDetails}) {

    const [comment, setComment] = useState("");
    const { id } = selectedVideo;

            const postComment = async (newComment) => {
                try {
              const getResponse = await axios.post(
                `${apiUrl}videos/${id}/comments?api_key=${apiKey}`, newComment
              );
              getVideoDetails();
              setComment("");
            } catch (error) {
            alert("Error: Post failed, please try again");
            }
        }

        function handleSubmit(submit) {
            submit.preventDefault()
            const newComment = {
                name: "Mohan Muruge",
                comment,
            };
            postComment(newComment);
            }

    return (
            <>
                <section className="form-section__cont">
                    <div className="form__cont__pfp">
                        <div className="form__pfp">
                        <ProfilePic hasImage={true}/>
                        </div>
                    </div>
    
                    <div className="form__cont">
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="form__label">
                                JOIN THE CONVERSATION 
                                <textarea className="form__text-area" placeholder="Add a new comment" 
                                value={comment}
                                onChange={(e)=> setComment(e.target.value)}>
                                    </textarea>
                                </label>
                            
                        <div className="form__cont__button">
                            <Button isUpload={false}/>
                            </div>
    
                        </form>
                        </div>
                </section>
            </>
                );
            }