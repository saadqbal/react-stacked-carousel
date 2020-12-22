import React, {StyleSheet, useState} from 'react'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const App = () => {

  const [card, setCard] = useState(null);

  const onCardChange = (event) => {
    console.log("Card", event);
  }
  

  return (
    <div>
      <h1>THis is a test</h1>
      <StackedCarousel
        autoRotate={false}
        onCardChange={onCardChange}
        containerClassName={"container"}
        cardClassName="card"
        leftButton={<button>{"<"}</button>}
        rightButton={<button>{">"}</button>}

      >

        <div key={'child6'}>
          <h2>1 Card</h2>
        </div>

        <div key={'child7'}>
          <h2>2 Card</h2>
        </div>
        
        <div key={'child8'}>
          <h2>3 Card</h2>
        </div>

        <div key={'child9'}>
          <h2>4 Card</h2>
        </div>

        <div key={'child10'}>
          <h2>5 Card</h2>
        </div>

        <div key={'child11'}>
          <h2>6 Card</h2>
        </div>

        <div key={'child12'}>
          <h2>7 Card</h2>
        </div>
        
      </StackedCarousel>

      </div>
  )
}

export default App
