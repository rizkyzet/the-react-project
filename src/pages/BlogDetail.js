import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        
        const getArticle = async () => {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            
            if (!request.ok) {
                return setNotFound(true);
            }
            
            
            const response = await request.json();
            document.title = response.title;
            setArticle(response);
            setLoading(false)
        }
        getArticle();
    }, [params]);



    if (notFound) {
        return <h1>Artikel tidak ditemukan</h1>
    }

    return (
        <section className="section">
            {loading && <i>Loading article...</i>}
            {!loading && (
                <article className="article">
                    <h4 className="article-title">{article.title}</h4>
                    <time className="article-time">{new Date(article.publishedAt).toLocaleString()}</time>

                    <img className="article-image" src={article.imageUrl} alt={article.title} />

                    <p className="article-summary">{article.summary}</p>
                    <p className="article-source">Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
                </article>
            )}

            {/* {
                loading ? (<i>Loading article...</i>) : (
                    <article>
                    <h4>{article.title}</h4>
                    <time>{new Date(article.publishedAt).toLocaleString()}</time>
                   
                    <img src={article.imageUrl} alt={article.title} />
                   
                    <p>{article.summary}</p>
                    <p>Source: <a href={article.url} target="_blank">{article.newsSite}</a></p>
                </article>
                )
            } */}
        </section>
    )
}