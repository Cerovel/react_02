const initialState = {
    news_page: [
        {
            head_name: 'Здорова',
            user_name: 'Василий',
            user_time: '14:33',
            user_ava: 'https://docusaurus.io/img/users/accord-project.png',
            picture_main: 'https://ichef.bbci.co.uk/news/640/media/images/80557000/jpg/_80557927_80557926.jpg',
            picture_desc: 'run forest run',
            like: 1,
            comment: 3
        },
        {
            head_name: 'Приветики',
            user_name: 'Ivan',
            user_time: '14:33',
            user_ava: 'https://docusaurus.io/img/users/accord-project.png',
            picture_main: 'http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg',
            picture_desc: 'run forest run',
            like: 1,
            comment: 3
        },
    ],
};


const newsPageReducer = (state = initialState,  ) => {
    return state
};

export default newsPageReducer