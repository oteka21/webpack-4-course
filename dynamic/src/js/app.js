import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)
function App ({name}){
  const [ loaderList, setLoaderList] = useState([])

  function handleClick(){
    setLoaderList(data.loaders)
    import('./popup.js')
    .then(popup => popup.default('y leito'))
    .catch(err => {
      throw new Error(err)
    })
  }
  return <div>
    <ul>
      {
        loaderList.map(loader => <Loader key={loader.id} {...loader} />)
      }
    </ul>
    <button onClick={handleClick}>Mostrar lo aprendido hast el momento</button>
  </div>
}


export default App