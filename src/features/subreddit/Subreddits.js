import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { loadSubreddits, selectAllSubreddits } from './subredditSlice';
import { loadPosts } from '../posts/postSlice';
import { Subreddit } from '../../components/Subreddit';
import { useNavigate } from 'react-router';



export default function SubReddits () {
    const dispatch = useDispatch()
    const subreddits = useSelector(selectAllSubreddits);
    const [active, setActive] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(loadSubreddits())
    }, [dispatch])
    
    
    useEffect(() => {
        if (subreddits) {
            const elm = document.getElementById('active')
            if(elm){
                elm.classList.add('but-card-active');
                setActive(elm)
                dispatch(loadPosts('/r/pics/'));
            }
        }
    }, [subreddits,dispatch])
    
    
    function handleClick (target, url) {
        if (active) {
            active.classList.remove('but-card-active');
          }
        target.classList.add('but-card-active');
        setActive(target)
        dispatch(loadPosts(url));
        navigate("/")
        document.querySelector(".sub-head").classList.remove("toggle-menu")
        document.querySelector(".content-overlay").classList.remove("show")
    }

    return (
        <>
            <h3>Subreddits</h3>
            <Subreddit  subreddits={subreddits} handleClick={handleClick} />
        </>
    )
}

