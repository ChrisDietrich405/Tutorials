import { useState } from "react"

import Card from "../ui/Card"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css"

function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState(2020)
    
    const filterChangeHandler = selectedYear => {
         setFilteredYear(selectedYear)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            )}
            {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} /> 
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} /> 
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>  */}
        </Card> 
    )

}

export default Expenses