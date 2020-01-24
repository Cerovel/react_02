import React from 'react';
import s from './Addfile.module.sass'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addPostActionCreator, ChangePostActionCreator} from "../../../redux/myPageReducer";



const Addfile = (props) => {
    let textLink = React.createRef();

    let addPost = () => {


        props.dispatch(addPostActionCreator( ))

    };

    let ChangePost = () => {

        let text = textLink.current.value;

        props.dispatch(ChangePostActionCreator(text))
    };


    return (
        <div className={s.shadow}>
            <div className={s.addfilegrid}>
                <div className={s.user_logo}>

                </div>
                <div className={s.user_text}>

                    <textarea
                        onChange={ChangePost}
                        value={props.newPostText}
                        ref={textLink}
                        autoFocus='autoFocus' className={s.news_textarea}
                        name="texx" id="" cols="30" rows="10"
                        placeholder={props.placeholder}
                    />

                </div>

            </div>

            <div className={s.add_file_footer}>
                <FontAwesomeIcon className={s.camera_icon} icon='camera'/>
                <FontAwesomeIcon className={s.camera_icon} icon='video'/>

                <div className={s.push_button}>
                    <button onClick={addPost}   className={s.button7}>Опубликовать нах</button>
                </div>

            </div>
        </div>
    )
};
export default Addfile;