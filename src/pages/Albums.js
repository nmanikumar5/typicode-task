import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from '../actions';
import { Table } from './../components/common';
import isEmpty from 'lodash/isEmpty';

const tdHeads = {
    "Title": {
        align: "left",
        width: "80px",
        field: "title"
    }
};

const Albums = () => {
    const { albums } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getAlbums(dispatch);
    }, [dispatch])

    return (<>
        <div className="home">
            <h1>Albums</h1>
        </div>
        {!isEmpty(albums) && (
            <div className="home data-table">
                <Table tdHeads={tdHeads} data={albums} />
            </div>)}
    </>
    );
};

export default Albums;
