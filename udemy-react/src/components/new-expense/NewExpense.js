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

// const arr1 = [2, 3, 4]
// const arr2 = [4, 5, 6, 0]

// const arr3 = [arr1, arr2]
// // [[2, 3, 4], [4, 5, 6, 0]]

// const arr4 = [...arr1, ...arr2]
// // [2, 3, 4, 4, 5, 6, 0]

// const object1 = {
//     title: "thing1", 
//     amount: 55,
//     date: new Date(2020, 11, 11)
// }

// const object2 = {
//     object1, id:2
//     //what will our object 2 be?
// }


// object2 = {
//   {
//     title: "thing1", 
//     amount: 55,
//     date: new Date(2020, 11, 11)
//   }, id:2}

//   /////////////////////////////////////////

//   const object2 = {...object1, id:2}

//   object2 = {
//     title: "thing1", 
//     amount: 55,
//     date: new Date(2020, 11, 11),
//     id: 2
//   }