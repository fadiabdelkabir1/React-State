import React from "react";
import Counter from "./counter";
import "./App.css";
import {Button} from "react-bootstrap"

class App extends React.Component{
  constructor(){
    super ();
    this.state ={
        pack :{
        fullName : "F. Abdelkabir",
        imgSrc: "./photo.png",
        bio : "...............",
        profession : "DS / DEV"
      },
      show : false
      
    };
  }
  showFunction(){
    this.setState({show : !this.state.show,});
  }
  
  render(){
    return(
      <div className="App" style={{margin:"5%"}}>
        <Button style={{height:'35px',width:'80px',borderRadius:'10%',margin:'2%',background:'#2160a7',color:'white'}} onClick={()=>{this.showFunction()}}>{this.state.show===true? "HIDE":"SHOW"}</Button>
        <div>
          {this.state.show === true ? (
            <div>
              <img src={this.state.pack.imgSrc} alt="error" style = {{height:"250px",width:"250px"}}/>
                <h1 style={{color:'#2160a7'}}>{this.state.pack.fullName}</h1>
                <h2 style={{color:'#2160a7'}}>{this.state.pack.bio}</h2>
                <h3 style={{color:'#2160a7'}}>{this.state.pack.profession}</h3>
                <Counter />
            </div>
            
          ) : null}
        </div>
        
      </div> 
      

    );
  }
}
export default App;
