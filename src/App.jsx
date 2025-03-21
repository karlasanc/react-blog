import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost"; // Make sure this import is correct
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";

function App() {
  // import actions from easy peasy
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog" />

      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoading={isLoading}
              fetchError={fetchError}
            />
          }
        />

        <Route
          path="/new-post"
          element={<NewPost />}
        />
        <Route
          path="/edit/:id"
          element={<EditPost />}
        />
        <Route
          path="/post/:id"
          element={<PostPage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Missing />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
