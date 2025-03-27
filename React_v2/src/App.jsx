import React from 'react'
import './App.css'

import Header from './Components/Header/Header'
import CardPersonal from './Components/CardPersonal/CardPersonal'

const App = () => {

  const arrayObjetos=[
    {name: "Uno", img:"https://palmitospark.es/wp-content/uploads/2023/04/reptile-g431a1a603_1280-1024x682.jpg"},    
    {name: "Dos", img:"https://www.cali.gov.co/dagma/info/principal/media/pubInt/thumbs/thpub_700x400_176508.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "ksdhfkdskfh", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
    {name: "Tres", img:"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"},    
  ]

  return (
    <>
      <Header />
      <main>
        <CardPersonal name={"Uno"} img={"https://www.cali.gov.co/dagma/info/principal/media/pubInt/thumbs/thpub_700x400_176508.jpg"} />
        <CardPersonal name={"Dos"} img={"https://static.nationalgeographicla.com/files/styles/image_3200/public/green-iguana.jpg?w=1600"}/>
        <CardPersonal name={"Tres"} img={"https://palmitospark.es/wp-content/uploads/2023/04/reptile-g431a1a603_1280-1024x682.jpg"}/>        

          {arrayObjetos.map((item, id)=>
            <CardPersonal key={id} name={item.name} img={item.img} />
          )}


      </main>
    </>
  )
}

export default App