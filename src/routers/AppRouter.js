import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboard from '../components/Dashboard/Dashboard'
import AddExpense from '../components/AddExpense/AddExpense'
import EditExpense from '../components/EditExpense/EditExpense'
import NotFound from '../components/NotFound/NotFound'
import Header from '../components/Header/Header'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDashboard} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
