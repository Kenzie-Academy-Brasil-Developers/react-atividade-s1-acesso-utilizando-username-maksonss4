import { useState } from "react"
import "./style.css"


const GetUserComponent = ({setUser, setIsLoggedIn, children}) => {
    const [userInput, setUserInput] = useState("")

    const handleLogin = () => {
        setUser(userInput)
        setIsLoggedIn(true)
    }

    return (
        <div className="divForm">
            {children}
            <form onSubmit={(event) => handleLogin(event.preventDefault())}>
                <input
                    type={"text"} 
                    placeholder={"Insira seu nome"} 
                    value={userInput} 
                    onChange={(event) => setUserInput(event.target.value)} 
                />
                <button type="submit">Acessar com o nome</button>
            </form>
        </div>
    )
}

export default GetUserComponent