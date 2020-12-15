import React, {StyleSheet} from 'react'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import Xray1 from './assets/xray1.png'
import Xray2 from './assets/xray2.png';
import Xray3 from './assets/xray3.png';

const App = () => {

  return (
    <div>
      <h1>THis is a test</h1>
      <StackedCarousel
        autoRotate={false}
        containerClassName={"container"}
        cardClassName="card"
        leftButton={<button>{"<"}</button>}
        rightButton={<button>{">"}</button>}

      >
        {/* <img key={'child1'} src={Xray1} style={{ width: 'inherit' }} />
        <img key={'child2'} src={Xray2} style={{ width: 'inherit' }} />
        <img key={'child3'} src={Xray3} style={{ width: 'inherit' }} />
        <img key={'child4'} src={Xray3} style={{ width: 'inherit' }} />
        <img key={'child5'} src={Xray3} style={{ width: 'inherit'}} /> */}

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
