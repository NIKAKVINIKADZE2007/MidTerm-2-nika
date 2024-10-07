import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then((data) => {
      setInfo(data.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loading</p>;
  } else {
  }
  return <>{info && info.map((person) => console.log(person.gender))}</>;
}

export default App;
