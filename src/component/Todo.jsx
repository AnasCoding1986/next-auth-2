"use client";
import React, { useState } from 'react';

const Todo = () => {

    const [search,setSearch] = useState("");
    const [err,setErr] = useState("");
    const [todo,setTodo] = useState([]);

    const handler = (e) => {
        setSearch(e.target.value);       
    }

    const loadData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${search}`);
            const data = await res.json();
            setTodo(data);
            setErr("");
            return data;
        } catch (error) {
            setErr("No data found");
            setTodo([]); // Clear previous todos on error
            
        }
    }
    
    const load = () => {
        loadData()
    }

    return (
        <div>
            <div>
                <input onChange={handler} placeholder='Text' className='bg-amber-300 p-3 border-2 border-black' type="text"/>
                <button onClick={load} className='bg-amber-300 p-3 border-2'>Search</button>
                {
                    todo.length > 0 && !err && todo?.map((sTodo) => <div key={sTodo.id}>
                        <h3>Title: {sTodo.title}</h3>
                        <h3>Title: {sTodo.completed}</h3>
                    </div>)
                }
                {
                    err && <h6>No data found</h6>
                }
            </div>
        </div>
    );
};

export default Todo;