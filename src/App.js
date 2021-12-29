import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                        <Home />
                </Route>
                <Route path="/page-one" exact>
                        <PageOne />
                </Route>
                <Route path="/page-two" exact>
                        <PageTwo />
                </Route>
                <Route path="/page-three" exact>
                        <PageThree />
                </Route>
                <Route path="/page-cta" exact>
                        <PageCTA />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
