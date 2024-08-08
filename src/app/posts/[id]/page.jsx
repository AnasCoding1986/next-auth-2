import React from 'react';

const getSPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const page = async ({params}) => {

    const {id,title,body} = await getSPosts(params.id);
    console.log(id,title,body);
    
    console.log(params.id);
    
    return (
        <div>
            <h3>Posts Details</h3>
            <h3>{title}</h3>
            <h3>{body}</h3>
        </div>
    );
};

export default page;