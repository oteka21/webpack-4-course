import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)
function App ({name}){
  const [ loaderList, setLoaderList] = useState([])
  return <div>
    <ul>
      {
        loaderList.map(loader => <Loader key={loader.id} {...loader} />)
      }
    </ul>
    <button onClick={() => setLoaderList(data.loaders)}>Mostrar lo aprendido hast el momento</button>
  </div>
}


export default App