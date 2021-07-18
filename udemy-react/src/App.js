import React, { useState } from "react"
import NewExpense from "./components/new-expense/NewExpense"
import Expenses from "./components/expenses/Expenses"

const DumbyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 15),  //instantiating an object from the Date class
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DumbyExpenses)

  const addExpenseHandler = expense => {
     setExpenses(prevExpenses => {
        return [expense, ...prevExpenses]
     })
  }
    
  // const {id, title} = expenses   destructuring an object
  // const [id, title] = expenses   destructuring an array
  //when you destructure an array you are accessing the index of the items in the array 


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />  
      {/* items is an example of props   */}
    </div>
  );
}

export default App;
