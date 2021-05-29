import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../../core/api";
import { Table } from '../../common';
import isEmpty from 'lodash/isEmpty'

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
            {!isEmpty(todos) &&
                (<div className="home data-table">
                    <Table tdHeads={tdHeads} data={todos} />
                </div>)}
        </>
    );
};


export default Todos;