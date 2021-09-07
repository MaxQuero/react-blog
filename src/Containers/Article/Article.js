import "./Article.scss";
import { useLocation } from 'react-router-dom';


function Article() {
    const location = useLocation();

    return (
        <div className="article">
            <p className="article__title">{location.state.title}</p>
            <p className="article__content">{location.state.content}</p>
        </div>
    );
}

export default Article;