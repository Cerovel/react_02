import React from 'react';
import s from './Mymessage.module.sass'
import MyFriends from "./MyFriends/MyFriends";
import MyDialogsPartner from "./MyDialogsPartner/MyDialogsPartner";
import MyButtons from "./Mybuttons/MyButtons";




const Mymessage = (props) => {

    let Elements = props.state.MyMessagePage.my_message.map((d) => {
        return (
            <MyDialogsPartner name={d.user_name} time={d.time_add}/>
        )
    });

    return (
        <div className={s.message_grid}>
            <div className={s.dialog}>
                {Elements}
            </div>
            <div className={s.myfriends}>
                <MyFriends/>
            </div>

            <MyButtons  dispatch={props.dispatch}/>
        </div>
    )
};
export default Mymessage