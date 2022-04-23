import * as yup from "yup";




export const rangeVacancySchema = () => {
    const schema = yup.object({
        name: yup
            .string(`Введите название должности`)
            .required(`Пожалуйста, укажите название должности.`),
        city: yup
            .string(`Введите название города`)
            .required(`Пожалуйста, укажите название города.`),
        price: yup.object({
            to: yup
                .string(`Введите максимальное значение зарплаты.`)
                .required(`Пожалуйста, укажите минимальное и максимальное значение зарплаты.`),
            from: yup
                .string(`Введите минимальное  значение зарплаты.`)
                .required(`Пожалуйста, укажите минимальное и максимальное значение зарплаты.`),
        }),

    });
    return schema
}

export const vacancySchema = (type) => {
    const schema = yup.object({
        name: yup
            .string(`Введите название должности`)
            .required(`Пожалуйста, укажите название должности.`),
        city: yup
            .string(`Введите название города`)
            .required(`Пожалуйста, укажите название города.`),
        price: type === '1' ?
            yup
            .string(`Введите значение зарплаты`)
            .required(`Введите значение зарплаты.`)
            :
            yup
                .string(``)
                .notRequired(),

    });

    return schema;
};