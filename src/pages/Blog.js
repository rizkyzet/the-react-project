import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        document.title = "Blog";

        const getArticles = async () => {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        };

        getArticles()
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-description">Berikut ini adalah tulisan-tulisanku (tapi boong)</p>

            {loading && (<i>Loading articles ...</i>)}
            {!loading && (
                <div className="articles">
                    {articles.map((article) => {
                        return (
                            <article className="article" key={article.id}>
                                <h4 className="article-title">
                                    <Link to={`/blog/${article.id}`}>
                                    {article.title}
                                    </Link>
                                </h4>
                                <time className="article-time">
                                    {new Date(article.publishedAt).toLocaleString()}
                                </time>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )

}