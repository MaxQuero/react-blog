import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Homepage from "./Containers/Homepage/Homepage";
import ThemeContextProvider from "./Context/ThemeContext";
import Navbar from "./Components/Navbar/Navbar";
import Articles from "./Containers/Articles/Articles";
import Contact from "./Containers/Contact/Contact";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";

function App() {
    return (

        <ThemeContextProvider>
            <Router>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Homepage}></Route>
                        <Route path="/articles" exact component={Articles}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/article/:slug" component={Article}></Route>
                        <Route path="/new-article" exact component={AddArticle}></Route>
                        <Route path="/" component={() => <div>Erreur 404</div> }></Route>
                    </Switch>
                </div>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
