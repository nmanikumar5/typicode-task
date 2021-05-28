import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from '../actions';
import { H_LABELS } from '../constants'
import { Button, Table } from './../components/common';

const tdHeads = {
    "Title": {
        align: "left",
        width: "80px",
        field: "title"
    }
};

const Posts = () => {
    const { posts } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getPosts(dispatch);
    }, [dispatch])

    return (<>
        <div className="posts">
            <h1>Posts</h1>
        </div>
        <div className="posts-add-post" style={{ width: 250 }} >
            <Button onClick={() => addPost(posts, dispatch)}>{H_LABELS.ADD_POST}</Button>
        </div>
        <div className="posts">
            <Table tdHeads={tdHeads} data={posts.slice(0, 10)} />
        </div>
    </>
    );
};

export default Posts;