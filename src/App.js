import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Homepage from "./Containers/Homepage/Homepage";
import ThemeContextProvider from "./Context/ThemeContext";
import Navbar from "./Components/Navbar/Navbar";
import Articles from "./Components/Articles/Articles";
import Contact from "./Components/Contact/Contact";

function App() {
    const history = useHistory();
    return (
    <>

        <ThemeContextProvider>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/articles" exact component={Articles}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                    <Route path="/" component={() => <div>Erreur 404</div> }></Route>
                </Switch>
            </Router>
        </ThemeContextProvider>
    </>

    );
}

export default App;
