import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
//we use the spread operator to access all the values inside the object
//using the spread operator allows the enteredExpenseData keys to be joined
//with the id key

            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
    </div>
    )
}

export default NewExpense;

