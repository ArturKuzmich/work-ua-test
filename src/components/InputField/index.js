import './index.scss';
import {ReactComponent as Clear} from "../../assets/images/Vector.svg";


const InputField = ({
                        error = false,
                        style,
                        range = false,
                        type = 'text',
                        name,
                        label,
                        required,
                        placeholder,
                        namePriceTo,
                        namePriceFrom,
                        placeholderTo,
                        placeholderFrom,
                    }) => {
    return (
        <>
            {range ?

                <div className='field-wrapper range-fields'>
                    <div className="range-field" style={style}>
                        <input
                            placeholder={placeholderFrom}
                            type={type}
                            name={namePriceFrom}
                        />
                        <Clear />
                    </div>
                    <span>-</span>
                    <div className="range-field" style={style}>
                        <input
                            type={type}
                            name={namePriceTo}
                            placeholder={placeholderTo}
                        />
                        <Clear />
                    </div>



                </div>
                :
                <div
                    className={`field-wrapper ${error ? "field-error" : ""} `}
                    style={style}
                >
                    {label &&
                        <label htmlFor={name}>
                            {label}{required && <span>*</span>}:
                        </label>
                    }
                    <input
                        name={name}
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                    />
                    {error &&
                        <p className='field-error'>{error}</p>
                    }
                </div>


            }
        </>
    )
}

export default InputField