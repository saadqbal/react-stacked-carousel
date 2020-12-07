# react-stacked-carousel

> Rotating Carousel with stacked cards

[![NPM](https://img.shields.io/npm/v/react-stacked-carousel.svg)](https://www.npmjs.com/package/react-stacked-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stacked-carousel
```

## Usage

```jsx
import React from 'react'

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const App = () => {

  return (
    <div>
      <h1>The Stacked cards Carousel</h1>
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

```

## License

MIT © [saadqbal](https://github.com/saadqbal)
