const cities = require('../cities.json');

export const getCitiesName = (type) =>
    cities.find((el) => type?.toString() === el.id?.toString());