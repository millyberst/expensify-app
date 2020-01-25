import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

require('numeral/locales/nl-nl');
numeral.locale('nl-nl');

export const ExpensesSummary = ({ expensesCount, expensesTotal }) =>  {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord } totalling <span>{ numeral(expensesTotal/100).format('$0,0.00') } </span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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