import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" component={AllQuotes} exact />
      <Route path="/quotes/:quoteId" component={QuoteDetail} />
      <Route path="/new-quote" component={NewQuote} />
    </Switch>
  );
}

export default App;
