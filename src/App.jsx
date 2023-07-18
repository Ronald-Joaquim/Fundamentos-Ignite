import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";
export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Ronald Joaquim"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam saepe facere eos, aspernatur perferendis? "
      />

      <Post
        author="Mariana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam saepe facere eos, aspernatur perferendis? "
      />
    </div>
  );
}
