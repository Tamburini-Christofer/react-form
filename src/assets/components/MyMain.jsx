//todo Importo React e lo useState per gestire lo stato dei dati
import React, { useState } from "react";

//todo Creo una variabile contenente un array di post già presenti in pagina.

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

//todo Creo un componente MyMain che aggiunge nuovi post ed elimina quelli esistenti
const MyMain = () => {
//todo Salvo lo stato dell'input
  const [newPost, setNewPost] = useState("");
//todo Stato che contiene tutti i post
  const [posts, setPosts] = useState(startPost);

//todo Creo una funzione
  const handleSubmit = (e) => {
//todo Prevengo il refresh
    e.preventDefault();

//todo Variabile che contiene un oggetto con un nuovo id e titolo. Sarà il nuovo post
    const post = {
//todo Se ci sono post prendo l’ultimo id e aggiungo +1
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: newPost,
    };

//todo Aggiorno l'array
    setPosts([...posts, post]);
//todo Riporto l'array ad una stringa vuota
    setNewPost("");
  };

//todo Creo una funzione che riceve l'ìd del post e lo filtra
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

//todo Faccio tornare il componente
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
            <i
              class="fa-solid fa-trash iconDel"
              onClick={() => handleDelete(post.id)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMain;
