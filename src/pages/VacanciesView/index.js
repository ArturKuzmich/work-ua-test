import { useNavigate } from "react-router-dom";
import Page from "../../layouts/Page";
import React from ".";
import Button from "../../components/Button";


const VacanciesView = () => {
    const navigate = useNavigate()
    return(
        <Page
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
                    style={{ width: "auto" }}
                    action={() => navigate('/vacancy/create')}
                />
            }
        >
            asd
        </Page>
    )
}

export default VacanciesView