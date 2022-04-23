import './index.scss'
import DropDownMenu from "../DropDownMenu";
import {SubActions, SubMenu} from "../../constants";


const VacancyItem = ({title}) => {
    return(
        <div className='vacancy-list-item'>
            <h3 className="vacancy-title">
               {title}
            </h3>
            <div className="vacancy-details">
                <div className="vacancy-salary-details">
                    <div className="vacancy-salary">
                        5 500 – 11 500 грн
                    </div>
                    <div className="vacancy-currency">
                          · Paid in USD
                    </div>
                </div>
                <div className="vacancy-address">
                    Киев, вулиця Академіка Бутлерова, 1
                </div>
            </div>
            <div className="list-item-actions">
                <DropDownMenu links={SubMenu} actions={SubActions} />
            </div>
        </div>
    )
}
export default VacancyItem