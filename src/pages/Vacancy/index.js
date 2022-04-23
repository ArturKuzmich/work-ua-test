import {useNavigate, useParams} from "react-router-dom";
import Page from "../../layouts/Page";
import Button from "../../components/Button";
import React from "../VacanciesView";
import InputField from "../../components/InputField";
import {useState} from "react";


const Vacancy = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [priceType, setPriceType] = useState('1')


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
            style={{
                maxWidth: '690px',
                width: '100%',
                background: '#E5E5E5'
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
                            />
                        </div>
                        <div className="column-field">
                            <InputField
                                required
                                label='Адрес работы'
                                name='city'
                                placeholder='Улица и дом'
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
                                        name='price'
                                        namePriceTo='priceTo'
                                        namePriceFrom='priceFrom'
                                        placeholderTo='До'
                                        placeholderFrom='От'
                                        placeholder='Сумма'
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
                                        required
                                        name='price'
                                        placeholder='Сумма'
                                        style={{
                                            width: '100px'
                                        }}
                                    />
                                   <span>грн в месяц</span>
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
                                    required
                                    label='Комментарий к зарплате'
                                    name='priceComment'
                                    placeholder='Введите комментарий'
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