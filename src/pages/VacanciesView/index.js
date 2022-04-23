import { useNavigate } from "react-router-dom";
import Page from "../../layouts/Page";
import React from ".";
import Button from "../../components/Button";
import VacancyItem from "../../components/VacancyItem";


const VacanciesView = () => {
    const navigate = useNavigate()
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
                <VacancyItem
                    title='Керівник департаменту маркетингових проєктів (Шевченківський район)'
                />
                <VacancyItem
                    title='Бухгалтер з обліку'
                />
            </div>
        </Page>
    )
}

export default VacanciesView