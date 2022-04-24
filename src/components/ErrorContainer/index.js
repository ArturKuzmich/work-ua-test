import './index.scss'

const ErrorContainer = ({errorTitle, errorDesc}) => {
    return(
        <div className='error-container'>
            <h3>{errorTitle}</h3>
            <p>{errorDesc}</p>
        </div>
    )
}

export default ErrorContainer