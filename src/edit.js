import React, { Component } from 'react';
import Moment from 'react-moment';
import { useState } from "react";
import './App.css';
export default class App extends Component {
  state = {
      loading: true,
      person: null
  }
 async componentDidMount(){
     const url = "https://randomuser.me/api/";
     const response = await fetch(url);
     const data = await response.json();
     console.log(data);
     this.setState({person:data,loading:false});


 } 

 render(){
 
     return(
         <div>
             {this.state.loading || !this.state.person ? (
                <div>loading... </div>
             ) : (
                    //  <div>
             // {this.state.person.map(pnkjajoriya)}
             // </div>
                <div>
                  
                   <div id="profile">
                      <img src={this.state.person.results[0].picture.medium} id="image"></img>
                      <div id="first"> {this.state.person.results[0].name.first} </div>
                      <div id="last"> {this.state.person.results[0].name.last} </div>
                   </div>
                    <div> {this.state.person.results[0].cell} </div>
                    <div> {this.state.person.results[0].dob.age} </div>
                    <div> {this.state.person.results[0].email} </div>
                    <div> {this.state.person.results[0].gender} </div>
                    <div> {this.state.person.results[0].phone} </div>
                      <div>
                        <div> D.O.B:</div>
                         <Moment format="DD/MM/YYYY">
                      {this.state.person.results[0].dob.date}
                        </Moment>
            </div>
                </div>
              ) }
              
         </div>
     )
   }
}