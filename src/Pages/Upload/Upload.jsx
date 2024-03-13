import './Upload.scss'
import React from 'react'
import uploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import { Button } from '../../components/Modules/Button/Button'
import { Link, NavLink } from 'react-router-dom'


export function Upload() {
  return (
    <>
        <div>
            <h1>Upload Video</h1>
        </div>
    
        <h4>
            VIDEO THUMBNAIL
        </h4>

        <div>
            <img src={uploadThumbnail} alt='video thumbnail'/>  
        </div>

        <article className='upload-form__cont'>
            <form className='upload-form'>
                <div className='upload-form__title-input__cont'>
                    <label className='upload-form__title__label'>TITLE YOUR VIDEO
                    <input className='upload-form__title__input'></input>
                    </label>
                </div>

                <div className='upload-form__desc__cont'>
                    <label className='upload-form__desc__label'>TITLE YOUR VIDEO
                    <input className='upload-form__desc__input'></input>
                    </label>
                </div>

                <div className='upload-form__button'>
                    <Button />
                </div>

            </form>

            <NavLink 
            to="/">
                <h2 className='upload__cancel'>CANCEL</h2>
            </NavLink>
            
        </article>
            
    </>
  )
}

export default Upload