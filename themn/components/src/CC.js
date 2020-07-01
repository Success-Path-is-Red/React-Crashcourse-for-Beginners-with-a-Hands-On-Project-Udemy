import React, {Component} from "react";

class CC extends Component {
    render() {
        return (
            <div>
                <h1>this is class component</h1>
                <p>salam aqa <strong>{this.props.name}</strong> id e shoma ine: <strong>{this.props.username}</strong></p>
            </div>
        )
    }
}

export default CC