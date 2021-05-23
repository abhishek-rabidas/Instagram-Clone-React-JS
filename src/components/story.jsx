import React from "react";

function Story(props){
    return (
        <div className="story">
                <img id={props.seen}  className="story-pic" src={props.url}></img>
                <p>{props.username}</p>
            </div>
    );
}

export default Story;