import  './index.scss';


const Button = ({label, type, style, disabled,  action, variant }) => {
    return(
        <button
            className={`view-btn ${variant}`}
            type={type}
            style={style}
            disabled={disabled}
            onClick={action}
        >
            {label}
        </button>
    )
}

export default Button