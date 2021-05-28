import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './paizzas';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
