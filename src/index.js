import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles.module.css'

const defaultCardItems = [
  (
    <div key="key1">
      <h2>First Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ),
  (
    <div key="key2">
      <h2>Second Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ),
  (
    <div key="key3">
      <h2>Third Item</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
];


const setCardStatus = (indexes, cardIndex, showSummary=false) => {
  // console.log(indexes, cardIndex);
  if (indexes.currentIndex === cardIndex) {
    return  styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return showSummary ? `${styles.noTranslate}`: `${styles.next}`;
  } else if (indexes.previousIndex === cardIndex) {
    return  showSummary ? `${styles.noTranslate}`: styles.prev;
  }
  return styles.inactive;
}

export const StackedCarousel = ({ showSummary, style, onCardChange, containerClassName, cardClassName, leftButton, rightButton, autoRotate=true, rotationInterval=2000, children}) => {
  let cardItems = showSummary ? [1, ...children] : children || defaultCardItems;
  
  console.log(showSummary)
  const [indexes, setIndexes] = useState({
    previousIndex: cardItems.length-1,
    currentIndex: 0,
    nextIndex: 1
  });

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
        currentIndex: prevState.currentIndex + 1 ,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  const handleLeftButton = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 2,
        currentIndex: cardItems.length - 1,
        nextIndex: 0
      });

    } else {
      setIndexes(prevState => ({
        nextIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        previousIndex:
          prevState.currentIndex - 1 <= 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2
      }));
    }
  }, [indexes.currentIndex]);

  
  useEffect(() => {
    onCardChange && onCardChange(indexes);
    const transitionInterval = setInterval(() => {
      autoRotate && handleCardTransition();
    }, rotationInterval);
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, autoRotate]);

  return (
    <div className={`${styles.container}`}>
      {
        leftButton ?
          <span onClick={handleLeftButton}>{leftButton}</span>
          : <span className={styles.leftButton} onClick={handleLeftButton}>&lsaquo;</span>
      }
      <ul style={{ ...style }} className={`${styles.cardCarousel} ${containerClassName ? containerClassName : styles.carouselDefault}`}>
        {
          cardItems.map((card, index) => {
            if (showSummary && index === 0) {
              // cardItems.shift()
              const cardsGallery = cardItems.slice(1);
              return (<li
                key={'stacked-carousel'}
                className={`${cardClassName ? cardClassName : ''} ${styles.card} ${styles.cardSummary} ${setCardStatus(indexes, index, showSummary)}`}
              >

                {cardsGallery.map((cardItem, cardIndex) => (
                  <div
                    key={cardItem.key}
                    className={`${ cardClassName ? cardClassName : ''} ${setCardStatus(indexes, cardIndex, showSummary)}`}
                  >
                    {cardItem}
                  </div>
                ))}
              </li>)
            } else {
              return(
                <li
                  key={card.key}
                  className={`${cardClassName ? cardClassName : ''} ${styles.card} ${setCardStatus(indexes, index, showSummary)}`}
                >
                  {card}
                </li>)
            }
          }
          
        )}
        </ul>
      {
        rightButton ?
          <span onClick={handleCardTransition}>{rightButton}</span>
          : <span className={styles.rightButton} onClick={handleCardTransition}>&rsaquo;</span>
      }
    </div>
  );
}


