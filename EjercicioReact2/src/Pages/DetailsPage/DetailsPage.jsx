import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import CustomCard from '../../components/CustomCard/CustomCard';

const DetailsPage = () => {

  const [data, setData] = useState({});
  
  let {id} = useParams()
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/'+id)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));    
  },[]);


  return (
    <CustomCard
                key={data.id}
                user={data}              
    />   
  )
}

export default DetailsPage