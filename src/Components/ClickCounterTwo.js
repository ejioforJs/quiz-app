import React from 'react'

class ClickCounterTwo extends React.Component{

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
            <button onClick={this.incrementCount}>click {count} times</button>
        )
    }
}

export default ClickCounterTwo