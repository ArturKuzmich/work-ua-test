import {useNavigate, useParams} from "react-router-dom";
import Page from "../../layouts/Page";
import Button from "../../components/Button";
import React from "../VacanciesView";
import InputField from "../../components/InputField";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../constants";
import { useFormik } from "formik";
import {rangeVacancySchema, vacancySchema} from "../../schemas";


const Vacancy = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [priceType, setPriceType] = useState('1')
    const [item, setItem] = useState([])

    const createItem = async (entity, data ) => {
        const { status } = await axios.post(
            `${API_URL}${entity}`, data
        );
        if (status === 200) {
            navigate('/');
        }
    };
    const updateItem = async (entity, data, id) => {
        await axios.put(`${API_URL}${entity}/${id}`, data);
    };

    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        setFieldValue,
    } = useFormik({
        initialValues: {
            name: '',
            city: '',
            price: priceType === '0' ? {
                to: '',
                from: ''
            } : '',
            priceComment: '',
            cityAddres: ''
        },
        enableReinitialize: true,
        validationSchema: priceType === '0' ?  rangeVacancySchema : vacancySchema(priceType) ,
        onSubmit: async (values) => {


            const requestOptions = {
                vacancy: values
            };

            try {
                id
                    ? await updateItem('vacancy',requestOptions,  id)
                    : await createItem('vacancy', requestOptions);
            } catch (err) {
                console.log(err.response);
            }
        },
    });


    const getItem = async (entity, id) => {
        const { data } = await axios.get(`${API_URL}${entity}/${id}`);
        if (data) {
            setItem(data);
        }
    };

    useEffect(() => {
        id && getItem('vacancy', id) /// not working > server do not have  endpoint to vacancy by id
    }, [])

    return(
        <Page
            Tag='form'
            titleTag='h1'
            titleSize='large'
            title={id ? 'Редактировать вакансию' : 'Создать вакансию'}
            submitForm={handleSubmit}
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
            style={{
                maxWidth: '690px',
                width: '100%',
                background: '#F4F5F6',
                border: '1px solid #E9EBED',
                padding:'30px 30px 20px 30px'
            }}
        >
            <div className="vacancy-view-content">
                <div className="content-column">
                    <div className="column-item">
                        <h3 className="column-title">
                            Название должности<span>*</span>
                        </h3>
                        <div className="column-field">
                            <InputField
                                name='name'
                                fullWidth
                                placeholder='Введите название должности'
                                value={values.name}
                                handleChange={handleChange}
                                error={errors.name}
                            />
                        </div>
                    </div>
                    <div className="column-item">
                        <h3 className="column-title">
                            Условия работы
                        </h3>
                        <div className="column-field">
                            <InputField
                                required
                                label='Город работы'
                                name='city'
                                placeholder='Город работы'
                                style={{
                                    width: '250px'
                                }}
                                value={values.city}
                                handleChange={handleChange}
                                error={errors.city}
                            />
                        </div>
                        <div className="column-field">
                            <InputField
                                label='Адрес работы'
                                name='cityAddres'
                                placeholder='Улица и дом'
                                value={values.cityAddres}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="column-item">
                        <h3 className="column-title">
                            Зарплата<span>*</span>
                        </h3>
                        <div className="column-field">
                            <label htmlFor="range">
                                <input
                                    checked={priceType === '0'}
                                    type="radio"
                                    id='range'
                                    value='0'
                                    onChange={e => setPriceType(e.target.value)}
                                />
                                Диапазон
                            </label>
                            {priceType === '0' &&
                                <div className='flex-field'>
                                    <InputField
                                        range
                                        required
                                        error={errors?.price?.to || errors?.price?.from}
                                        name='price'
                                        namePriceTo='price.to'
                                        namePriceFrom='price.from'
                                        placeholderTo='До'
                                        placeholderFrom='От'
                                        placeholder='Сумма'
                                        valueFrom={values.price.from}
                                        valueTo={values.price.to}
                                        handleChangeRange={setFieldValue}
                                        style={{
                                            width: '100px'
                                        }}
                                    />
                                </div>
                            }
                            <label htmlFor="one_value">
                                <input
                                    checked={priceType === '1'}
                                    type="radio"
                                    id='one_value'
                                    value='1'
                                    onChange={e => setPriceType(e.target.value)}
                                />
                                Одно значение
                            </label>
                            {priceType === '1' &&
                                <div className='flex-field'>
                                    <InputField
                                        required={priceType === '1'}
                                        name='price'
                                        placeholder='Сумма'
                                        style={{
                                            width: '100px'
                                        }}
                                        handleChange={handleChange}
                                        error={errors.price}
                                        value={values.price}
                                        secondLabel='грн в месяц'
                                    />

                                </div>

                            }
                            <label htmlFor="clear">
                                <input
                                    checked={priceType === '2'}
                                    type="radio"
                                    id='clear'
                                    value='2'
                                    onChange={e => setPriceType(e.target.value)}
                                />
                                Не указывать <span>(не рекомендуется)</span>
                            </label>
                            <div className="column-field">
                                <InputField
                                    label='Комментарий к зарплате'
                                    name='priceComment'
                                    placeholder='Введите комментарий'
                                    value={values.priceComment}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Vacancy