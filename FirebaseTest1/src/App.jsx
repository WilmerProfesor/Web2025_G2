import { useState, useEffect } from 'react'

import db from './Firebase/FirebaseConfig';
//import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import CardPet from './Components/CardPet/CardPet';

import './App.css'

function App() {
  // const [pets, setPets] = useState(null)
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getPets = async () => {

      // const q = query(collection(db, "mascotas"));  //, where("capital", "==", true)
      
      const q = query(collection(db, "mascotas"), where("especie", "==", "Perro"));
      const querySnapshot = await getDocs(q);
      const arrayPets= [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arrayPets.push({...doc.data(),id: doc.id})
      });
      setPets(arrayPets)
      console.log(arrayPets);
      // ------ CODIGO PARA CAGAR UN DOCUMENTO ------
      // const docRef = doc(db, "mascotas", "S4ZSTpEaEQIQfYZRQf27");
      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      //   setPets(docSnap.data())
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    }
    getPets();
  }, [])

  return (
    <main>
      <h1>Hola mundo</h1>
      {pets.length >0 ? pets.map((item)=>{
        return <CardPet pet={item} key={item.id} />
      }) : <h5>Cargando...</h5>}
    </main>
  )
}

export default App
