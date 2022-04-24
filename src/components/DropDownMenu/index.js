import {NavLink} from "react-router-dom";
import "./index.scss";
import {ReactComponent as DownArrow} from "../../assets/images/arrowDown.svg";
import {useState, useContext} from "react";
import {DataContext} from "../../context/context";

const DropDownMenu = ({
                          name = "Еще",
                          links = [],
                          actions = [],
                          id,
                      }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { deleteItem } = useContext(DataContext);

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
                            onClick={() => deleteItem('vacancy', id, 'vacancies')}
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
