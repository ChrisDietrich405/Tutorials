import { useState } from "react"

import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const addTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const addAmountHandler = (e) => {
        setAmount(Number(e.target.value))
    }

    const addDateHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)
        //expenseData is the object from above and is the argument
        //that will replace the enteredExpenseDate parameter in 
        //the NewExpense.js file
        setTitle("")
        setAmount("")
        setDate("")
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={addTitleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} min="0.01" step="0.01" onChange={addAmountHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={addDateHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm