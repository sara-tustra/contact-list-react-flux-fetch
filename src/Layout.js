import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import Home from "./views";
import NewContact from "./views/newContact";
import NotFound from "./views/notFound";

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new_contact">
          <NewContact />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
