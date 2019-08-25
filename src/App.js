/* eslint-disable no-unused-vars */
import React,{Component} from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
    
  }
  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){
    const { monsters, searchField}=this.state;
    const filteredMonsters= monsters.filter((monster)=>{ return(
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    });

    return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
      <SearchBox placeholder={'search montesrs'} handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}>
      </CardList>

    </div>
    );
  }
}



export default App;
