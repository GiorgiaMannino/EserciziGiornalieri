import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../article/article";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="mt-5 mb-4">Spaceflight News</h1>
      <div className="articles">
        {articles.map((article) => (
          <Link key={article.id} to={`/article/${article.id}`}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
