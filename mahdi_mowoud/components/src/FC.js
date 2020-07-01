import React from "react";

function FC(props) {
    return (
        <div>
           <h1>this is from functional component</h1>
            <p>the game is {props.game} {props.ball}</p>
        </div>

    )
}
export default FC