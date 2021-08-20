import "./ExpenseItem.css"

function ExpenseItem() {
    return (
    <div className="expense-item">
        <div>March</div>
        <div className="expense-item__description">
            <h2>Car</h2>
            <div className="expense-item__price">444</div>
        </div>
    </div>
    )
}

export default ExpenseItem