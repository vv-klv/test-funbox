import React, { useState } from 'react';
import cl from "./ProductCard.module.scss";


const ProductCard = (productData) => {
    const data = productData.productData;
    const [isCardChosen, setIsCardChosen] = useState(false);
    const [canHovering, setCanHovering] = useState(false);

    // как только нажали карточку - убираем hover
    const changeCardChosen = () => {
        setIsCardChosen(!isCardChosen);
        setCanHovering(false);
    }
    // после отвода мыши возвращаем hover
    const handleMouseLeave = () => {
        if (isCardChosen) setCanHovering(true);
    };

    return (
        // обертка для карточки и подписи
        <div className={cl.cardWrapper}>
            {/* div для имитации границы */}
            <div
                className={`
                    ${cl.card} 
                    ${!data.available && cl.unavailable__card}
                    ${!canHovering 
                        ? isCardChosen && data.available && cl.cardChecked
                        : isCardChosen && data.available && cl.cardCheckedWithHover}
                `}
                onMouseLeave={handleMouseLeave}
                onClick={() => changeCardChosen()}
            >
                {/* внутренний div с текстом и картинкой */}
                <div className={data.available ? cl.card__inner : cl.unavailable__inner}>
                    <div className={cl.card__suptitle}>{data.suptitle}</div>
                    <div className={cl.card__title}>{data.title}</div>
                    <div className={cl.card__subtitle}>{data.subtitle}</div>
                    {
                        // кол-во порций и доп. информация
                        data.descr.map((item, key) => {
                        return <div className={cl.card__descr} key={key}>
                                   <strong>{item.amount}</strong>
                                   {" " + item.amountUnits}<br/>
                               </div>
                    })}
                    <img
                        className={cl.card__image}
                        src={require("../../assets/images/cat.png")}
                        alt="cat"
                    />
                </div>
                {/* на одном уровне с границей,
                    т.к. к кружку не применяется заливка */}
                <div className={cl.card__circle}>
                    <div className={cl.circle__weight}>{data.weight}</div>
                    <div className={cl.circle__weightUnit}>{data.weightUnits}</div>
                </div>
                {/* слой для заливки */}
                <div className={data.available ? '' : cl.unavailable}></div>
            </div>
            <div
                className={cl.card__caption}
            >
                {
                    (isCardChosen && data.available)
                        ? <div>{data.extra}</div>
                        : ""
                }
                {
                    (!isCardChosen && data.available)
                        ?  <div>{"Чего сидишь? Порадуй котэ, "}
                               <strong className={cl.card__buy}
                                       onClick={changeCardChosen}
                               >купи</strong>
                               <strong>.</strong>
                           </div>
                        : ""
                }
                {
                    !data.available
                        ? <div className={cl.unavailable__caption}>
                              {`Печалька, ${data.subtitle} закончился`}
                          </div>
                        : ""
                }
            </div>

        </div>
    );
};

export default ProductCard;
