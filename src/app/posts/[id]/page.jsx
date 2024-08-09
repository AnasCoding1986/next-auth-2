import React from 'react';

const getSPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export async function generateMetadata({ params}) {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
   
    return {
      title: product.title,
      description: product.body
    }
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