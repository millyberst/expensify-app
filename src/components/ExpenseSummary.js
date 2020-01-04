import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

require('numeral/locales/nl-nl');
numeral.locale('nl-nl');

const ExpenseSummary = (props) =>  (
    <div>
        <p>Viewing { props.items} totalling { numeral(props.total/100).format('$0,0.00') }  </p>
    </div>
);

const mapStateProps = (state) => {    
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        items: expenses.length,
        total: selectExpenseTotal(expenses)
    };
};
export default connect(mapStateProps)(ExpenseSummary);