import './styles/app.scss'
import CardsQuestion from './components/cardsQuestion/cardsQuestion';
import ProductCard from './components/ProductCard/ProductCard';
import catFood from './database/catFood.json'

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="wrapper">
                    <CardsQuestion />
                    <div className="cards__wrapper">
                        {catFood.map(item => {
                            return <ProductCard productData={item}
                                                key={item.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
)
    ;
}

export default App;
