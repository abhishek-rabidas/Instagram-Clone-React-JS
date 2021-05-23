import React from "react";
import Header from "./header";
import Stories from "./stories";
import Posts from "./posts";
import Footer from "./footer";
function App(){
    return (
        <div>
        <Header />
        <Stories  />
        <Posts />
        <Footer />
        </div>
    );
}

export default App;