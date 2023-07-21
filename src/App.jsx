import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKIBbsr2iQbsvzHV5cmUwq_SG8x7BUe88gg&usqp=CAU",
      name: "Elon Musk",
      role: "CEO @Tesla, @SpaceX",
    },
    content: [
      { type: "paragraph", content: "Hi Ronald 👋" },
      {
        type: "paragraph",
        content:
          "This project is fire 🔥, congrats for Feed devExpress 🚀",
      },
      {
        type: "paragraph",
        content:
          "Só não tenta roubar o lugar da minha rede social 😆",
      },
    ],
    publishedAt: new Date("2023-07-22 14:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ronald-Joaquim.png",
      name: "Ronald Joaquim",
      role: "web Develop",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no Ignite. O nome do projeto é Feed devExpress 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-20 22:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
