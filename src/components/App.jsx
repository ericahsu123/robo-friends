import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './styles.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setRobots(response.data);
    };
    fetchData();
  }, []);

  const handleQuery = (string) => {
    setQuery(string);
  };

  // console.log('query', query);
  // console.log('robots', robots);

  const searchRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="ui container center aligned">
      <SearchBox query={query} handleQuery={handleQuery} />
      <CardList robots={searchRobots} />
    </div>
  );
};

export default App;
