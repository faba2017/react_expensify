import {addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should edit expense action Object', () => {
    const action = editExpense('123abc', { note: 'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('should setup add expense action objct with provided value', () => {
    const expenseDate = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was the last month rent'
    }

    const action = addExpense(expenseDate)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action with default valus', ()=> {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    })
})