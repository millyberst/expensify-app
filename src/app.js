import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore';
import {addExpense}  from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState());




const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 7000, createdAt: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 8000, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 109000, createdAt: -200 }));


const jxs = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jxs, document.getElementById('app'));