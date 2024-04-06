import './App.css';

import React from 'react';
import {useSearchParams} from 'react-router-dom';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({myParam: 'bobby_hadz'});
  };

  const handleChange = event => {
    setSearchParams({query: event.target.value});
  };

  console.log(searchParams.get('myParam'));
  console.log(searchParams.get('query'));

  return (
    <div>
      <button onClick={handleClick}>Update Query params</button>

      <input id="search" onChange={handleChange} />
    </div>
  );
}
