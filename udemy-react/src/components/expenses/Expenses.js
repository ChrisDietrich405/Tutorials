import { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import Card from "../ui/Card"
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter"

function Expenses({items}) {  //instead of props I destructure here and add items (an array of objects)
  const [filteredYear, setFilteredYear] = useState("2020")
  
  const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
  }

  const filteredExpense = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // const filteredExpense = [];  //this will include only the items from the filtered year
  // for (let expense of items) { //IS THE FILTERED YEAR THE FOUR YEARS IN THE UI?
  //   if (expense.date.getFullYear().toString() === filteredYear) {
  //     filteredExpense.push(expense)
  //   }
  // }
  //props is an object and we can destructure it
  //the new array will have all the properties 

  let expenseContent = <p>No info found</p> //this is the default value. It can be overridden
  //by the if statement below 

  if(filteredExpense.length > 0) {
      expenseContent = filteredExpense.map(({title, amount, date, id}) => {
        return <ExpenseItem title={title} amount={amount} date={date} key={id}/>
      }) 
  }
  
  return(
    <Card className="expenses">    
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenseContent}

{/* 
      this is the same thing
      <Card className="expenses">    
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpense.map(({title, amount, date, id}) => {
        return <ExpenseItem title={title} amount={amount} date={date} key={id}/>
      })}  
       */}
      


      {/* when using objects inside of the map method you have to use the same property names from the object */}
        {/* /// <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date}></ExpenseItem>
        <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}></ExpenseItem>
        <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date}></ExpenseItem> */} 
    </Card>
  )}

// function Expenses({props}) {  
            

//       return(
//         <Card className="expenses">
//             {props.items.map(item => {
//               return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
//             })}
//         </Card>
//       )}

      // function Expenses(props) {  
             

      //   return(
      //     <Card className="expenses">
      //         {props.items.map(item => {
      //           return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
      //         })}
      //         {/* <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date}></ExpenseItem>
      //         <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}></ExpenseItem>
      //         <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date}></ExpenseItem> */}
      //     </Card>
      //   )}


export default Expenses