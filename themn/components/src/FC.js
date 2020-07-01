import React from "react";

function FC(props) {
    return(
        <div>
            <h1>this is a function component</h1>
            <p>the received game is <strong>{props.game}</strong></p>
        </div>

    )
}
export default FC