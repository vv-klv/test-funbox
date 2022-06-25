import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import cl from './cardsWrapper.module.scss';
import catFood from '../../database/catFood.json'

const cardsWrapper = () => {
    return (
        <div className={cl.cards__wrapper}>
            {catFood.map(item => {
                return <ProductCard productData={item}
                                    key={item.id}/>
            })}
        </div>
    );
};

export default cardsWrapper;
