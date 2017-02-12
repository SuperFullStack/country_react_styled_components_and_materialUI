/* @flow */

import initialState from '../store';
import actionTypes from '../actions/actionTypes';


type City = {
	name: string,
	latitude: number,
	longitude: number,
}
export type Cities = Array<City>;

type AddCityAction = {
	type: typeof actionTypes.FETCH_CITY_FULFILLED,
	payload: City
};
type RemoveCityAction = {
	type: typeof actionTypes.REMOVE_CITY,
	payload: number
};
type CityAction = AddCityAction | RemoveCityAction;

const cities = (state: Cities = initialState.cities, action: CityAction): Cities => {
	switch (action.type) {
		case actionTypes.FETCH_CITY_FULFILLED:
			return [
				...state,
				action.payload,
			];
		case actionTypes.FETCH_CITY_REJECTED:
			return state;
		case actionTypes.REMOVE_CITY:
			return [
				...state.slice(0, action.payload),
				...state.slice(action.payload + 1),
			];
		default:
			return state;
	}
};

export default cities;
