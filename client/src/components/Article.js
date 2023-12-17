import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleContent from './ArticleContent';
import Articles from './Articles'
import PageNotFound from './PageNotFound';

const Article = () => {
    const { name } = useParams();
    const article = ArticleContent.find((article) => article.name === name);
    if (!article) return <PageNotFound />;
    const otherArticles = ArticleContent.filter(article => article.name !== name);
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                {article.title}
            </h1>
            {
                article.content.map((para, index) => (
                    <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{para}</p>
                ))
            }
            <h1 className='sm:text-2xl text-xl font-bold  mt-20 my-4 text-gray-900'>Other Articles</h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles}/>
            </div>
        </>

    );
};

export default Article;