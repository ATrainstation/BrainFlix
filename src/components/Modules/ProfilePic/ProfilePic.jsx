import React from 'react';
import blankImage from '../../../assets/Images/transparent.png';
import profileImage from '../../../assets/Images/Mohan-muruge.jpg';
import './ProfilePic.scss';

export function ProfilePic({ hasImage }) {
  const imageSrc = hasImage ? profileImage : blankImage;

  return (
    
      <div className="profile-pic__cont">
        <img className="profile-pic__image" src={imageSrc} alt="Profile" />
      </div>
    
  );
}