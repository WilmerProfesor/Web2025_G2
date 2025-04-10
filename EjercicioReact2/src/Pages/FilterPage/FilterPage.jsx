import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'

import CustomCard from '../../components/CustomCard/CustomCard';

const FilterPage = () => {

  let {especie} = useParams()

  const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async() => {
        await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json => setData(json.results.filter((item) => item.species === especie)))        
        .catch(error => console.error('Error fetching data:', error));        
      }
      fetchData();
    }, [especie]);

  return (
    <>      
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
    </>
  )
}

export default FilterPage