//Card is considered a helper component for styling 

import "./Card.css"
function Card(props) {
    const classes = "card " + props.className 
    //props.className is adding a value to the props object. 
    //for example in the ExpenseItem component <Card className="expense-item"> expense-item
    //is being added to the props object
    //an example of className is expense-item
    //an example would be card expense-item (two classes)
    //card will be the default class 
    // "card " + props.className this represents a string 
    return <div className={classes}>{props.children}</div>
    //children replaces everything that is inside the JSX of the component the card is passed to
}



export default Card;

// import "./Card.css"
// function Card({className, children}) {
//     const classes = "card " + className
//     return <div className={classes}>{children}</div>
// }

// export default Card;


