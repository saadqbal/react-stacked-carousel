# react-stacked-carousel

> Rotating Carousel with stacked cards

[![NPM](https://img.shields.io/npm/v/react-stacked-carousel.svg)](https://www.npmjs.com/package/react-stacked-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Install

```bash
npm install --save react-stacked-carousel
```


# [Demo](http://asadiqbal.me/react-stacked-carousel/)



# Usage


```jsx
import React, {StyleSheet, useState} from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  }
  
  return (
    <div className="main">
      <StackedCarousel
        autoRotate={false}
        onCardChange={onCardChange}
        containerClassName={"container"}
        cardClassName="card"
        leftButton={<button>{"<"}</button>}
        rightButton={<button>{">"}</button>}
      >
        <div key={'child1'}>
          <h2>1 Card</h2>
        </div>
        <div key={'child2'}>
          <h2>2 Card</h2>
        </div>
        <div key={'child3'}>
          <h2>3 Card</h2>
        </div>
        <div key={'child4'}>
          <h2>4 Card</h2>
        </div>
      </StackedCarousel>
      </div>
  )
}
export default App

```


# Props
|Name| Default | Description |
|--|--|--|
| `autoRotate` | true | auto rotate the carousel cards after `rotationInterval` millioseconds are passed |
|`rotationInterval` | 2000 | Rotate a card after this time passes in **milliseconds**.  |
|`onCardChange`| null | A callback that returns the current card stack indexes object each time a card changes. The return object has this form: (`{previousIndex: 0, currentIndex: 1, nextIndex: 2}`).|
|`containerClassName` |  | This class will be applied on the **ul** element |
|`style` |  | Style will be applied on the **ul** element |
|`cardClassName` |  | This class will be applied on the **li** element |
|`leftButton` | `<span>&lsaquo;</span>` | **ReactComponent** for **Left** button |
|`rightButton` | `<span>&rsaquo;</span>` | **ReactComponent** for **Right** button |


## License

MIT © [saadqbal](https://github.com/saadqbal)
