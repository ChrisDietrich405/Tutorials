import { useState } from "react"

import Card from "../ui/Card"
import ExpensesList from "./ExpensesList"
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")
    
    const filterChangeHandler = selectedYear => {
         setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

  
    return (
        <Card className="expenses">
            <ExpenseFilter
              selected={filteredYear} 
              onChangeFilter={filterChangeHandler} />
            <ExpensesList  expenses={filteredExpenses}/>
        </Card> 
    )

}

export default Expenses