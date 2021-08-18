import React,{Component} from "react";
import CardList from "./CardList";
import {robots} from "./robots"; //rule is: not default>need to destructure it
import SearchBox from "./SearchBox";
import "./App.css";

//All component have state need to use class function
class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:"",
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    //because this is an object>this.onSearchChange
    render(){

        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;