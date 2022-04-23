import './index.scss';
import {ReactComponent as Clear} from "../../assets/images/Vector.svg";
import React from "../../pages/VacanciesView";


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
                        value,
                        handleChange,
                        handleChangeRange,
                        secondLabel,
                        valueFrom,
                        valueTo
                    }) => {
    return (
        <>
            {range ?
                <>
                    <div className='field-wrapper range-fields'>
                        <div className="range-field" style={style}>
                            <input
                                placeholder={placeholderFrom}
                                type={type}
                                name={namePriceFrom}
                                value={valueFrom}
                                onChange={e => handleChangeRange(namePriceFrom, e.target.value)}
                            />
                            <Clear onClick={() => handleChangeRange(namePriceFrom, '')}/>
                        </div>
                        <span>-</span>
                        <div className="range-field" style={style}>
                            <input
                                type={type}
                                name={namePriceTo}
                                value={valueTo}
                                placeholder={placeholderTo}
                                onChange={e => handleChangeRange(namePriceTo, e.target.value)}
                            />
                            <Clear onClick={() => handleChangeRange(namePriceTo, '')}/>
                        </div>


                    </div>
                    {error &&
                        <p className='field-error'>{error}</p>
                    }
                </>
                :
                <>
                    <div
                        className={`field-wrapper ${error ? "field-error" : ""} `}
                        style={style}
                    >
                        {label &&
                            <label htmlFor={name}>
                                {label}{required && <span>*</span>}:
                            </label>
                        }
                        <div
                            style={{
                                display: `${secondLabel ? 'flex' : 'block'}`,
                                alignItems: 'center'
                            }}
                        >
                            <input
                                style={{
                                    width: `${secondLabel ? '100px' : ''}`
                                }}
                                name={name}
                                id={name}
                                type={type}
                                placeholder={placeholder}
                                required={required}
                                value={value}
                                onChange={handleChange}
                            />
                            {secondLabel &&
                                <span>{secondLabel}</span>
                            }
                        </div>
                    </div>
                    {error &&
                        <p className='field-error'>{error}</p>
                    }
                </>

            }
        </>
    )
}

export default InputField