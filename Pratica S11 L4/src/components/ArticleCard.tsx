import { Article } from "../article/article";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <div className="article-card">
      <img src={article.image_url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <small>{new Date(article.published_at).toLocaleDateString()}</small>
    </div>
  );
};

export default ArticleCard;
