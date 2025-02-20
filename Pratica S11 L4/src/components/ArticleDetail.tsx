import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../article/article";
import { Spinner } from "react-bootstrap";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!article)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <div>
      <h1 className="mt-5 mb-5">{article.title}</h1>
      <img src={article.image_url} alt={article.title} className="w-50" />
      <p>{article.summary}</p>
      <small>{new Date(article.published_at).toLocaleDateString()}</small>
    </div>
  );
};

export default ArticleDetail;
