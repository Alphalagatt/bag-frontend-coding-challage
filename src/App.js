import { Route, Routes } from "react-router-dom";
import MainNav from "./Components/NavigationComponents/MainNav";
import LandingPage from "./Pages/LandingPage";
import ProtectedPage from "./Pages/ProtectedPage";


function App() {
 
 
return  <div>
            <MainNav/>
                <Routes>
                    <Route path='/' element={ <LandingPage/> }/>
                    <Route path='/protected-page' element={<ProtectedPage/>}/>
                </Routes>
        </div> 
}

export default App;

