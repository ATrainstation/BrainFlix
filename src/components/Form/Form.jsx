import "./Form.scss";
import { Button } from "../Modules/Button/Button";
import { ProfilePic } from "../Modules/ProfilePic/ProfilePic";

export function Form({ selectedVideo }) {

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
                                JOIN THE CONVERSATION </label>
                                <textarea className="form__text-area" placeholder="Add a new comment"/>
                            
                        <Button isUpload={false}/>
    
                        </form>
                        </div>
                </section>
            </>
                );
            }





