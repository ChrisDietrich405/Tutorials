import { useState } from "react"
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
//we use the spread operator to access all the values inside the object
//using the spread operator allows the enteredExpenseData keys to be joined
//with the id key

            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
    <div className="new-expense">
        {!isEditing && (
         <button onClick={startEditingHandler}>Add Expense Form</button>
        )}
        {isEditing && (
         <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}/>
        )}
    </div>
    )
}

export default NewExpense;

