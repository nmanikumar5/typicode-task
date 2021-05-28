import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../actions";
import { Table } from '../../components/common';

const tdHeads = {
    "Title": {
        align: "left",
        width: "80px",
        field: "title"
    }
};

const Todos = () => {

    const { todos } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos(dispatch);
    }, [dispatch])

    return (
        <>
            <div className="home">
                <h1>Todos</h1>
            </div>
            <div className="home">
                <Table tdHeads={tdHeads} data={todos.slice(0, 10)} />
            </div>
        </>
    );
};


export default Todos;