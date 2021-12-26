import React,{useState,useEffect, Component} from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import {setSearchField,requestRobots} from '../action'

const mapStateToProps=(state)=>{
    return{
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
//telling me what state need to listen to and send to props

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    }
}
//tell what props should listen to (that are action that needed to dispatch)

//All component have state need to use class function
class App extends Component{
    // const [robots,setRobots]=useState([])
    // const [searchfield,setSearchfield]=useState("")

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(users=>setRobots({robots:users}))
        
    componentDidMount(){
        this.props.onRequestRobots()
    }

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(users=>{setRobots(users)})
    // },[])

    // useEffect(()=>{
    //     this.props.onRequestRobots()
    // },[])
    // const onSearchChange=(event)=>{
    //     setSearchfield(event.target.value)
    // }

    //because this is an object>this.onSearchChange
    render(){
        const {searchField,onSearchChange,robots,isPending}=this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
        return isPending?
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
}

export default connect(mapStateToProps,mapDispatchToProps)(App);