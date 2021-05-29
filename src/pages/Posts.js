import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from '../actions';
import { H_LABELS } from '../constants'
import { Button } from './../components/common';
import isEmpty from 'lodash/isEmpty'

const Posts = () => {
    const { posts: globalPosts } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        getPosts(dispatch).then(response => {
            setPosts(response.posts.slice(0, 10))
            setLoading(false);
            setHasMore(response.posts.length > 10)
        });
    }, [dispatch])

    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setLoading(true)
        if (!isEmpty(globalPosts) && globalPosts.length !== posts.length) {
            setTimeout(() => {
                setPosts(prevPosts => {
                    return [...prevPosts, ...globalPosts.slice(prevPosts.length, pageNumber * 10)]
                })
                setLoading(false)
            }, 500)
            setHasMore(true)
        } else {
            setHasMore(false)
            setLoading(false)
        }
    }, [pageNumber])

    return (<>
        <div className="posts-main-div">
            <h1>Posts</h1>
        </div>
        <div className="posts-add-post" style={{ width: 250 }} >
            <Button onClick={() => addPost(globalPosts, dispatch)}>{H_LABELS.ADD_POST}</Button>
        </div>
        <div className="post-list data-table">
            <h2>Title</h2>
            {!isEmpty(posts) && posts.map((post, index) => {
                if (posts.length === index + 1) {
                    return <li ref={lastPostElementRef} key={post.title}>{post.title}</li>
                } else {
                    return <li key={post.title}>{post.title}</li>
                }
            })}
            <div>{loading && 'Loading...'}</div>
        </div>
    </>
    );
};

export default Posts;
