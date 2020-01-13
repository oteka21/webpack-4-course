import '../css/index.css'
import search from './search'
import render from './render'
const id = prompt('Quien es este pokemon')

search(id)
.then(data => {
  render(data)
})
.catch(() =>{
  console.log('ups surgio un error!')
})