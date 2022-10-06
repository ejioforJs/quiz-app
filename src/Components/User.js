import React from 'react'

class User extends React.Component{
    render(){
        return(
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default User