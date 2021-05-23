import React from "react";
import Post from "./post";
function Posts(){
    return (
        <div className="posts-section">
        <Post postUrl="https://miro.medium.com/max/3840/1*0ubYRV_WNR9iYrzUAVINHw.jpeg" username="deadpool" url="https://wallpaperaccess.com/full/327386.jpg" caption="That's what I am!"/>

        <Post postUrl="https://media.newyorker.com/photos/5b2a9e5a0a4f5b3d664931a9/16:9/w_2560,h_1440,c_limit/StFelix-XXXTentacion.jpg" username="xxxtentacion" url="https://wallpaper.dog/large/3438.jpg" caption="Live the life to the fullest, no matter how are the situations"/>

        <Post postUrl="https://compass-ssl.xbox.com/assets/8d/ac/8dac2278-aef9-4a8c-bd68-739693d639c2.jpg?n=Halo-Franchise-2020_Super-Hero-1400_1920x1080.jpg" username="halo_25_25" url="https://wallpaperaccess.com/full/327404.jpg" caption="Welcome to the Halo Universe: Halo Games & Updates | Xbox"/>

        <Post postUrl="https://www.esilo.com/wp-content/uploads/media-library/hooded-hacker-on-comupter-digital-brain-potential-blog-post-e1573366318920.jpg" username="hacker_404" url="https://wallpapercave.com/wp/wp3788139.jpg" caption="Lemme hack you 😈"/>
        </div>
    );
}

export default Posts;