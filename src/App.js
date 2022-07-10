import './App.css';
import { gapi } from "gapi-script";
import Routing from "./Routing.js";

window.gapi.load("client:auth2", () => {
    gapi.client.init({
        clientId: "590317398193-cua2basbnnv7ni4il7vdcsm18qsg2ntk.apps.googleusercontent.com",
        plugin_name: "chat",
    });
});

function App() {
    
    return ( 
      <div className = "App" >
      <Routing />
    
        </div>
    );
}

export default App;