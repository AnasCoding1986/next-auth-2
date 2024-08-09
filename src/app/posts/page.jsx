import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/posts`)
    const data = await res.json()
    return data
}

const postsPage = async () => {

    const postData = await getPosts();
    console.log(postData);


    return (
        <div>
            <h3>This is posts page</h3>
            <div className='grid grid-cols-3 gap-2'>
                {
                    postData?.slice(0,10)?.map((post) => (
                        <div className='border-2 rounded-md border-black p-3' key={post.id}>
                            <h2>Title: {post.title}</h2>
                            <h2>Title: {post.body}</h2>
                            <button className='bg-sky-600 p-3 rounded-md'><Link href={`/posts/${post.id}`}>See Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default postsPage;