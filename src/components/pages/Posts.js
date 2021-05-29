import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from '../../core/api';
import { H_LABELS } from '../../core/constants'
import { Button } from '../common';
import isEmpty from 'lodash/isEmpty'

const Posts = () => {
    const { posts: globalPosts } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        getPosts(dispatch).then(({ posts }) => {
            setPosts(posts.slice(0, 10))
            setLoading(false);
            setHasMore(posts.length > 10)
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
                setPosts(prevPosts => [...prevPosts, ...globalPosts.slice(prevPosts.length, pageNumber * 10)])
                setLoading(false)
            }, 500)
            setHasMore(true)
        } else {
            setHasMore(false)
            setLoading(false)
        }
    }, [pageNumber])


    /* Below is the code, 
       to send the request when page changes for lazy loading
    */
    // useEffect(() => {
    //     setLoading(true)
    //     let cancel
    //     axios({
    //         method: 'GET',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //         params: { _page: pageNumber, _limit: 10 },
    //         cancelToken: new axios.CancelToken(c => cancel = c)
    //     }).then(res => {
    //         setPosts(prevPosts => {
    //             return [...new Set([...prevPosts, ...res.data])]
    //         })
    //         setHasMore(res.data.length > 0)
    //         setLoading(false)
    //     }).catch(e => {
    //         if (axios.isCancel(e)) return
    //     })
    //     return () => cancel()
    // }, [pageNumber])

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
                return ((posts.length === index + 1) ?
                    <li ref={lastPostElementRef} key={post.title}>{post.title}</li> :
                    <li key={post.title}>{post.title}</li>)
            })}
            <div>{loading && 'Loading...'}</div>
        </div>
    </>
    );
};

export default Posts;
