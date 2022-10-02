import generalStyles from './App.css';
import Nav from './components/Nav'
import Searchbar from './components/Searchbar';

function App() {
    return ( 
        <div className={generalStyles.App}>   
            <Nav />
            <Searchbar />
        </div>
        )
}

export default App;