import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";
import { Table } from '../../components/common';

const tdHeads = {
    "Name": {
        align: "center",
        width: "80px",
        field: "name"
    },
    Email: { align: "left", field: "email", width: "180px" },
    Phone: { align: "left", field: "phone" }
};

const Users = () => {

    const { users } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch])

    return (
        <>
            <div className="home">
                <h1>Users {users.length}</h1>
            </div>
            <div className="home">
                <Table tdHeads={tdHeads} data={users.slice(0, 10)} />
            </div>
        </>
    );
};

export default Users;