import { createStore, combineReducers, applyMiddleware, composer } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composerEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composer;

// Store Creation

export default () => {
    const store = createStore( 
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composerEnhacers(applyMiddleware(thunk))
    );
    return store;
};