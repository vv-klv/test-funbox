import React from 'react';
import cl from './cardsQuestion.module.scss'

const CardsQuestion = () => {
    return (
        <div className={cl.question}>
            Ты сегодня покормил кота?
        </div>
    );
};

export default CardsQuestion;
