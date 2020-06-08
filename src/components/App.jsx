import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
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
      <div style={{ marginTop: '120px' }}>
        {robots.length === 0 ? <Loading /> : <CardList robots={searchRobots} />}
      </div>
    </div>
  );
};

export default App;
