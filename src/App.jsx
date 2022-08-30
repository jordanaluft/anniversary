import { useState } from 'react'
import List from "./components/List"
import Data from "./components/Data"

function App() {
  const dataElements = Data.map (data => {
    return <List 
              key = {data.id}
              {...data}
              />
  })

  const [people, setPeople] = useState(dataElements)
  // console.log(people[0].props.name)
 
  function handleClick() {
    setPeople([])
  }

  return (
    <div>
      <section className='container'>
        <h2 className='title'>{people.length} Birthdays today</h2> 
        <section>
          {dataElements}
        </section>   
        <button className='button' onClick={() => setPeople([])}>Clear All</button>    
      </section>
    </div>
  )
}

export default App
