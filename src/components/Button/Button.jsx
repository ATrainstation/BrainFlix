import './Button.scss'

export function Button({uploadIcon}) {

    return (
        <div className="nav-bar__cont__upload">
            <button className="nav-bar__upload">
                <img className="nav-bar__upload__symbol" src={uploadIcon}/>
                <span>UPLOAD</span>
            </button>
        </div>
)};