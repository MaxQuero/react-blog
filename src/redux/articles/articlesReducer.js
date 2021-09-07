const INITIAL_STATE = {articles: []};

function ArticlesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "GET_ALL_ARTICLES":
            return {state, articles: action.payload}
        case "ADD_ARTICLE":
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                ...state,
                articles: newArr
            };

    }


    return state;
}

export default ArticlesReducer;

export const getArticles = () => dispatch => {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "GET_ALL_ARTICLES",
                payload: data
            })
        })
}