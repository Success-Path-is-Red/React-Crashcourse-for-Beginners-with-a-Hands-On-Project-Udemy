import React, {Component} from "react"
class CC extends Component{
    render() {
        return (
            <div><h1>this is class component</h1>
            <h1>the name is {this.props.name} {this.props.username}</h1>
            </div>
        )
    }

}
export default CC