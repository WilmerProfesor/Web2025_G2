import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CustomCard from '../../components/CustomCard/CustomCard';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (

    <main>
      {
        data.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <CustomCard
              key={item.id}
              user={item}
            />
          </Link>

        ))
      }
    </main>


  )
}

export default HomePage