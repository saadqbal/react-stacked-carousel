import React, {StyleSheet} from 'react'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';


const App = () => {

  return (
    <div>
      <h1>THis is a test</h1>
      <StackedCarousel
        autoRotate={false}
        containerClassName={"container"}
        cardClassName="card"
        leftButton={<button>Left</button>}
        rightButton={<button>Right</button>}
        >
        <div key={'child1'}>
          <h2>First Card</h2>
         
        </div>
        <div key={'child2'}>
          <h2>Second Card</h2>
         
        </div>
        <div key={'child3'}>
          <h2>Third Card</h2>
         
        </div>
        <div key={'child4'}>
          <h2>Fourth Card</h2>
         
        </div>
        <div key={'child5'}>
          <h2>Fifth Card</h2>
         
        </div>
        
      </StackedCarousel>

      </div>
  )
}

export default App
