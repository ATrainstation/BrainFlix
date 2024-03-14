import "./Form.scss";
import axios from "axios";
import { useState } from "react";
import { Button } from "../Modules/Button/Button";
import { ProfilePic } from "../Modules/ProfilePic/ProfilePic";
const apiKey= "d5f7af9d-5c2e-4325-bdc1-c33027164785"
const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/"



export function Form({ selectedVideo }) {

//     const {post, setPost} = useState{(
//         name = "Mohan Muruge",
//         comment = ""
//     )}

//     const handleInput = (event) => {
//         setPost({
//             ...post, [event.target.name]: event.target.event})
//         }
    
// function handleSubmit(submit) {
//     submit.preventDefault()
//         useEffect(() => {
//             const postComment = async () => {
//               const getResponse = await axios.post(
//                 `${apiUrl}videos/${selectedVideo.id}?api_key=${apiKey}`
//               )
//               setPost(getResponse.data)
//             };
          
//             if (selectedVideo) {
//               postComment();
//             }
            
//           }, [selectedVideo]); 


    return (
            <>
                <section className="form-section__cont">
                    <div className="form__cont__pfp">
                        <div className="form__pfp">
                        <ProfilePic hasImage={true}/>
                        </div>
                    </div>
    
                    <div className="form__cont">
                        <form className="form">
                            <label className="form__label">
                                JOIN THE CONVERSATION 
                                <textarea className="form__text-area" placeholder="Add a new comment" 
                                // onChange={handleInput}
                                />
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
        




