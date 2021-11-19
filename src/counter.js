import React from "react";

class Counter extends React.Component{
    constructor (props){
    super(props)
    this.state={
        timer:0,
    }}
    componentDidMount(){
        this.setState({
        interval:setInterval(()=>{this.setState({timer:this.state.timer+1})},400)
        })
    }
render(){
    return(
        <div>
            <h1 style={{color:'#2160a7'}}>{this.state.timer}</h1>
        </div>
    )
}
}
export default Counter