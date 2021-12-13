import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function MainNav(){
    const {logout,currentUser} = useAuth();
    const navigate = useNavigate();

    //functions...
    function logoutHandler(){
        logout();
        navigate('/');
        
    }

    return<header>
        <div>
        <h1>Safari Travellers</h1>
        <h5>Explore the world with us..</h5>
        </div>
        <nav>
            <ul>
                <li hidden={!currentUser}><Link to='/protected-page'>HomePage</Link></li>
            </ul>
        </nav>
        <button hidden={currentUser}>Get Started</button>
        <button hidden={!currentUser} onClick={logoutHandler}>LogOut</button>
        <div>{currentUser?.email}</div>
    </header>
}

export default MainNav;