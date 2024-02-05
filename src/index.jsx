import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className="w-100 d-flex justify-content-center">
                <button className="Hello_World mt-5 ms-2" onClick={() => HelloWorld("Hello World")}>Button</button>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

function HelloWorld(text) {
    window.alert(text);
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);