import React, { useState } from 'react';
import cl from "./ProductCard.module.scss";

const ProductCard = (productData) => {
    const data = productData.productData;
    const [isCardChosen, setIsCardChosen] = useState(false);
    const [canHovering, setCanHovering] = useState(false);

    // при первом нажатии на карточку - убираем hover
    const changeCardSelection = () => {
        if (data.available) {
            setIsCardChosen((prev) => !prev);
            setCanHovering(false);
        }
    }
    // после отвода мыши возвращаем hover
    const handleMouseLeave = () => {
        if (isCardChosen) setCanHovering(true);
    };

    return (
        // обертка для карточки и подписи
        <div
            className={cl.cardWrapper}
            tabIndex={data.available ? 1 : -1}
        >
            {/* div для имитации границы */}
            <div
                className={`
                    ${cl.card} 
                    ${canHovering
                        ? isCardChosen && cl.cardCheckedWithHover
                        : isCardChosen && cl.cardChecked}
                    ${!data.available ? cl.unavailable__card : '' }
                `}
                onMouseLeave={handleMouseLeave}
                onClick={() => changeCardSelection()}
            >
                {/* внутренний div с текстом и картинкой */}
                <div className={data.available ? cl.card__inner : cl.unavailable__inner}>
                    {
                        canHovering
                            ? <div className={cl.card__suptitle} style={{color: "#e62e7a"}}>Котэ не одобряет?</div>
                            : <div className={cl.card__suptitle}>{data.suptitle}</div>
                    }
                    <div className={cl.card__title}>{data.title}</div>
                    <div className={cl.card__subtitle}>{data.subtitle}</div>
                    {
                        // количество порций и дополнительная информация
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
                <div className={!data.available && cl.unavailable}></div>
            </div>
            {/* подпись к карточке */}
            <div className={cl.card__caption}>
                {
                    // подпись по умолчанию, если карточка не выбрана
                    !isCardChosen && data.available &&
                    <div>
                        {"Чего сидишь? Порадуй котэ, "}
                        <strong className={cl.card__buy}
                                onClick={changeCardSelection}
                        >купи</strong>
                        <strong>.</strong>
                    </div>
                }
                {
                    // подпись, если карточка выбрана
                    isCardChosen && data.available && <div>{data.extra}</div>
                }
                {
                    // подпись, если карточка недоступна
                    !data.available && <div className={cl.unavailable__caption}>
                                           {`Печалька, ${data.subtitle} закончился`}
                                       </div>
                }
            </div>
        </div>
    );
};

export default ProductCard;
