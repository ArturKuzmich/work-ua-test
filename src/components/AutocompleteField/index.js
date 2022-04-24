import {useRef, useState, useContext} from "react";
import React from "../../pages/VacanciesView";
import {DataContext} from "../../context/context";


const AutocompleteField = ({onChange, entity, name, values, style, placeholder, label, required}) => {
    const { getAutocomplete } = useContext(DataContext);

    const [value, setValue] = useState("");
    const [list, setList] = useState([])
    const [visibleList, setVisibleList] = useState(false)


    const handleCityChange = async (e) => {
        setValue(e.target.value);
        if (!value) return;
        await getAutocomplete(value, entity)
            .then((res) => {
                if(res){
                    setList(res)
                    setVisibleList(true)
                }
            })
    };
    const currentClick = (e) => {
        onChange(name, e.target.id)
        setValue(e.target.value)
        setVisibleList(false)
    }
    return(
        <div
            className="field-wrapper"
            style={style}
        >
            <label htmlFor={name}>
                {label}{required &&<span>*</span>}:
            </label>
            <div className=''>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleCityChange}
                    value={value}
                />
                {visibleList &&
                    <div className='field-list'>
                        {list?.map((city, i) => (
                            <option
                                onClick={currentClick}
                                key={i}
                                label={city.name}
                                data-id={city.id}
                                value={city.name}
                                id={city.id}
                            >
                                {city.name}
                            </option>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default AutocompleteField