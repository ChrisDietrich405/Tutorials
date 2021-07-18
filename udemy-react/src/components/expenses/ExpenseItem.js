

import ExpenseDate from "./ExpenseDate"
import Card from "../ui/Card"
import "./ExpenseItem.css"

//destructuring removes variables from an object

// function ExpenseItem(props) {

    
//     return (
//             <Card className="expense-item">
//                 <ExpenseDate date={props.date}/>
//                 <div className="expense-item__description">
//                     <h2>{props.title}</h2>
//                     <div className="expense-item__price">${props.amount}</div>
//                 </div>
//             </Card>
//     )
// }


const ExpenseItem = ({date, title, amount}) => {
    
    return (
            <Card className="expense-item"> 
            {/* the above line also includes the card css class because of the code in the Card.js file */}
                {/* all the code inside the card component are considered its children */}
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
             
            </Card>
    )
}

export default ExpenseItem