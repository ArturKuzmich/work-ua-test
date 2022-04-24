import './index.scss'
import DropDownMenu from "../DropDownMenu";
import {SubActions, SubMenu} from "../../constants";
import {getCitiesName} from "../../constants/cities";


const VacancyItem = ({id, city, title, price, priceComment }) => {

    const computedPrice = typeof price === "string"  ?  price : `${price.from + ' - ' + price.to}`

    return(
        <div className='vacancy-list-item'>
            <h3 className="vacancy-title">
               {title}
            </h3>
            <div className="vacancy-details">
                <div className="vacancy-salary-details">
                    {computedPrice &&
                        <div className="vacancy-salary">
                            {computedPrice} грн
                        </div>
                    }
                    {priceComment &&
                        <div className="vacancy-currency">
                            · {priceComment}
                        </div>
                    }
                </div>
                <div className="vacancy-address">
                     {getCitiesName(city)?.name}
                </div>
            </div>
            <div className="list-item-actions">
                <DropDownMenu
                    id={id}
                    links={SubMenu}
                    actions={SubActions}
                />
            </div>
        </div>
    )
}
export default VacancyItem