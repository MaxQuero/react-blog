import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import "./AddArticle.scss";
import Button from "../../Components/Button/Button";

function AddArticle() {
    const emptyArticle = { title: "", content: "" };
    const [article, setArticle] = useState(emptyArticle);
    const dispatch = useDispatch();
    let history = useHistory();


    const addArticle = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_ARTICLE",
            payload: article
        });

        setArticle(emptyArticle);
        history.push("/");
    }

    return (
        <div className="add-article" onSubmit={addArticle}>
            <form className="add-article__form">
                <div className="form__item">
                    <label htmlFor="title">Titre de l'article</label>
                    <input name="title" value={article.title} onChange={e => setArticle({...article, title: e.target.value })} type="text"/>
                </div>
                <div className="form__item">
                    <label htmlFor="content">Contenu de l'article</label>
                    <textarea name="content" value={article.content} onChange={e => setArticle({...article, content: e.target.value })} type="text"/>
                </div>
                <button type="submit" className="add-article__submit">Ajouter l'article</button>
            </form>
        </div>
    );
}

export default AddArticle;