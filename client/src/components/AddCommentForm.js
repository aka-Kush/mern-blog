import React, { useState } from 'react'

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: 'post',
            body: JSON.stringify({ username, comment: commentText}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

  return (
      <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
          <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a comment</h3>
          <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name:</label>
          <input value={username} onChange={(event) => setUsername(event.target.value)} name='name' type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
          <label htmlFor="comment" className='block text-gray-700 text-sm font-bold mb-2'>Comment:</label>
          <textarea value={commentText} onChange={(event) => setCommentText(event.target.value)} name="comment" cols="50" rows="4" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <button onClick={() => addComments()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add comment</button>
    </form>
  )
}

export default AddCommentForm