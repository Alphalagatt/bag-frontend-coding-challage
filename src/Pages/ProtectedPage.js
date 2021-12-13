import { useState } from "react";
import MyList from "../Components/MainComponents/MyList";
import ToVisit from "../Components/MainComponents/ToVisit";
import Visited from "../Components/MainComponents/Visited";

function ProtectedPage() {
    const [title,setTitle]= useState('');

    function ChangeTopicHandler(e,data) {
        setTitle(e.target.innerHTML);
        switch (e.target.innerHTML) {
            case 'My List':
                return <MyList/>
            //case 'Visited':
             //   return <Visited/>
            //case 'To Visit':
               // return <ToVisit/>
        
            default:
                break;
        }
    }

    return<div>
        <div>
            <ul>
                <li onClick={ChangeTopicHandler}>My List</li>
                <li onClick={ChangeTopicHandler}>Visited</li>
                <li onClick={ChangeTopicHandler}>To Visit</li>
            </ul>
            <div>
                <span>facebook</span>
                <span>instagram</span>
                <span>Gmail</span>
                <span>Twitter</span>
            </div>
        </div>
        <div>
            <h1>{title}</h1>
            <div>
                {title === 'My List' && <MyList/>}
                {title==='To Visit' && <ToVisit/>}
                {title==='Visited' && <Visited/>}
            </div>
        </div>
    </div>
}

export default ProtectedPage;