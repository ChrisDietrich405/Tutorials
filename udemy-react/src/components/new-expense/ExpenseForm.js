import { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    
    const dateChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: setEnteredTitle,
            amount: setEnteredAmount,
            date: new Date(setEnteredDate)
        }
            setEnteredTitle("")
            setEnteredAmount("")
            setEnteredDate("")
    }

    return (
    <form onSubmit={submitHandler} action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={setEnteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={setEnteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={setEnteredDate} min="2019-1-1" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense </button>
            </div>
        </div>
    </form>
    )
}

export default ExpenseForm