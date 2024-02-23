import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadComments } from "../features/comments/commentsSlice";
import { getPostByTitle } from "../features/posts/postSlice";
import Posts from "../features/posts/Posts";
import { LoadingCard } from "./LoadingCard";
import { Link } from "react-router-dom";

export function PostDetail () {
    const dispatch = useDispatch();
    const {title} = useParams();
    // get post by the title parameter
    const post = useSelector(state => getPostByTitle(state, title));
    // Handle show comments
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

    return (
        post.length > 0 ?
            <Posts posts={post} showComments={handleShowComment} show={true} />
         : (
            <>
                <LoadingCard/>
                <Link to="/" className="go-home">
                    <svg viewBox="0 0 24 24" version="1.1" fill="currentColor" className="go-home-svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>back_fill</title>
                                <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Arrow" transform="translate(-242.000000, -48.000000)">
                                        <g id="back_fill" transform="translate(242.000000, 48.000000)">
                                            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"></path>
                                            <path d="M2.61422,5.42597 C2.8464,4.86546 3.39335,4.5 4.00004,4.5 L13.9999979,4.5 C18.1422,4.5 21.4999979,7.85786 21.4999979,12 C21.4999979,16.1421 18.1422,19.5 13.9999979,19.5 L5.00004,19.5 C4.17162,19.5 3.50004,18.8284 3.50004,18 C3.50004,17.1716 4.17162,16.5 5.00004,16.5 L13.9999979,16.5 C16.4853,16.5 18.4999979,14.4853 18.4999979,12 C18.4999979,9.51472 16.4853,7.5 13.9999979,7.5 L7.62136,7.5 L8.5607,8.43934 C9.14649,9.02513 9.14649,9.97487 8.5607,10.5607 C7.97492,11.1464 7.02517,11.1464 6.43938,10.5607 L2.93938,7.06066 C2.51039,6.63166 2.38205,5.98649 2.61422,5.42597 Z" id="路径" fill="currentColor"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                    </svg>
                    Back
                </Link>
            </>
         ) 
    )
}