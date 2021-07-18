import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = ({onAddExpense}) => {
    //wants to add an id to the new expense 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //spread operator//this could contain any values
            //strings, objects, etc...
            id: Math.random().toString()
            //the purpose of this is to add an id to the enteredExpenseData
        }
        onAddExpense(expenseData)
        //the expenseData code block adds an ID to expenseData
        //next onAddExpense(expenseData) receives that ID
        //now it (expenseData) is passed up to the parent(App.js)
    }

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
}

export default NewExpense;