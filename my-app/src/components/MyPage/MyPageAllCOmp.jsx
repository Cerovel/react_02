import React from 'react';
import PhotoUsers from "./PhotoUsers/PhotoUsers";
import PersonCharacters from "./PersonCharacters/PersonCharacters";
import Friends from "./Friends_DIR/Friends";
import s from './MyPageAllCOmp.module.sass'
import FriendsOnline from "./FriendsOnline_DIR/FriendsOnline";
import Addfile from "../Reused_components/AddFile/Addfile";
import Post from "../Reused_components/Post/Post";


const MyPageAllCOmp = (props) => {
      let MyPagePost = props.state_mypage.page_post.map((k) => {
        return (
            <Post head={k.head} user={k.user} time={k.time} ava={k.ava} picture={k.picture} desc={k.desc} like={k.like}
                  comment={k.comment}/>
        )
    });



    return (
        <div className='NOT_CHANGE'>
            <div className={s.wrapper}>
                <div className={s.gridmypage}>
                    <div className={s.photo}>
                        <PhotoUsers/>
                    </div>
                    <div className={s.person}>
                        <PersonCharacters/>
                    </div>
                    <div className={s.frind}>
                        <Friends/>
                    </div>
                    <div className={s.frindon}>
                        <FriendsOnline/>
                    </div>

                    {/*добавил после окончания вертски*/}
                    <div className={s.fileadd_mypage}>

                        <Addfile placeholder='Добавляю на стену'
                                 dispatch={props.dispatch}


                        />
                    </div>
                    {/*добавил после окончания вертски*/}

                </div>
            </div>

            <div className={s.post_wrapper}>
                <div>
                    {/*dont delete*/}
                </div>
                <div className={s.post_grid}>
                    {MyPagePost}
                </div>
            </div>
        </div>
    )
};


export default MyPageAllCOmp;