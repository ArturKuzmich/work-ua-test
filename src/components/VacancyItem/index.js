import './index.scss'
import DropDownMenu from "../DropDownMenu";
import {SubActions, SubMenu} from "../../constants";
import {getCitiesName} from "../../constants/cities";


const VacancyItem = ({id, city, title, price, priceComment }) => {
    console.log(price, 'price')
    return(
        <div className='vacancy-list-item'>
            <h3 className="vacancy-title">
               {title}
            </h3>
            <div className="vacancy-details">
                <div className="vacancy-salary-details">
                    <div className="vacancy-salary">
                        {Object.keys(price).length ?
                            <>
                                {price.from} - {price.to}
                            </>
                            :
                            <>
                                {price}
                            </>
                        }
                    </div>
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