import { createStore, combineReducers, applyMiddleware, composer } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';



const composerEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composer;

// Store Creation

export default () => {
    const store = createStore( 
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composerEnhacers(applyMiddleware(thunk))
    );
    return store;
};