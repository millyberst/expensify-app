import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpenseTotal([]);
    expect(result).toBe(0);
});

test('should correcly add up a single expense', () => {
    const result = selectExpenseTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});

test('should correcly add up a multiple expenses', () => {
    const result = selectExpenseTotal(expenses);  
    expect(result).toBe(114195);
});
