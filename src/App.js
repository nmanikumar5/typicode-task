import "./App.css";
import React, { Suspense, lazy } from 'react';
import Sidebar from "./components/Sidebar";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Users, Todos } from "./pages/user-todos";
// import { Albums, Posts } from "./pages";
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './ErrorBoundary';

const Posts = lazy(() => import('./pages/Posts'));
const Albums = lazy(() => import('./pages/Albums'));
const Users = lazy(() => import('./pages/user-todos/Users'));
const Todos = lazy(() => import('./pages/user-todos/Todos'));

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
          <Switch>
            <Route path="/posts" exact component={Posts} />
            <Route path="/albums" exact component={Albums} />
            <Route path="/user-todos/users" exact component={Users} />
            <Route path="/user-todos/todos" exact component={Todos} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
