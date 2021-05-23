import React from "react";

function Post(props){
    return (

        <div className="post-card">
            <div className="post-top">
            <img src={props.url} alt="" className="post-top-img" />
            <p className="post-top-username">{props.username}</p>
            </div>
            <div className="post-content">
                <img src={props.postUrl} />
            </div>
            <div className="actionBtns">
                <div className="btn-left">
                    <img  src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/39.Heart-256.png" alt="" className="btn" />
                    <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-256.png" alt="" className="btn" />
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/sent-256.png" alt="" className="btn" />
                </div>
                <div className="btn-right">
                        <img src="https://cdn0.iconfinder.com/data/icons/ui-interface-6/24/bookmark-256.png" alt="" className="btn" />
                </div>
            </div>
            <div className="caption">
                <p><span className="caption-username">{props.username}</span> {props.caption}</p>
            </div>
        </div>

    );
}

 


export default Post;