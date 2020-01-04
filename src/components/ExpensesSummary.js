import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

require('numeral/locales/nl-nl');
numeral.locale('nl-nl');

export const ExpensesSummary = ({ expensesCount, expensesTotal }) =>  {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord } totalling { numeral(expensesTotal/100).format('$0,0.00') }  </h1>
        </div>
    );
};

const mapStateProps = (state) => {    
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)
    };
};
export default connect(mapStateProps)(ExpensesSummary);