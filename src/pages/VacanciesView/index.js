import { useNavigate } from "react-router-dom";
import Page from "../../layouts/Page";
import Button from "../../components/Button";
import VacancyItem from "../../components/VacancyItem";
import React, {useEffect, useState, useContext} from "react";
import {DataContext} from "../../context/context";
import NotFound from "../../components/NotFound";


const VacanciesView = () => {
    const navigate = useNavigate()
    const { getList, store } = useContext(DataContext);
    const [vacanciesList, setVacanciesList] = useState([])


    useEffect(() => {
        getList('vacancies')
    },[])

    return(
        <Page
            pageBg='#E5E5E5'
            titleTag='h1'
            titleSize='small'
            title='Вакансии и отклики'
            titleIcon
            actionButtonBottom
            actionButtonTop
            actionButton={
                <Button
                    type="button"
                    label='Создать вакансию'
                    variant='lightGreen'
                    action={() => navigate('/vacancy/create')}
                />
            }

        >
            <div className="vacancies-list">
                {store.vacancies?.map(({id, city, name, price, priceComment}) => {
                    console.log(Object.keys(price))
                    return(
                        <VacancyItem
                            id={id}
                            key={id}
                            city={city}
                            title={name}
                            price={price}
                            priceComment={priceComment}
                        />
                    )
                })}
            </div>
            {!store.vacancies &&
                <NotFound text='Нет вакансий.' />
            }
        </Page>
    )
}

export default VacanciesView