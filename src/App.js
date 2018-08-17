import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!!!
      </div>
    );
  }
}

const ExpenseDashboardPage = () => <div>This is the dashboard</div>;

const routes = (
  <BrowserRouter>
    <App />
    <Route path="/" component={ExpenseDashboardPage} />
  </BrowserRouter>
);

export default App;