 import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('/api/getSchools')
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <> 
    <h1 style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>Schools List</h1> 

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center' }}>

       
      {schools.map(school => (
        <div key={school.id} style={{ border: '1px solid #ccc', padding: 10, width: 250 }}>
          <img src={`/schoolImages/${school.image}`} alt={school.name} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
          <h3>{school.name}</h3>
          <p>{school.address}, {school.city}</p>
        </div>
      ))}
    </div>

    </>
  );
}
