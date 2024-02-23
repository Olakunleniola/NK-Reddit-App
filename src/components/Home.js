import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, isLoading, getSearchTerm, setSearchTerm } from "../features/posts/postSlice";
import { LoadingCard } from "./LoadingCard";
import { loadComments } from "../features/comments/commentsSlice";
import Posts from "../features/posts/Posts";

function Home() {
    const postIsLoading = useSelector(isLoading);
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts);
    const searchTerm = useSelector(getSearchTerm);
    const randomNum = Math.floor(Math.random() * 7 + 9);
    

    const handleShowComment = (target, id ,permalink) => {
        const com_div = document.querySelector(`#${id}`)
        if(com_div.style.display === 'none') {
            com_div.style.display = 'block';
            dispatch(loadComments(permalink)); 
            target.current.classList.add('selected');
        }else {
            com_div.style.display = 'none'
            target.current.classList.remove('selected');
        }
    }

    const handleGoBack = () => {
        dispatch(setSearchTerm(''))
    } 
   
    if (postIsLoading) {
        return (
            Array(randomNum).fill('a').map((itm, idx) => 
                <LoadingCard key={idx}/>
            )
        )
    }

    if(searchTerm) {
        const searchedPost = posts.filter(itm => itm.title.toLowerCase().includes(searchTerm.toLowerCase()))
        if (searchedPost.length !== 0) {
            return (
                <>
                    <Posts posts={searchedPost} showComments={handleShowComment} show={false} />
                    <button className="go-home" onClick={handleGoBack}>
                        <span className="material-symbols-outlined">home</span>
                        Go Home 
                     </button>
                </>
            )
        }
        else {
            return (
                <article className="card">
                    <div className="report">
                        <h2 className="report-header">No post Marching "{searchTerm}"</h2>
                        <button className="go-home" onClick={handleGoBack}>
                            <span className="material-symbols-outlined">home</span>
                            Go Home 
                         </button>
                    </div>
                </article>
            )
        }
    }
    
    return (
        <Posts 
            posts={posts}  
            showComments={handleShowComment}
            show={false}
        />
    ) 
}


export default Home


