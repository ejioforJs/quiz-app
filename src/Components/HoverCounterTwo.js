import React from 'react'

class HoverCounterTwo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    incrementCount = () =>{
        this.setState(prevState =>{
            return{count:prevState.count+1}
        })
    }
    render(){
        const {count} = this.state
        return(
            <h1 onMouseOver={this.incrementCount}>hovered {count} times</h1>
        )
    }
}

export default HoverCounterTwo