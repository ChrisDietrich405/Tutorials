//https://focused-bhabha-9805b8.netlify.app/haith/index.html


import { useState } from "react"

export default function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    const addFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const addLastName = (event) => {
        setLastName(event.target.value)
    }

    const addPassword = (event) => {
        setPassword(event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        setFirstName("")
        setLastName("")
        setPassword("")
    }

    return (
       <form onSubmit={submit}>
            <label htmlFor="firstName">
                First Name
                <input type="text" id="firstName" placeholder="First Name" onChange={addFirstName} value={firstName} />
            </label>
            <label htmlFor="lastName">
                Last Name
                <input type="text" id="lastName" placeholder="Last Name" onChange={addLastName} value={lastName} />
            </label>
            <label htmlFor="password">
                Password
                <input type="password" id="password" placeholder="password" onChange={addPassword} value={password} />
            </label>
            <button type="button">Click here</button>
       </form>
    )
}