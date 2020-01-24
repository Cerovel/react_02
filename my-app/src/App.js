import React from 'react';
import './App.sass';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faArrowLeft, faArrowRight,
    faBaby, faCamera, faCheck, faCommentAlt,
    faEnvelope,
    faExclamation, faExclamationCircle, faHeart,
    faHome,
    faMapMarkerAlt, faMedal, faMoneyBill,
    faNewspaper, faRubleSign, faSleigh, faSlidersH,
    faUser, faVideo,
} from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter, Route} from "react-router-dom";
import MyPageAllCOmp from "./components/MyPage/MyPageAllCOmp";
import NewsPage from "./components/_NewsPage/NewsPage";
import Navbar from "./components/NavBar/Navbar";
import Musora from "./components/Musora/Musora";
import SalePage from "./components/SalePage/SalePage";
import Mymessage from "./components/Mymessage/Mymessage";
import Conversation from "./components/Сonversation/Conversation";


library.add(fab, faHome, faNewspaper, faEnvelope,
    faExclamation, faMapMarkerAlt, faUser, faSlidersH, faBaby, faMedal,
    faHeart, faCommentAlt, faExclamationCircle, faSleigh, faCamera, faVideo,
    faMoneyBill, faArrowLeft, faArrowRight, faRubleSign,faCheck);


let App = (props) => {
    debugger
         return (
        <BrowserRouter>
            <div className="navbar_position">
                <div className='item'>
                    < Navbar/>
                </div>
                {/*Компоненты главной страницы*/}
                <Route path='/mypage'
                       render={ () =>
                           <MyPageAllCOmp
                               state_mypage={props.state.My_page}
                               dispatch={props.dispatch}
                             />
                       }
                />

                {/*Компоненты главной страницы*/}

                {/*компоненты новостей*/}
                <Route path='/news' render={() =>
                    <NewsPage state_news_page={props.state.News_page}

                    />}/>
                {/*компоненты новостей*/}

                {/*компоненты блока сообщений*/}
                <Route path='/message'
                       render={() => <Mymessage state={props.state} dispatch={props.dispatch}    />}/>
                {/*компоненты блока сообщений*/}

                {/*components block for gde stoyat*/}
                <Route path='/gdesuki'
                       render={() => <Musora Musora_page={props.state.Musora_page} dispatch={props.dispatch}/>}/>


                {/*components block for gde stoyat*/}


                <Route path='/sale' render={() => <SalePage state_sale_page={props.state.Sale_page}/>}/>

            </div>

        </BrowserRouter>

    )
};

export default App;
















