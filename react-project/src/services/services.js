import { hotels } from '../js/data';

export function gethotels() {
    const hotelsList = hotels;
    return hotelsList;
}

export function filterhotels(typehotels) {
    let filtredhotels = gethotels().filter(filter => filter.label === typehotels);
    return filtredhotels;
}
