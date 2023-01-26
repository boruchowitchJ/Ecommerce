import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListeProduit from './components/porduitcoll/ListeProduits';

function App() {
  const listeproduit = [
    { id : 1, nom : "MOCHA LATTE", prix : "3.5€", desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", photo: "./assets/image/coffee_item_3.png", },
    { id : 2, nom : "POUR OVER", prix : "3.5€", desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", photo: "./assets/image/coffee_item_1.png", },
    { id : 3, nom : "ESPRESSO", prix : "3.5€", desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", photo: "./assets/image/coffee_item_2.png", },
    { id : 4, nom : "ARABICA", prix : "3.5€", desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", photo: "./assets/image/3.png", }
  ]
  const menu = ['accueil', 'cartes', 'contact']
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        {/* <Nav acceuil="acceuil" carte="carte" contact="contact"/> */}        
      </header>
      <section className='container_Card'>
        <div className='produits_container'><ListeProduit listeproduit={listeproduit}/></div>
        <div className='image_container'></div>
        </section>
        <section className='container_Card'>
          <div className='image_container_1'></div>
        <div className='produits_container'><ListeProduit listeproduit={listeproduit}/></div>
        </section>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
