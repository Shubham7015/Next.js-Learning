"use client";
import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("");
  const [message,setMessage] = useState("") ;
  const handleSubmit = async(e) => {
    e.preventDefault() ; 

    const res = await fetch("/api/todos",{
      method:"POST",
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        title,
        completed:false 
      })
    }) ;

    const data = await res.json(); 
    if(data.success){
      setMessage("Todo Created:" + data.todo.title) ;
    }
    else{
      setMessage("failed to create todo") ; 
    }

  };
  return (
    
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {
        message && <p>{message}</p>
      }
    </div>
  );
}
