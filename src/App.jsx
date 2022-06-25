import './styles/app.scss'
import CardsQuestion from './components/cardsQuestion/cardsQuestion';
import CardsWrapper from './components/cardsWrapper/cardsWrapper';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="wrapper">
                    <CardsQuestion />
                    <CardsWrapper />
                </div>
            </div>
        </div>
)
    ;
}

export default App;
