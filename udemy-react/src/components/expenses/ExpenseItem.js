import ExpenseDate from "./ExpenseDate"
import Card from "../ui/Card"
import "./ExpenseItem.css"
import { useState } from "react"

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)


    const clickHandler = () => {
        setTitle("updated")
    }; 

    return (
        <li>
            <Card>
                <div className="expense-item">
                    <ExpenseDate date={props.date}/>
                    <div className="expense-item__description">
                        <h2>{title}</h2>
                        <div className="expense-item__price">{props.amount}</div>
                    </div>
                </div>
            </Card>
        </li>
    )

}

export default ExpenseItem