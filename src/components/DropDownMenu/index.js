import {NavLink} from "react-router-dom";
import "./index.scss";
import {ReactComponent as DownArrow} from "../../assets/images/arrowDown.svg";
import {useEffect, useState} from "react";

const DropDownMenu = ({
                          name = "Еще",
                          links = [],
                          actions = [],
                      }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

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
                    <NavLink key={index} to={`${link}${1}`}>
                        {name}
                    </NavLink>
                ))}
                {actions?.map(({name}) => {
                    return (
                        <a key={name} className="list-item-action">
                            {name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default DropDownMenu
