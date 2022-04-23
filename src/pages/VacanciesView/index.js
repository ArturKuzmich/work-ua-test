import { useNavigate } from "react-router-dom";
import Page from "../../layouts/Page";
import React from ".";
import Button from "../../components/Button";
import VacancyItem from "../../components/VacancyItem";
import axios from "axios";
import {API_URL} from "../../constants";
import {useEffect, useState} from "react";


const VacanciesView = () => {
    const navigate = useNavigate()
    const [vacanciesList, setVacanciesList] = useState([])

    const getList = async (entity) => {
        const { data } = await axios.get(`${API_URL}${entity}`);
        if (data) {
            setVacanciesList(data);
        }
    };
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
                {vacanciesList?.map(({id, city, name, price, priceComment}) => {
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
        </Page>
    )
}

export default VacanciesView