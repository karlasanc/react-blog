import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // Post Data Init State: Empty
  const [search, setSearch] = useState(""); // Search Init State
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");

  // Fetch data using custom hook
  useEffect(() => {
    setPosts(data);
  }, [data]);

  // Search Posts Function
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse()); // shows the newest at the top
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        isLoading,
        fetchError,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
