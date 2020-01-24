import React from 'react';
import s from './Musora.module.sass'
import FileAdd from "./FileAdd/FileAdd";
import UserAnswer from "./UserAnswer/UserAnswer";


const Musora = (props) => {

    let userAnswerMap = props.Musora_page.musora_page.map(function (l) {
        return (
            <UserAnswer
                user_image={l.user_image}
                user_name={l.user_name}
                time_warning={l.time_warning}
                where_they={l.where_they}
                car_model={l.car_model}
                comment_musor={l.comment_musor}
                photo_musor_page={l.photo_musor_page}
            />
        )
    });



     return(
        <div className={s.musora}>

            <div className={s.fileadd}>
                <FileAdd  dispatch={props.dispatch}

                />
            </div>
            <div className={s.user_answer}>
                {userAnswerMap}
            </div>
        </div>
    )
};
export default Musora;