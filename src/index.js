import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles.module.css'

const cardItems = [
  (
    <div>
      <h2>First Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ),
  (
    <div>
      <h2>Second Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ),
  (
    <div>
      <h2>Third Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
];


const setCardStatus = (indexes, cardIndex) => {
  if (indexes.currentIndex === cardIndex) {
    return  styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } else if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
}

export const StackedCarousel = ({cardClassName, autoRotate=true, children}) => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });
  const cardItems = children || cardItems
  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {


    const transitionInterval = setInterval(() => {
      autoRotate && handleCardTransition();
    }, 2000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, autoRotate]);

  console.log(children)

  return (
    <div className={styles.container}>
      <ul className={styles.cardCarousel}>

        {cardItems.map((card, index) => (
          <li
            key={card.key}
            className={`${cardClassName} ${styles.card} ${setCardStatus(indexes, index)}`}
          >
            { card }
          </li>
        ))}
      </ul>
    </div>
  );
}


