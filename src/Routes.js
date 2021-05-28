import React from 'react';
import Sidebar from "./components/Sidebar";
import PageNotFound from "./components/PageNotFound";
import Message from './components/Message'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Users, Todos } from "./pages/user-todos";
import { Albums, Posts, Home } from "./pages";
import { useSelector } from "react-redux";
import MessageContext from './context/MessageContext';
import isEmpty from 'lodash/isEmpty';

const Routes = () => {
    const { isError, message } = useSelector(state => state.dataReducer);

    return (
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
    )
}

export default Routes;