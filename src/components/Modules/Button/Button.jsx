import './Button.scss'

export function Button({name, clickHandle}) {

    return (
            <button  onClick={clickHandle} className={`button button__symbol__${name}`}>
                {name}
            </button>
)
};