import React from 'react';
import s from './MyButtons.module.sass'
import {addMessageActionCreator, updateAddMessageActionCreator} from "../../../redux/myMessagePageReducer";



const MyButtons = (props) => {

    let messageLink = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    let updateAddMessage = () => {
        let text = messageLink.current.value;
        props.dispatch(updateAddMessageActionCreator(text))
    };

    return (
            <div className={s.absolute_button}>
                <input onChange={updateAddMessage} ref={messageLink} className={s.add_message} type="text"/>
                <button onClick={addMessage} className={s.buttonscj}>go</button>

            </div>
            
    )
};
export default MyButtons
