import { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"

import Card from "../ui/Card"

import "./Expenses.css"

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2021")

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p>No expenses found</p>
    if(filteredExpense.length > 0) {
        expenseContent = filteredExpense.length > 0 && filteredExpense.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount} 
                date={expense.date} />
            
        ))
    }

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onFilterChange={filterChangeHandler} /> 
            {expenseContent}
            </Card>
        </div>
    )

}

export default Expenses