import React, {useEffect} from 'react';
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import "./Articles.scss";
import Contact from "../../Containers/Contact/Contact";
import {useSelector, useDispatch} from "react-redux";
import {getArticles} from "../../redux/articles/articlesReducer";
import {v4 as uuidv4} from "uuid";
import { useHistory } from "react-router-dom";


function Articles() {
    const articles = useSelector(state => state.articlesReducer.articles);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }
    }, []);

    const goToDetails = (post) => {

        const news =  post.title.replace(/\s+/g, '-').trim();
        history.push(
            `/article/${post.title.replace(/\s+/g, '-').trim()}`,
            {
                title: post.title,
                content: post.content
            });
    }

    return (
        <>
            <Button className="articles__add" rounded={true}>+</Button>
            <div className="articles">
                { articles && articles.map(post => {
                    return <Card onClick={(e) => goToDetails(post)} className="articles__post" key={uuidv4()} title={post.title} content={post.content}></Card>
                 })
                }
            </div>
        </>
    );
}

export default Articles;