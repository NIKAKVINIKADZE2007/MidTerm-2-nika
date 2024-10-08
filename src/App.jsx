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
    console.log(info);
  }
  return (
    <>
      {info &&
        info.map((person) => (
          <div className='mb-[30px]'>
            <p>age: {person.dob.age}</p>
            <p>
              name {person.name.first} {person.name.second}
            </p>
            <p>username {person.login.username}</p>
            <p>city {person.location.city}</p>
            <p>country {person.location.country}</p>
            <p>zip {person.location.postcode}</p>
          </div>
        ))}
    </>
  );
}

export default App;
