import React from 'react'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const App = () => {

  return (
    <div>
      <h1>THis is a test</h1>
      <StackedCarousel
        autoRotate={true}
        >
        <div key={'child1'}>
          <h2>First Card</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div key={'child2'}>
          <h2>Second Card</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div key={'child3'}>
          <h2>Third Card</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
      </StackedCarousel>

      </div>
  )
}

export default App
