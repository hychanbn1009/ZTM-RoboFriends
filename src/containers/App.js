import React,{useState,useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

//All component have state need to use class function
const App=()=>{
    const [robots,setRobots]=useState([])
    const [searchfield,setSearchfield]=useState("")

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(users=>setRobots({robots:users}))
        
    // }
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>{setRobots(users)})
    },[])


    const onSearchChange=(event)=>{
        setSearchfield(event.target.value)
    }

    //because this is an object>this.onSearchChange
    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length?
    <h1>Loading</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFrie nds</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;