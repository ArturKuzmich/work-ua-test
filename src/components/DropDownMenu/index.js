import {NavLink} from "react-router-dom";
import "./index.scss";
import {ReactComponent as DownArrow} from "../../assets/images/arrowDown.svg";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../constants";

const DropDownMenu = ({
                          name = "Еще",
                          links = [],
                          actions = [],
                          id,
                      }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    const deleteItem = async (entity, id) => {
        const { status } = await axios.delete(`${API_URL}${entity}/${id}`);
        if (status >= 200 && status < 300) {

        }
    };
    return (
        <div
            className={`sub_menu`}
            onClick={() => setShowUserMenu(!showUserMenu)}
        >
            <div className={`item ${showUserMenu ? "active" : ""}`}>
                <span className="item-link">{name}</span>
                <DownArrow/>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={`list ${showUserMenu ? "show" : ""}`}
                onClick={() => setShowUserMenu(!showUserMenu)}
            >
                {links.map(({name, link}, index) => (
                    <NavLink key={index} to={`${link}${id}`}>
                        {name}
                    </NavLink>
                ))}
                {actions?.map(({name}) => {
                    return (
                        <a
                            key={name}
                            className="list-item-action"
                            onClick={() => deleteItem('vacancy', id)}
                        >
                            {name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default DropDownMenu
