import React, { useState } from "react";

/*Creo una variabile contenente un array di Post*/
const startPost = [
  { id: 1, title: "E' più corretto dire 'carcola' o 'calcola'?" },
  { id: 2, title: "Che tipo di linguaggio sei? Fai il nostro test subito!!!" },
  { id: 3, title: "Display Flex vs Display Grid: Ultimo atto" },
  {
    id: 4,
    title: "Internet Explorer festeggia per la caduta del muro di Berlino",
  },
  { id: 5, title: "Ora parlo io: guarda l'ultimo video" },
];

const MyMain = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(startPost);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPost.trim()) return;

    const post = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: newPost,
    };

    setPosts([...posts, post]);
    setNewPost(""); // reset input
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <ul>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="inputPost"
            type="text"
            placeholder="Genera nuovo post"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button type="submit" className="btnInput">Genera Post</button>
        </form>
                {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <i class="fa-solid fa-trash iconDel"onClick={() => handleDelete(post.id)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMain;
