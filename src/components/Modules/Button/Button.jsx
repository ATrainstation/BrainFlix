import './Button.scss'
import uploadIcon from '../../../assets/Icons/upload.svg';
import commIcon from '../../../assets/Icons/add_comment.svg';

export function Button({isUpload}) {
    const iconSrc = isUpload ? uploadIcon : commIcon;

    return (
        <div className="button__cont">
            <button className="button">
                <img className="button__symbol" src={iconSrc}/>
                <span className='button__text'>UPLOAD</span>
            </button>
        </div>
)};