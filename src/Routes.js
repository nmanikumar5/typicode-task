import React, { Suspense } from 'react';
import Sidebar from "./components/Sidebar";
import PageNotFound from "./components/PageNotFound";
import Message from './components/Message'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageContext from './core/context/MessageContext';
import isEmpty from 'lodash/isEmpty';

const Home = React.lazy(() => import( /* webpackChunkName: "Home" */ './components/pages/Home'));
const Posts = React.lazy(() => import( /* webpackChunkName: "Posts" */ './components/pages/Posts'));
const Albums = React.lazy(() => import( /* webpackChunkName: "Albums" */ './components/pages/Albums'));
const Users = React.lazy(() => import( /* webpackChunkName: "Users" */ './components/pages/user-todos/Users'));
const Todos = React.lazy(() => import( /* webpackChunkName: "Todos" */ './components/pages/user-todos/Todos'));

const Routes = () => {
    const { isError, message } = useSelector(state => state.dataReducer);

    return (
        <Suspense fallback={<div className="home">Loading....</div>}>
            <MessageContext.Provider value={{ message, isError }}>
                <Router>
                    <Sidebar />
                    {!isEmpty(message) && <Message />}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/posts" exact component={Posts} />
                        <Route path="/albums" exact component={Albums} />
                        <Route path="/user-todos/users" exact component={Users} />
                        <Route path="/user-todos/todos" exact component={Todos} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router >
            </MessageContext.Provider>
        </Suspense>
    )
}

export default Routes;