import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
       {
         props.expenses.length === 0 ? (
          <p>No expenses</p>
         ) : (
             props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
          })
         )
       }
    </div>
)

// const ConnectedExpenseList = connect((state) => {
//  return {
//    expenses: state.expenses
//  }
// })(ExpenseList)

// export default ConnectedExpenseList

// or we can make some twik to destructer this function above (better way to use)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
       
      }
}

export default connect(mapStateToProps)(ExpenseList)