import "./ExpenseDate.css"


// export default ExpenseDate
//at this point date is available to the ExpenseDate function. we don't need to destructure
//items like we did in Expenses It is no longer trapped inside of the items array,
//it now is inside the props and it's considered a primitive value 
function ExpenseDate({date}) {  //this is a date prop
    const month = date.toLocaleString("en-US", { month: "short" })
    // const month = date.toLocaleString("en-US", { month: "short", day: "2-digit" })
    // ("en-US", { month: "long" }) - two parameters
    //en-US is being replaced with a string that will be in the US English language
    //{month: "long"} long gives you August, short would give you Aug
    //{month: "long"} replaces the default value of month in an object
    //toLocaleString is changing it to a formatted date string 
    //all classes include attributes (the value of something) and methods 
    
    //we are talking about Object Oriented Programming 
    //the date prop from function ExpenseDate({date}) is the object from the date class from Javascript 
    //the date prop is an object so it has values and methods 
    const day = date.toLocaleString("en-US", { day: "2-digit" })
    const year = date.getFullYear()
    console.log(date)


    return (
        <div className="expense-date">
            <div className="expense-date__month">{ month }</div>             
            <div className="expense-date__day">{ day }</div>
            <div className="expense-date__year">{ year }</div>
        </div>
    )
}

export default ExpenseDate