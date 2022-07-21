import GetUserComponent from "../GetUserComponent"
import "./style.css"

const WelcomePage = ({setUser, user, setIsLoggedIn, children}) => {
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return ( 
        
        <div>
            {
                user ? 
                <>
                <h2>Welcome {user}!!!</h2>
                <button onClick={handleLogout}>Logout</button>                
                </>
                :
                <div className="divForm">
                {children}
                <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            }
        </div>
        
    )
}

export default WelcomePage