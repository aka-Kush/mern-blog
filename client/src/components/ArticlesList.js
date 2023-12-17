import React from 'react'
import ArticleContent from './ArticleContent';
import Articles from './Articles';

const ArticlesList = () => {
    return (
      <>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Article List</h1>
    <div className="container py-4 mx-auto">
              <div className="flex flex-wrap -m-4">
                    <Articles articles={ArticleContent} />
              </div>
    </div></>
  )
}

export default ArticlesList