import { Header } from "./Header"
import { Outlet } from "react-router"
import SubReddits from "../features/subreddit/Subreddits"
import { TopCircleIcon } from "./SvgIcons"

export function Root () {
    return(
        <>
            <div className="content-overlay"></div>
            <a href="#top" className="go-top"><TopCircleIcon/></a>
            <Header />
            <main className='content-area'>
                <Outlet />
            </main>
            <aside className='sub-head'>
                <SubReddits />
            </aside>
        </>
    )
}