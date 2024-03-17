import './Button.scss'
import uploadIcon from '../../../assets/Icons/upload.svg';
import commIcon from '../../../assets/Icons/add_comment.svg';

export function Button({isUpload, name, uploadForm}) {
    const iconSrc = isUpload ? uploadIcon : commIcon;

    return (
        <div className="button__cont">
            <button  type="submit" className={`button button--symbol__${name}`}>
                {/* <img className="button__symbol" src={iconSrc}/> */}
                <span className='button__text'>UPLOAD</span>
            </button>
        </div>
)};