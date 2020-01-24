import React from 'react';
import s from './NewsPage.module.css'
import UserSettings from "./UserSettings/UserSettings";
import Addfile from "../Reused_components/AddFile/Addfile";
import Post from "../Reused_components/Post/Post";



const NewsPage = (props) => {



    let NewsPost = props.state_news_page.news_page.map((n)=>{
        return (
            < Post head={n.head_name}
                   user={n.user_name}
                   time={n.user_time}
                   ava={n.user_ava}
                   picture={n.picture_main}
                   desc={n.picture_desc}
                   likes={n.like}
                   comments={n.comment}
            />
        )
    });


    return (
        <div className='wrapper'>
            <div className={s.newareagrid}>
                <div className={s.addfile}> <Addfile  placeholder={'your news'}/> </div>
                <div className={s.user_settings}><UserSettings/></div>
                <div className={s.news}> {NewsPost}</div>
            </div>
        </div>
    )
};

export default NewsPage;