import {useNavigate, useParams} from "react-router-dom";
import Page from "../../layouts/Page";
import Button from "../../components/Button";
import React from "../VacanciesView";


const Vacancy = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return(
        <Page
            Tag='form'
            titleTag='h1'
            titleSize='large'
            title={id ? 'Редактировать вакансию' : 'Создать вакансию'}
            actionButtonBottom
            actionButton={
                <Button
                    type="submit"
                    label='Сохранить'
                    variant='lightBlue'
                    style={{ width: "auto" }}
                    // action={() =>}
                />
            }
            actionCancel={
                <div
                    className='action'
                    onClick={() => navigate('/')}
                >
                    Отменить
                </div>
            }
        >

        </Page>
    )
}

export default Vacancy