import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ronald Joaquim"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam saepe facere eos, aspernatur perferendis? "
          />

          <Post
            author="Mariana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam saepe facere eos, aspernatur perferendis? "
          />
        </main>
      </div>
    </div>
  );
}
