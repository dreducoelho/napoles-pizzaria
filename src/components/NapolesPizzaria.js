import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Edit, Trash2, Save, X, MapPin, Phone, Star, Search, Home } from 'lucide-react';

const useStoredState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue];
};

const NapolesPizzaria = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // home, menu, product, cart, checkout
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({
    pizzas: [
      {
        id: 1,
        name: 'Pizza Alemã',
        description: 'Mussarela, provolone, requeijão tipo catupiry e cheddar',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 2,
        name: 'Pizza Alho',
        description: 'Mussarela e alho frito',
        priceGrande: 54.00,
        priceBroto: 39.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 3,
        name: 'Pizza Alvorada',
        description: 'Escarola, presunto, palmito, mussarela e ervilha',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 4,
        name: 'Pizza A Moda',
        description: 'Frango desfiado, mussarela, requeijão tipo catupiry e champignon',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 5,
        name: 'Pizza Argentina',
        description: 'Frango desfiado, escarola e requeijão tipo catupiry',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 6,
        name: 'Pizza Americana',
        description: 'Frango desfiado, batata palha e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 7,
        name: 'Pizza Atum',
        description: 'Atum e cebola fatiada',
        priceGrande: 57.00,
        priceBroto: 41.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 8,
        name: 'Pizza Bacon',
        description: 'Bacon e mussarela',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 9,
        name: 'Pizza Baiana',
        description: 'Calabresa, pimenta, ovos, pimentão picado, cebola e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 10,
        name: 'Pizza Bauru',
        description: 'Presunto, mussarela e tomate',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 11,
        name: 'Pizza Brasiliense',
        description: 'Calabresa, cebola, provolone e cheddar',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 12,
        name: 'Pizza Becel',
        description: 'Lombo canadense, milho verde, mussarela e requeijão tipo catupiry',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 13,
        name: 'Pizza Brócolis',
        description: 'Brócolis, champignon e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 14,
        name: 'Pizza Brócolis c/ Alho',
        description: 'Brócolis, alho frito e mussarela',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 15,
        name: 'Pizza Calabresa',
        description: 'Calabresa e cebola',
        priceGrande: 49.00,
        priceBroto: 35.00,
        category: 'Pizzas',
        image: 'https://i.imgur.com/o9EcVKV.jpg'
      },
      {
        id: 16,
        name: 'Pizza Calabacon',
        description: 'Calabresa, mussarela e bacon',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-calabacon?prompt=Pizza%20with%20pepperoni%20mozzarella%20bacon'
      },
      {
        id: 17,
        name: 'Pizza Champignon',
        description: 'Champignon e mussarela',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-champignon?prompt=Pizza%20with%20mushrooms%20and%20mozzarella'
      },
      {
        id: 18,
        name: 'Pizza Catupiry',
        description: 'Requeijão tipo catupiry',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas',
        image: 'keys/pizza-catupiry?prompt=Pizza%20with%20catupiry%20cheese'
      },
      {
        id: 19,
        name: 'Pizza Champiry',
        description: 'Champignon e requeijão tipo catupiry',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-champiry?prompt=Pizza%20with%20mushrooms%20and%20catupiry%20cheese'
      },
      {
        id: 20,
        name: 'Pizza Chilena',
        description: 'Atum, palmito, ervilha e cheddar',
        priceGrande: 63.00,
        priceBroto: 45.00,
        category: 'Pizzas',
        image: 'keys/pizza-chilena?prompt=Pizza%20with%20tuna%20palm%20hearts%20peas%20cheddar'
      },
      {
        id: 21,
        name: 'Pizza Cristal',
        description: 'Milho verde e requeijão tipo catupiry',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-cristal?prompt=Pizza%20with%20corn%20and%20catupiry%20cheese'
      },
      {
        id: 22,
        name: 'Pizza Cubana',
        description: 'Calabresa, mussarela, palmito, ervilha, ovos e cebola',
        priceGrande: 60.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-cubana?prompt=Pizza%20with%20pepperoni%20mozzarella%20palm%20hearts%20peas%20eggs%20onion'
      },
      {
        id: 23,
        name: 'Pizza Camarão c/ Catupiry',
        description: 'Camarão e requeijão tipo catupiry',
        priceGrande: 71.00,
        priceBroto: 51.00,
        category: 'Pizzas',
        image: 'keys/pizza-camarao-catupiry?prompt=Pizza%20with%20shrimp%20and%20catupiry%20cheese'
      },
      {
        id: 24,
        name: 'Pizza Camarão II',
        description: 'Camarão temperado, requeijão tipo catupiry, copa e alho poró',
        priceGrande: 74.00,
        priceBroto: 53.00,
        category: 'Pizzas',
        image: 'keys/pizza-camarao2?prompt=Gourmet%20pizza%20with%20seasoned%20shrimp%20catupiry%20copa%20leek'
      },
      {
        id: 25,
        name: 'Pizza Dois Queijos',
        description: 'Requeijão tipo catupiry e provolone',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-dois-queijos?prompt=Two%20cheese%20pizza%20catupiry%20provolone'
      },
      {
        id: 26,
        name: 'Pizza do Chefe',
        description: 'Atum, milho verde, mussarela e rúcula',
        priceGrande: 61.00,
        priceBroto: 44.00,
        category: 'Pizzas',
        image: 'keys/pizza-do-chefe?prompt=Chef%20pizza%20with%20tuna%20corn%20mozzarella%20arugula'
      },
      {
        id: 27,
        name: 'Pizza Delivery',
        description: 'Presunto, requeijão tipo catupiry, ovo e mussarela',
        priceGrande: 60.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-delivery?prompt=Pizza%20with%20ham%20catupiry%20egg%20mozzarella'
      },
      {
        id: 28,
        name: 'Pizza Escarola',
        description: 'Cebola, escarola refogada e mussarela',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-escarola?prompt=Pizza%20with%20onion%20sauteed%20escarole%20mozzarella'
      },
      {
        id: 29,
        name: 'Pizza Escarola c/ Bacon',
        description: 'Escarola, bacon e mussarela',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-escarola-bacon?prompt=Pizza%20with%20escarole%20bacon%20mozzarella'
      },
      {
        id: 30,
        name: 'Pizza Familiar',
        description: 'Lombo, palmito, calabresa e mussarela',
        priceGrande: 60.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-familiar?prompt=Family%20pizza%20with%20pork%20loin%20palm%20hearts%20pepperoni%20mozzarella'
      },
      {
        id: 31,
        name: 'Pizza Frango Nápoles',
        description: 'Frango desfiado, requeijão tipo catupiry e milho verde',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-frango-napoles?prompt=Pizza%20with%20shredded%20chicken%20catupiry%20corn'
      },
      {
        id: 32,
        name: 'Pizza Feline',
        description: 'Provolone, ovos, palmito e cebola',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-feline?prompt=Pizza%20with%20provolone%20eggs%20palm%20hearts%20onion'
      },
      {
        id: 33,
        name: 'Pizza Fiore',
        description: 'Cebola, mussarela e atum',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-fiore?prompt=Pizza%20with%20onion%20mozzarella%20tuna'
      },
      {
        id: 34,
        name: 'Pizza Filé Mignon',
        description: 'Filé mignon, pimentão, cebola e mussarela',
        priceGrande: 75.00,
        priceBroto: 54.00,
        category: 'Pizzas',
        image: 'keys/pizza-file-mignon?prompt=Gourmet%20pizza%20with%20filet%20mignon%20bell%20pepper%20onion%20mozzarella'
      },
      {
        id: 35,
        name: 'Pizza Gaúcha Grill',
        description: 'Filé mignon, mussarela e batata palha',
        priceGrande: 75.00,
        priceBroto: 54.00,
        category: 'Pizzas',
        image: 'keys/pizza-gaucha-grill?prompt=Gaucho%20pizza%20with%20filet%20mignon%20mozzarella%20potato%20sticks'
      },
      {
        id: 36,
        name: 'Pizza Grécia',
        description: 'Calabresa, bacon, palmito e mussarela',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-grecia?prompt=Greek%20pizza%20with%20pepperoni%20bacon%20palm%20hearts%20mozzarella'
      },
      {
        id: 37,
        name: 'Pizza Hot Dog',
        description: 'Salsicha, cheddar, mussarela, milho verde e batata palha',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-hot-dog?prompt=Hot%20dog%20pizza%20with%20sausage%20cheddar%20mozzarella%20corn%20potato%20sticks'
      },
      {
        id: 38,
        name: 'Pizza Indiane',
        description: 'Ovos, milho verde, palmito, ervilha e mussarela',
        priceGrande: 57.00,
        priceBroto: 41.00,
        category: 'Pizzas',
        image: 'keys/pizza-indiane?prompt=Pizza%20with%20eggs%20corn%20palm%20hearts%20peas%20mozzarella'
      },
      {
        id: 39,
        name: 'Pizza Italiana',
        description: 'Frango desfiado, palmito e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-italiana?prompt=Italian%20pizza%20with%20shredded%20chicken%20palm%20hearts%20mozzarella'
      },
      {
        id: 40,
        name: 'Pizza Jardineira',
        description: 'Frango desfiado, palmito, ervilha, ovos, cebola e mussarela',
        priceGrande: 60.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-jardineira?prompt=Garden%20pizza%20with%20chicken%20palm%20hearts%20peas%20eggs%20onion%20mozzarella'
      },
      {
        id: 41,
        name: 'Pizza Jamaicana',
        description: 'Escarola, mussarela, tomate seco e alho frito',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-jamaicana?prompt=Jamaican%20pizza%20with%20escarole%20mozzarella%20sun%20dried%20tomato%20fried%20garlic'
      },
      {
        id: 42,
        name: 'Pizza Lombo',
        description: 'Lombo canadense e requeijão tipo catupiry',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-lombo?prompt=Pizza%20with%20canadian%20bacon%20and%20catupiry%20cheese'
      },
      {
        id: 43,
        name: 'Pizza Marguerita',
        description: 'Mussarela, manjericão, tomate e parmesão',
        priceGrande: 57.00,
        priceBroto: 41.00,
        category: 'Pizzas',
        image: 'keys/pizza-marguerita?prompt=Classic%20margherita%20pizza%20with%20mozzarella%20basil%20tomato%20parmesan'
      },
      {
        id: 44,
        name: 'Pizza Marguerita Nápoles',
        description: 'Mussarela, manjericão e tomate cereja',
        priceGrande: 60.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-marguerita-napoles?prompt=Napoli%20margherita%20pizza%20with%20mozzarella%20basil%20cherry%20tomatoes'
      },
      {
        id: 45,
        name: 'Pizza Maresias',
        description: 'Atum, camarão, mussarela e requeijão tipo catupiry',
        priceGrande: 72.00,
        priceBroto: 52.00,
        category: 'Pizzas',
        image: 'keys/pizza-maresias?prompt=Seafood%20pizza%20with%20tuna%20shrimp%20mozzarella%20catupiry'
      },
      {
        id: 46,
        name: 'Pizza Mexicana',
        description: 'Atum, palmito, ervilha, cebola e mussarela',
        priceGrande: 63.00,
        priceBroto: 45.00,
        category: 'Pizzas',
        image: 'keys/pizza-mexicana?prompt=Mexican%20pizza%20with%20tuna%20palm%20hearts%20peas%20onion%20mozzarella'
      },
      {
        id: 47,
        name: 'Pizza Mineira',
        description: 'Carne seca, pimentão, cebola e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-mineira?prompt=Minas%20style%20pizza%20with%20dried%20meat%20bell%20pepper%20onion%20mozzarella'
      },
      {
        id: 48,
        name: 'Pizza Milho Verde',
        description: 'Milho verde e mussarela',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-milho-verde?prompt=Pizza%20with%20corn%20and%20mozzarella'
      },
      {
        id: 49,
        name: 'Pizza Mussarela',
        description: 'Mussarela e tomate',
        priceGrande: 49.00,
        priceBroto: 35.00,
        category: 'Pizzas',
        image: 'keys/pizza-mussarela?prompt=Classic%20mozzarella%20pizza%20with%20tomato'
      },
      {
        id: 50,
        name: 'Pizza Napolitana',
        description: 'Mussarela, tomate e parmesão ralado',
        priceGrande: 55.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-napolitana?prompt=Neapolitan%20pizza%20with%20mozzarella%20tomato%20grated%20parmesan'
      },
      {
        id: 51,
        name: 'Pizza Nordestina',
        description: 'Frango desfiado, bacon e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-nordestina?prompt=Northeastern%20pizza%20with%20shredded%20chicken%20bacon%20mozzarella'
      },
      {
        id: 52,
        name: 'Pizza Palmito',
        description: 'Palmito, mussarela e cebola',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-palmito?prompt=Pizza%20with%20palm%20hearts%20mozzarella%20onion'
      },
      {
        id: 53,
        name: 'Pizza Paulista',
        description: 'Requeijão tipo catupiry, champignon, bacon e parmesão ralado',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-paulista?prompt=Sao%20Paulo%20style%20pizza%20with%20catupiry%20mushrooms%20bacon%20parmesan'
      },
      {
        id: 54,
        name: 'Pizza Peito de Peru',
        description: 'Peito de peru, palmito, cebola e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-peito-peru?prompt=Pizza%20with%20turkey%20breast%20palm%20hearts%20onion%20mozzarella'
      },
      {
        id: 55,
        name: 'Pizza Pepperoni',
        description: 'Pepperoni e mussarela',
        priceGrande: 61.00,
        priceBroto: 44.00,
        category: 'Pizzas',
        image: 'keys/pizza-pepperoni?prompt=Classic%20pepperoni%20pizza%20with%20mozzarella'
      },
      {
        id: 56,
        name: 'Pizza Pepperoni II',
        description: 'Pepperoni, pimentão, champignon, azeitonas pretas fatiadas e mussarela',
        priceGrande: 64.00,
        priceBroto: 46.00,
        category: 'Pizzas',
        image: 'keys/pizza-pepperoni2?prompt=Supreme%20pepperoni%20pizza%20with%20bell%20pepper%20mushrooms%20black%20olives%20mozzarella'
      },
      {
        id: 57,
        name: 'Pizza Portuguesa',
        description: 'Presunto, ovos, cebola e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-portuguesa?prompt=Portuguese%20pizza%20with%20ham%20eggs%20onion%20mozzarella'
      },
      {
        id: 58,
        name: 'Pizza Peruana',
        description: 'Presunto e cheddar',
        priceGrande: 57.00,
        priceBroto: 41.00,
        category: 'Pizzas',
        image: 'keys/pizza-peruana?prompt=Peruvian%20pizza%20with%20ham%20and%20cheddar'
      },
      {
        id: 59,
        name: 'Pizza Pitel',
        description: 'Frango desfiado, mussarela e cheddar',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-pitel?prompt=Pizza%20with%20shredded%20chicken%20mozzarella%20cheddar'
      },
      {
        id: 60,
        name: 'Pizza Picanha',
        description: 'Picanha fatiada, mussarela e requeijão tipo catupiry',
        priceGrande: 75.00,
        priceBroto: 54.00,
        category: 'Pizzas',
        image: 'keys/pizza-picanha?prompt=Gourmet%20pizza%20with%20sliced%20picanha%20mozzarella%20catupiry'
      },
      {
        id: 61,
        name: 'Pizza Presunto',
        description: 'Presunto e cebola',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas',
        image: 'keys/pizza-presunto?prompt=Pizza%20with%20ham%20and%20onion'
      },
      {
        id: 62,
        name: 'Pizza Provolone',
        description: 'Provolone',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas',
        image: 'keys/pizza-provolone?prompt=Pizza%20with%20provolone%20cheese'
      },
      {
        id: 63,
        name: 'Pizza Romana',
        description: 'Aliche, parmesão ralado, fatias de tomate e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-romana?prompt=Roman%20pizza%20with%20anchovies%20parmesan%20tomato%20slices%20mozzarella'
      },
      {
        id: 64,
        name: 'Pizza Rúcula',
        description: 'Rúcula, tomate seco e mussarela',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-rucula?prompt=Pizza%20with%20arugula%20sun%20dried%20tomato%20mozzarella'
      },
      {
        id: 65,
        name: 'Pizza Quatro Queijos',
        description: 'Mussarela, provolone, requeijão tipo catupiry e parmesão ralado',
        priceGrande: 57.00,
        priceBroto: 41.00,
        category: 'Pizzas',
        image: 'keys/pizza-quatro-queijos?prompt=Four%20cheese%20pizza%20with%20mozzarella%20provolone%20catupiry%20parmesan'
      },
      {
        id: 66,
        name: 'Pizza Salame',
        description: 'Salame, requeijão tipo catupiry, fatias de tomate e mussarela',
        priceGrande: 63.00,
        priceBroto: 45.00,
        category: 'Pizzas',
        image: 'keys/pizza-salame?prompt=Pizza%20with%20salami%20catupiry%20tomato%20slices%20mozzarella'
      },
      {
        id: 67,
        name: 'Pizza Siciliana',
        description: 'Mussarela, bacon e champignon',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas',
        image: 'keys/pizza-siciliana?prompt=Sicilian%20pizza%20with%20mozzarella%20bacon%20mushrooms'
      },
      {
        id: 68,
        name: 'Pizza Toscana',
        description: 'Cebola fatiada, calabresa e mussarela',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-toscana?prompt=Tuscan%20pizza%20with%20sliced%20onion%20pepperoni%20mozzarella'
      },
      {
        id: 69,
        name: 'Pizza Traviata',
        description: 'Calabresa fatiada e requeijão tipo catupiry',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-traviata?prompt=Pizza%20with%20sliced%20pepperoni%20and%20catupiry'
      },
      {
        id: 70,
        name: 'Pizza Taiti',
        description: 'Palmito, champignon e mussarela',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-taiti?prompt=Pizza%20with%20palm%20hearts%20mushrooms%20mozzarella'
      },
      {
        id: 71,
        name: 'Pizza Titanic',
        description: 'Berinjela, tomate seco e mussarela',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-titanic?prompt=Pizza%20with%20eggplant%20sun%20dried%20tomato%20mozzarella'
      },
      {
        id: 72,
        name: 'Pizza Três Queijos',
        description: 'Mussarela, requeijão tipo catupiry e provolone',
        priceGrande: 56.00,
        priceBroto: 40.00,
        category: 'Pizzas',
        image: 'keys/pizza-tres-queijos?prompt=Three%20cheese%20pizza%20with%20mozzarella%20catupiry%20provolone'
      },
      {
        id: 73,
        name: 'Pizza Paizão',
        description: 'Frango desfiado, requeijão tipo catupiry, milho verde e carne seca',
        priceGrande: 61.00,
        priceBroto: 44.00,
        category: 'Pizzas',
        image: 'keys/pizza-paizao?prompt=Special%20pizza%20with%20chicken%20catupiry%20corn%20dried%20meat'
      },
      {
        id: 74,
        name: 'Pizza Tropical',
        description: 'Presunto, ervilha, palmito e mussarela',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-tropical?prompt=Tropical%20pizza%20with%20ham%20peas%20palm%20hearts%20mozzarella'
      },
      {
        id: 75,
        name: 'Pizza Vegetariana',
        description: 'Ervilha, milho verde, palmito, mussarela e escarola',
        priceGrande: 59.00,
        priceBroto: 43.00,
        category: 'Pizzas',
        image: 'keys/pizza-vegetariana?prompt=Vegetarian%20pizza%20with%20peas%20corn%20palm%20hearts%20mozzarella%20escarole'
      }
    ],
    pizzasDoces: [
      {
        id: 200,
        name: 'Pizza Brigadeiro com Morango',
        description: 'Creme de leite, granulado e morango',
        priceGrande: 58.00,
        priceBroto: 42.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-brigadeiro-morango?prompt=Sweet%20brigadeiro%20pizza%20with%20strawberry'
      },
      {
        id: 201,
        name: 'Pizza Chocolate c/ Confetes',
        description: 'Chocolate c/ confetes e creme de leite',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-chocolate-confetes?prompt=Sweet%20chocolate%20pizza%20with%20sprinkles'
      },
      {
        id: 202,
        name: 'Pizza Romeu e Julieta',
        description: 'Creme de leite, goiabada e mussarela',
        priceGrande: 50.00,
        priceBroto: 36.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-romeu-julieta?prompt=Sweet%20pizza%20with%20guava%20paste%20and%20cheese'
      },
      {
        id: 203,
        name: 'Pizza Banana com Canela',
        description: 'Leite condensado, banana fatiada e canela em pó',
        priceGrande: 50.00,
        priceBroto: 36.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-banana-canela?prompt=Sweet%20banana%20pizza%20with%20cinnamon'
      },
      {
        id: 204,
        name: 'Pizza Banana c/ Chocolate',
        description: 'Banana c/ chocolate e leite condensado',
        priceGrande: 53.00,
        priceBroto: 38.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-banana-chocolate?prompt=Sweet%20banana%20chocolate%20pizza'
      },
      {
        id: 205,
        name: 'Pizza Nutella',
        description: 'Nutella',
        priceGrande: 72.00,
        priceBroto: 52.00,
        category: 'Pizzas Doces',
        image: 'keys/pizza-nutella?prompt=Sweet%20nutella%20pizza'
      }
    ],
    esfihasSalgadas: [
      {
        id: 100,
        name: 'Atum',
        description: 'Atum',
        price: 5.50,
        category: 'Esfihas Salgadas',
        image: 'keys/esfirra-atum?prompt=Tuna%20esfiha'
      },
      {
        id: 101,
        name: 'Atum c/ Catupiry',
        description: 'Atum, coberto com catupiry tipo requeijão',
        price: 6.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-atum-catupiry?prompt=Tuna%20esfiha%20with%20catupiry'
      },
      {
        id: 102,
        name: 'Atum c/ Queijo',
        description: 'Atum, coberto com mussarela',
        price: 6.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-atum-queijo?prompt=Tuna%20esfiha%20with%20cheese'
      },
      {
        id: 103,
        name: 'Bauru',
        description: 'Presunto, mussarela, tomate',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-bauru?prompt=Bauru%20esfiha'
      },
      {
        id: 104,
        name: 'Berinjela',
        description: 'Berinjela temperada com mussarela',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-berinjela?prompt=Eggplant%20esfiha'
      },
      {
        id: 105,
        name: 'Bacon c/ Queijo',
        description: 'Bacon coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-bacon-queijo?prompt=Bacon%20esfiha%20with%20cheese'
      },
      {
        id: 106,
        name: 'Brócolis c/ Queijo',
        description: 'Brócolis coberto com mussarela',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-brocolis-queijo?prompt=Broccoli%20esfiha%20with%20cheese'
      },
      {
        id: 107,
        name: 'Caipira',
        description: 'Frango com milho coberto com mussarela',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-caipira?prompt=Country%20style%20chicken%20corn%20esfiha'
      },
      {
        id: 108,
        name: 'Calabresa',
        description: 'Calabresa moída',
        price: 4.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-calabresa?prompt=Pepperoni%20esfiha'
      },
      {
        id: 109,
        name: 'Calabresa c/ Queijo',
        description: 'Calabresa moída coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-calabresa-queijo?prompt=Pepperoni%20esfiha%20with%20cheese'
      },
      {
        id: 110,
        name: 'Calabresa c/ Catupiry',
        description: 'Calabresa moída coberto com catupiry tipo requeijão',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-calabresa-catupiry?prompt=Pepperoni%20esfiha%20with%20catupiry'
      },
      {
        id: 111,
        name: 'Camarão c/ Queijo',
        description: 'Camarão coberto com mussarela',
        price: 9.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-camarao-queijo?prompt=Shrimp%20esfiha%20with%20cheese'
      },
      {
        id: 112,
        name: 'Camarão c/ Catupiry',
        description: 'Camarão coberto com catupiry tipo requeijão',
        price: 8.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-camarao-catupiry?prompt=Shrimp%20esfiha%20with%20catupiry'
      },
      {
        id: 113,
        name: 'Carne',
        description: 'Carne moída temperada',
        price: 4.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-carne?prompt=Meat%20esfiha'
      },
      {
        id: 114,
        name: 'Carne c/ Catupiry',
        description: 'Carne moída temperada, coberto com catupiry tipo requeijão',
        price: 4.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-carne-catupiry?prompt=Meat%20esfiha%20with%20catupiry'
      },
      {
        id: 115,
        name: 'Carne c/ Queijo',
        description: 'Carne moída temperada coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-carne-queijo?prompt=Meat%20esfiha%20with%20cheese'
      },
      {
        id: 116,
        name: 'Catupiry',
        description: 'Requeijão tipo catupiry',
        price: 4.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-catupiry?prompt=Catupiry%20esfiha'
      },
      {
        id: 117,
        name: 'Catupiry c/ Queijo',
        description: 'Mussarela coberta com catupiry',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-catupiry-queijo?prompt=Catupiry%20esfiha%20with%20cheese'
      },
      {
        id: 118,
        name: 'Catupiry c/ Milho',
        description: 'Milho coberto com mussarela',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-catupiry-milho?prompt=Catupiry%20corn%20esfiha'
      },
      {
        id: 119,
        name: 'Escarola c/ Queijo',
        description: 'Escarola refogada, coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-escarola-queijo?prompt=Escarole%20esfiha%20with%20cheese'
      },
      {
        id: 120,
        name: 'Escarola c/ Catupiry',
        description: 'Escarola refogada, coberto com catupiry',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-escarola-catupiry?prompt=Escarole%20esfiha%20with%20catupiry'
      },
      {
        id: 121,
        name: 'Frango',
        description: 'Frango desfiado',
        price: 4.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-frango?prompt=Chicken%20esfiha'
      },
      {
        id: 122,
        name: 'Frango c/ Cheddar',
        description: 'Frango desfiado, coberto com cheddar',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-frango-cheddar?prompt=Chicken%20esfiha%20with%20cheddar'
      },
      {
        id: 123,
        name: 'Frango c/ Catupiry',
        description: 'Frango desfiado, coberto com catupiry',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-frango-catupiry?prompt=Chicken%20esfiha%20with%20catupiry'
      },
      {
        id: 124,
        name: 'Frango c/ Queijo',
        description: 'Frango desfiado, coberto com mussarela',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-frango-queijo?prompt=Chicken%20esfiha%20with%20cheese'
      },
      {
        id: 125,
        name: 'Jaba c/ Queijo',
        description: 'Carne seca coberto com mussarela',
        price: 8.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-jaba-queijo?prompt=Dried%20meat%20esfiha%20with%20cheese'
      },
      {
        id: 126,
        name: 'Mussarela',
        description: 'Mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-mussarela?prompt=Mozzarella%20esfiha'
      },
      {
        id: 127,
        name: 'Palmito c/ Queijo',
        description: 'Palmito, coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-palmito-queijo?prompt=Palm%20hearts%20esfiha%20with%20cheese'
      },
      {
        id: 128,
        name: 'Palmito c/ Catupiry',
        description: 'Palmito, coberto com catupiry',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-palmito-catupiry?prompt=Palm%20hearts%20esfiha%20with%20catupiry'
      },
      {
        id: 129,
        name: 'Presunto',
        description: 'Presunto',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-presunto?prompt=Ham%20esfiha'
      },
      {
        id: 130,
        name: 'Presunto c/ Queijo',
        description: 'Presunto, coberto com mussarela',
        price: 6.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-presunto-queijo?prompt=Ham%20esfiha%20with%20cheese'
      },
      {
        id: 131,
        name: 'Queijo',
        description: 'Queijo branco',
        price: 5.00,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-queijo?prompt=White%20cheese%20esfiha'
      },
      {
        id: 132,
        name: 'Queijo c/ Milho',
        description: 'Milho coberto com mussarela',
        price: 4.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-queijo-milho?prompt=Cheese%20corn%20esfiha'
      },
      {
        id: 133,
        name: 'Cheddar',
        description: 'Cheddar',
        price: 5.50,
        category: 'Esfirras Salgadas',
        image: 'keys/esfirra-cheddar?prompt=Cheddar%20esfiha'
      }
    ],
    esfihasDoces: [
      {
        id: 150,
        name: 'Banana c/ Canela',
        description: 'Banana, açúcar, canela',
        price: 6.00,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-banana-canela?prompt=Sweet%20banana%20cinnamon%20esfiha'
      },
      {
        id: 151,
        name: 'Banana c/ Chocolate',
        description: 'Banana, chocolate, leite condensado',
        price: 8.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-banana-chocolate?prompt=Sweet%20banana%20chocolate%20esfiha'
      },
      {
        id: 152,
        name: 'Brigadeiro c/ Morango',
        description: 'Brigadeiro, morango',
        price: 8.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-brigadeiro-morango?prompt=Sweet%20brigadeiro%20strawberry%20esfiha'
      },
      {
        id: 153,
        name: 'Chocolate',
        description: 'Chocolate ao leite',
        price: 9.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-chocolate?prompt=Sweet%20chocolate%20esfiha'
      },
      {
        id: 154,
        name: 'Chocolate Branco',
        description: 'Chocolate branco',
        price: 8.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-chocolate-branco?prompt=Sweet%20white%20chocolate%20esfiha'
      },
      {
        id: 155,
        name: 'Chocolate Branco c/ Nutella',
        description: 'Chocolate branco com nutella',
        price: 9.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-chocolate-branco-nutella?prompt=Sweet%20white%20chocolate%20nutella%20esfiha'
      },
      {
        id: 156,
        name: 'Chocolate c/ Confete',
        description: 'Chocolate com confetes',
        price: 9.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-chocolate-confete?prompt=Sweet%20chocolate%20sprinkles%20esfiha'
      },
      {
        id: 157,
        name: 'Nutella',
        description: 'Nutella',
        price: 9.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-nutella?prompt=Sweet%20nutella%20esfiha'
      },
      {
        id: 158,
        name: 'Prestígio',
        description: 'Chocolate, coco ralado, leite condensado',
        price: 9.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-prestigio?prompt=Sweet%20prestigio%20esfiha%20coconut%20chocolate'
      },
      {
        id: 159,
        name: 'Romeu e Julieta',
        description: 'Mussarela com goiabada',
        price: 6.50,
        category: 'Esfihas Doces',
        image: 'keys/esfirra-romeu-julieta?prompt=Sweet%20guava%20cheese%20esfiha'
      }
    ],
    lanches: [
      {
        id: 300,
        name: 'X-Burguer',
        description: 'Acompanha fritas, molho especial e refrigerante 200ml. Pão brioche, maionese, hambúrguer artesanal, queijo, molho',
        price: 29.00,
        category: 'Lanches',
        image: 'keys/x-burguer?prompt=X-burger%20with%20fries%20and%20soda'
      },
      {
        id: 301,
        name: 'Cheddar Nápoles',
        description: 'Acompanha fritas, molho especial e refrigerante 200ml. Pão brioche, hambúrguer artesanal, bacon, cheddar, molho',
        price: 29.00,
        category: 'Lanches',
        image: 'keys/cheddar-napoles?prompt=Cheddar%20burger%20with%20bacon%20fries%20soda'
      },
      {
        id: 302,
        name: 'X Nápoles',
        description: 'Acompanha fritas, molho especial e refrigerante 200ml. Pão brioche, maionese, alface americano, tomate, 2 hambúrgueres artesanais, ovo, presunto, bacon, queijo, molho',
        price: 35.00,
        category: 'Lanches',
        image: 'keys/x-napoles?prompt=Special%20X%20Napoles%20burger%20with%20double%20meat%20fries%20soda'
      }
    ],
    bebidas: [
      {
        id: 400,
        name: 'Água S/ Gás 500ml',
        description: 'Água sem gás 500ml',
        price: 3.50,
        category: 'Bebidas',
        image: 'keys/agua-500ml?prompt=Still%20water%20500ml%20bottle'
      },
      {
        id: 401,
        name: 'Água S/ Gás 1,5 Litros',
        description: 'Água sem gás 1,5 litros',
        price: 6.00,
        category: 'Bebidas',
        image: 'keys/agua-1-5l?prompt=Still%20water%201.5%20liter%20bottle'
      },
      {
        id: 402,
        name: 'Brahma (Malte)',
        description: 'Brahma (Malte) Lata',
        price: 7.00,
        category: 'Bebidas',
        image: 'keys/brahma-malte?prompt=Brahma%20malt%20beer%20can'
      },
      {
        id: 403,
        name: 'Skol',
        description: 'Skol Lata',
        price: 6.00,
        category: 'Bebidas',
        image: 'keys/skol-lata?prompt=Skol%20beer%20can'
      },
      {
        id: 404,
        name: 'Heineken 330ml',
        description: 'Heineken 330ml',
        price: 12.00,
        category: 'Bebidas',
        image: 'keys/heineken-330ml?prompt=Heineken%20beer%20330ml%20bottle'
      },
      {
        id: 405,
        name: 'Coca Cola de 2 Litros',
        description: 'Coca Cola 2 litros',
        price: 16.00,
        category: 'Bebidas',
        image: 'keys/coca-cola-2l?prompt=Coca%20Cola%202%20liter%20bottle'
      },
      {
        id: 406,
        name: 'Coca Cola Zero de 2 Litros',
        description: 'Coca Cola Zero 2 litros',
        price: 17.00,
        category: 'Bebidas',
        image: 'keys/coca-cola-zero-2l?prompt=Coca%20Cola%20Zero%202%20liter%20bottle'
      },
      {
        id: 407,
        name: 'Fanta de 2 Litros',
        description: 'Fanta 2 litros',
        price: 15.00,
        category: 'Bebidas',
        flavors: ['Laranja'],
        selectedFlavor: '',
        image: 'keys/fanta-2l?prompt=Fanta%20orange%202%20liter%20bottle'
      },
      {
        id: 408,
        name: 'Guaraná de 2 Litros',
        description: 'Guaraná 2 litros',
        price: 15.00,
        category: 'Bebidas',
        image: 'keys/guarana-2l?prompt=Guarana%20soda%202%20liter%20bottle'
      },
      {
        id: 409,
        name: 'Kuait de 2 Litros',
        description: 'Kuait 2 litros',
        price: 13.00,
        category: 'Bebidas',
        image: 'keys/kuait-2l?prompt=Kuait%20soda%202%20liter%20bottle'
      },
      {
        id: 410,
        name: 'Refrigerante de 600ml',
        description: 'Refrigerante 600ml',
        price: 10.00,
        category: 'Bebidas',
        flavors: ['Coca-Cola'],
        selectedFlavor: '',
        image: 'keys/refrigerante-600ml?prompt=Coca%20Cola%20600ml%20bottle'
      },
      {
        id: 411,
        name: 'Refrigerante de Lata',
        description: 'Refrigerante lata',
        price: 7.00,
        category: 'Bebidas',
        flavors: ['Coca-Cola'],
        selectedFlavor: '',
        image: 'keys/refrigerante-lata?prompt=Coca%20Cola%20can'
      },
      {
        id: 412,
        name: 'Coca-Cola Zero Lata',
        description: 'Coca-Cola Zero lata',
        price: 8.00,
        category: 'Bebidas',
        image: 'keys/coca-zero-lata?prompt=Coca%20Cola%20Zero%20can'
      },
      {
        id: 413,
        name: 'Schweppes 1,5L',
        description: 'Schweppes 1,5 litros',
        price: 15.00,
        category: 'Bebidas',
        image: 'keys/schweppes-1-5l?prompt=Schweppes%201.5%20liter%20bottle'
      },
      {
        id: 414,
        name: 'Sprite de 2 Litros',
        description: 'Sprite 2 litros',
        price: 15.00,
        category: 'Bebidas',
        image: 'keys/sprite-2l?prompt=Sprite%202%20liter%20bottle'
      },
      {
        id: 415,
        name: 'Suco 1 Litro',
        description: 'Suco natural 1 litro',
        price: 11.00,
        category: 'Bebidas',
        flavors: ['Abacaxi', 'Uva', 'Laranja', 'Limão', 'Maracujá', 'Acerola', 'Caju'],
        selectedFlavor: '',
        image: 'keys/suco-1l?prompt=Natural%20fruit%20juice%201%20liter'
      },
      {
        id: 416,
        name: 'Suco Tampico 2 Litros',
        description: 'Suco Tampico 2 litros',
        price: 15.00,
        category: 'Bebidas',
        image: 'keys/suco-tampico-2l?prompt=Tampico%20juice%202%20liter'
      },
      {
        id: 417,
        name: 'H2O Limoneto 1,5L',
        description: 'H2O Limoneto 1,5 litros',
        price: 15.00,
        category: 'Bebidas',
        image: 'keys/h2o-limoneto?prompt=H2O%20limoneto%201.5%20liter'
      },
      {
        id: 418,
        name: 'Vinho Pérgola Tinto Suave 1L',
        description: 'Vinho Pérgola Tinto Suave 1 litro',
        price: 35.00,
        category: 'Bebidas',
        image: 'keys/vinho-pergola?prompt=Pergola%20red%20wine%201%20liter'
      },
      {
        id: 419,
        name: 'Coca-Cola Zero 600ml',
        description: 'Coca-Cola Zero 600ml',
        price: 11.00,
        category: 'Bebidas',
        image: 'keys/coca-zero-600ml?prompt=Coca%20Cola%20Zero%20600ml%20bottle'
      }
    ],
    beirutes: [
      {
        id: 500,
        name: 'Beirute Peito de Peru',
        description: 'Acompanham batatas fritas e molho especial. Peito de peru, presunto, queijo, tomate, alface, ovos, maionese',
        price: 45.00,
        category: 'Beirutes',
        image: 'keys/beirute-peito-peru?prompt=Turkey%20breast%20beirut%20sandwich%20with%20fries'
      },
      {
        id: 501,
        name: 'Beirute Filé de Frango',
        description: 'Acompanham batatas fritas e molho especial. Filé de frango, presunto, queijo, tomate, alface, ovos, maionese',
        price: 45.00,
        category: 'Beirutes',
        image: 'keys/beirute-file-frango?prompt=Chicken%20fillet%20beirut%20sandwich%20with%20fries'
      },
      {
        id: 502,
        name: 'Beirute Filé Mignon',
        description: 'Acompanham batatas fritas e molho especial. Filé Mignon, presunto, queijo, tomate, alface, ovos, maionese',
        price: 55.00,
        category: 'Beirutes',
        image: 'keys/beirute-file-mignon?prompt=Filet%20mignon%20beirut%20sandwich%20with%20fries'
      },
      {
        id: 503,
        name: 'Beirute Hamburger',
        description: 'Acompanham batatas fritas e molho especial. Hambúrguer, presunto, queijo, tomate, alface, ovos, maionese',
        price: 45.00,
        category: 'Beirutes',
        image: 'keys/beirute-hamburger?prompt=Hamburger%20beirut%20sandwich%20with%20fries'
      },
      {
        id: 504,
        name: 'Beirute Calabresa',
        description: 'Acompanham batatas fritas e molho especial. Calabresa, presunto, queijo, tomate, alface, ovos, maionese',
        price: 45.00,
        category: 'Beirutes',
        image: 'keys/beirute-calabresa?prompt=Pepperoni%20beirut%20sandwich%20with%20fries'
      }
    ],
    fogazzas: [
      {
        id: 600,
        name: 'Fogazza Salgada',
        description: 'Fogazza Salgada - Todos os sabores de pizzas salgadas',
        price: 29.00,
        category: 'Fogazzas',
        flavors: 'pizzas', // Special flag to use pizza flavors
        image: 'keys/fogazza-salgada?prompt=Savory%20focaccia%20with%20pizza%20flavors'
      },
      {
        id: 601,
        name: 'Fogazza Salgada Especial',
        description: 'Fogazza Salgada Especial',
        price: 32.00,
        category: 'Fogazzas',
        flavors: ['Mineira', 'Paizão', 'Romana'],
        selectedFlavor: '',
        image: 'keys/fogazza-salgada-especial?prompt=Special%20savory%20focaccia'
      },
      {
        id: 602,
        name: 'Fogazza Doce',
        description: 'Massa recheada - Chocolate, Romeu e Julieta, Prestígio',
        price: 32.00,
        category: 'Fogazzas',
        flavors: ['Chocolate', 'Romeu e Julieta', 'Prestígio'],
        selectedFlavor: '',
        image: 'keys/fogazza-doce?prompt=Sweet%20focaccia%20with%20chocolate%20guava%20prestigio'
      }
    ],
    adicionais: [
      {
        id: 700,
        name: 'Atum',
        description: 'Atum para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/atum-adicional?prompt=Tuna%20portion%20for%20pizza'
      },
      {
        id: 701,
        name: 'Bacon',
        description: 'Fatias de bacon para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/bacon-adicional?prompt=Bacon%20strips%20for%20pizza'
      },
      {
        id: 702,
        name: 'Champignon',
        description: 'Champignon fresco para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/champignon-adicional?prompt=Fresh%20mushrooms%20for%20pizza'
      },
      {
        id: 703,
        name: 'Copa',
        description: 'Copa fatiada para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/copa-adicional?prompt=Copa%20slices%20for%20pizza'
      },
      {
        id: 704,
        name: 'Calabresa',
        description: 'Calabresa para pizza inteira ou meia',
        priceInteira: 13.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/calabresa-adicional?prompt=Pepperoni%20for%20pizza'
      },
      {
        id: 705,
        name: 'Escarola',
        description: 'Escarola refogada para pizza inteira ou meia',
        priceInteira: 13.00,
        priceMeia: 7.00,
        category: 'Adicionais',
        image: 'keys/escarola-adicional?prompt=Sauteed%20escarole%20for%20pizza'
      },
      {
        id: 706,
        name: 'Frango',
        description: 'Frango desfiado para pizza inteira ou meia',
        priceInteira: 13.00,
        priceMeia: 7.00,
        category: 'Adicionais',
        image: 'keys/frango-adicional?prompt=Shredded%20chicken%20for%20pizza'
      },
      {
        id: 707,
        name: 'Lombo',
        description: 'Lombo canadense para pizza inteira ou meia',
        priceInteira: 13.00,
        priceMeia: 7.00,
        category: 'Adicionais',
        image: 'keys/lombo-adicional?prompt=Canadian%20bacon%20for%20pizza'
      },
      {
        id: 708,
        name: 'Palmito',
        description: 'Palmito para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/palmito-adicional?prompt=Palm%20hearts%20for%20pizza'
      },
      {
        id: 709,
        name: 'Peito de Peru',
        description: 'Peito de peru para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/peito-peru-adicional?prompt=Turkey%20breast%20for%20pizza'
      },
      {
        id: 710,
        name: 'Presunto',
        description: 'Presunto para pizza inteira ou meia',
        priceInteira: 13.00,
        priceMeia: 7.00,
        category: 'Adicionais',
        image: 'keys/presunto-adicional?prompt=Ham%20for%20pizza'
      },
      {
        id: 711,
        name: 'Pepperoni',
        description: 'Pepperoni para pizza inteira ou meia',
        priceInteira: 15.00,
        priceMeia: 9.00,
        category: 'Adicionais',
        image: 'keys/pepperoni-adicional?prompt=Pepperoni%20for%20pizza'
      },
      {
        id: 712,
        name: 'Salsicha',
        description: 'Salsicha para pizza inteira ou meia',
        priceInteira: 12.00,
        priceMeia: 6.00,
        category: 'Adicionais',
        image: 'keys/salsicha-adicional?prompt=Sausage%20for%20pizza'
      },
      {
        id: 713,
        name: 'Salame',
        description: 'Salame para pizza inteira ou meia',
        priceInteira: 15.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/salame-adicional?prompt=Salami%20for%20pizza'
      },
      {
        id: 714,
        name: 'Tomate Seco',
        description: 'Tomate seco para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/tomate-seco-adicional?prompt=Sun%20dried%20tomato%20for%20pizza'
      },
      {
        id: 715,
        name: 'Ervilha',
        description: 'Ervilha para pizza inteira ou meia',
        priceInteira: 12.00,
        priceMeia: 6.00,
        category: 'Adicionais',
        image: 'keys/ervilha-adicional?prompt=Green%20peas%20for%20pizza'
      },
      {
        id: 716,
        name: 'Milho',
        description: 'Milho para pizza inteira ou meia',
        priceInteira: 8.00,
        priceMeia: 5.00,
        category: 'Adicionais',
        image: 'keys/milho-adicional?prompt=Corn%20for%20pizza'
      },
      {
        id: 717,
        name: 'Tomate Rodela',
        description: 'Tomate em rodelas para pizza inteira ou meia',
        priceInteira: 8.00,
        priceMeia: 5.00,
        category: 'Adicionais',
        image: 'keys/tomate-rodela-adicional?prompt=Sliced%20tomato%20for%20pizza'
      },
      {
        id: 718,
        name: 'Cebola',
        description: 'Cebola para pizza inteira ou meia',
        priceInteira: 7.00,
        priceMeia: 4.00,
        category: 'Adicionais',
        image: 'keys/cebola-adicional?prompt=Onion%20for%20pizza'
      },
      {
        id: 719,
        name: 'Tomate Cereja',
        description: 'Tomate cereja para pizza inteira ou meia',
        priceInteira: 7.00,
        priceMeia: 4.00,
        category: 'Adicionais',
        image: 'keys/tomate-cereja-adicional?prompt=Cherry%20tomato%20for%20pizza'
      },
      {
        id: 720,
        name: 'Batata Palha',
        description: 'Batata palha para pizza inteira ou meia',
        priceInteira: 7.00,
        priceMeia: 4.00,
        category: 'Adicionais',
        image: 'keys/batata-palha-adicional?prompt=Potato%20sticks%20for%20pizza'
      },
      {
        id: 721,
        name: 'Pimentão',
        description: 'Pimentão para pizza inteira ou meia',
        priceInteira: 7.00,
        priceMeia: 4.00,
        category: 'Adicionais',
        image: 'keys/pimentao-adicional?prompt=Bell%20pepper%20for%20pizza'
      },
      {
        id: 722,
        name: 'Ovos',
        description: 'Ovos para pizza inteira ou meia',
        priceInteira: 9.00,
        priceMeia: 5.00,
        category: 'Adicionais',
        image: 'keys/ovos-adicional?prompt=Eggs%20for%20pizza'
      },
      {
        id: 723,
        name: 'Alho Poró',
        description: 'Alho poró para pizza inteira ou meia',
        priceInteira: 7.00,
        priceMeia: 4.00,
        category: 'Adicionais',
        image: 'keys/alho-poro-adicional?prompt=Leek%20for%20pizza'
      },
      {
        id: 724,
        name: 'Alho',
        description: 'Alho para pizza inteira ou meia',
        priceInteira: 15.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/alho-adicional?prompt=Garlic%20for%20pizza'
      },
      {
        id: 725,
        name: 'Camarão',
        description: 'Camarão para pizza inteira ou meia',
        priceInteira: 24.00,
        priceMeia: 12.00,
        category: 'Adicionais',
        image: 'keys/camarao-adicional?prompt=Shrimp%20for%20pizza'
      },
      {
        id: 726,
        name: 'Carne Seca',
        description: 'Carne seca para pizza inteira ou meia',
        priceInteira: 24.00,
        priceMeia: 12.00,
        category: 'Adicionais',
        image: 'keys/carne-seca-adicional?prompt=Dried%20meat%20for%20pizza'
      },
      {
        id: 727,
        name: 'Picanha',
        description: 'Picanha para pizza inteira ou meia',
        priceInteira: 20.00,
        priceMeia: 15.00,
        category: 'Adicionais',
        image: 'keys/picanha-adicional?prompt=Picanha%20for%20pizza'
      },
      {
        id: 728,
        name: 'Catu Original',
        description: 'Catupiry original para pizza inteira ou meia',
        priceInteira: 24.00,
        priceMeia: 12.00,
        category: 'Adicionais',
        image: 'keys/catu-original-adicional?prompt=Original%20catupiry%20for%20pizza'
      },
      {
        id: 729,
        name: 'Catu Tradicional',
        description: 'Catupiry tradicional para pizza inteira ou meia',
        priceInteira: 14.00,
        priceMeia: 8.00,
        category: 'Adicionais',
        image: 'keys/catu-tradicional-adicional?prompt=Traditional%20catupiry%20for%20pizza'
      },
      {
        id: 730,
        name: 'Morango',
        description: 'Morango para pizza inteira ou meia',
        priceInteira: 12.00,
        priceMeia: 6.00,
        category: 'Adicionais',
        image: 'keys/morango-adicional?prompt=Strawberry%20for%20pizza'
      },
      {
        id: 731,
        name: 'Batata',
        description: 'Batata para pizza inteira',
        priceInteira: 15.00,
        priceMeia: 0,
        category: 'Adicionais',
        image: 'keys/batata-adicional?prompt=Potato%20for%20pizza'
      }
    ]
  });
  
  const [editMode, setEditMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  });
  const [addressLoading, setAddressLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('entrega');
  const [searchTerm, setSearchTerm] = useState('');

  // Pizza customization states
  const [pizzaType, setPizzaType] = useState(''); // 'normal', 'meio-meio', '3-sabores'
  const [selectedSize, setSelectedSize] = useState('grande');
  const [selectedBorder, setSelectedBorder] = useState({ name: 'Sem borda recheada', price: 0 });
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedAdicionais, setSelectedAdicionais] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Beverage flavor state
  const [selectedBeverageFlavor, setSelectedBeverageFlavor] = useState('');

  const categories = ['Todas', 'Pizzas', 'Pizzas Doces', 'Esfihas Salgadas', 'Esfihas Doces', 'Lanches', 'Bebidas', 'Beirutes', 'Fogazzas', 'Adicionais'];
  
  const borderOptions = [
    { name: 'Sem borda recheada', price: 0 },
    { name: 'Borda Cheddar', price: 15.00 },
    { name: 'Borda Requeijão', price: 15.00 },
    { name: 'Borda Catupiry Original', price: 20.00 },
    { name: 'Borda Chocolate', price: 15.00 }
  ];

  const sizeOptions = [
    { name: 'Broto', key: 'broto' },
    { name: 'Grande', key: 'grande' }
  ];

  const pizzariaPhone = '5511942545151
  '; // Número do WhatsApp da pizzaria

  // Verificar se há parâmetro admin na URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowAdminButton(true);
    }
  }, []);

  const getAllProducts = () => {
    return [
      ...products.pizzas, 
      ...products.pizzasDoces,
      ...products.esfihasSalgadas, 
      ...products.esfihasDoces,
      ...products.lanches,
      ...products.bebidas, 
      ...products.beirutes,
      ...products.fogazzas,
      ...products.adicionais
    ];
  };

  const getFilteredProducts = () => {
    const allProducts = getAllProducts();
    let filtered = allProducts;
    
    // Filter by category
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const buscarCEP = async (cep) => {
    if (cep.length !== 8) return;
    
    setAddressLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setCustomerData(prev => ({
          ...prev,
          address: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf
        }));
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
    setAddressLoading(false);
  };

  const calculatePrice = (flavors, border, size, adicionais = []) => {
    if (flavors.length === 0) return 0;
    
    let basePrice = 0;
    if (flavors.length === 1) {
      basePrice = size === 'grande' ? (flavors[0].priceGrande || flavors[0].price || 0) : (flavors[0].priceBroto || flavors[0].price || 0);
    } else {
      // Para pizza meio a meio ou 3 sabores, considera o valor da pizza maior
      const prices = flavors.map(f => size === 'grande' ? (f.priceGrande || f.price || 0) : (f.priceBroto || f.price || 0));
      basePrice = Math.max(...prices);
    }
    
    const adicionaisPrice = adicionais.reduce((total, adicional) => total + (adicional.price || 0), 0);
    return basePrice + (border.price || 0) + adicionaisPrice;
  };

  const addToCart = () => {
    let finalPrice = 0;
    if (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') {
      const flavorsToUse = selectedFlavors.length > 0 ? selectedFlavors : [selectedProduct];
      finalPrice = calculatePrice(flavorsToUse, selectedBorder, selectedSize, selectedAdicionais) * quantity;
    } else {
      finalPrice = (selectedProduct.price || 0) * quantity;
    }

    const item = {
      id: Date.now(),
      product: selectedProduct,
      flavors: selectedFlavors,
      border: selectedBorder,
      size: selectedSize,
      adicionais: selectedAdicionais,
      quantity: quantity,
      beverageFlavor: selectedBeverageFlavor,
      price: finalPrice,
      observation: ''
    };
    setCartItems([...cartItems, item]);
    resetProductSelection();
    setShowCartModal(true);
  };

  const resetProductSelection = () => {
    setSelectedFlavors([]);
    setSelectedBorder(borderOptions[0]);
    setSelectedSize('grande');
    setSelectedAdicionais([]);
    setQuantity(1);
    setPizzaType('');
    setSelectedBeverageFlavor('');
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const gerarResumoWhatsApp = () => {
    let mensagem = `*🍕 PEDIDO NÁPOLES PIZZARIA*\n\n`;
    
    // Dados do cliente
    mensagem += `*📋 DADOS DO CLIENTE:*\n`;
    mensagem += `Nome: ${customerData.name}\n`;
    mensagem += `Telefone: ${customerData.phone}\n\n`;
    
    // Endereço
    if (deliveryOption === 'entrega') {
      mensagem += `*📍 ENDEREÇO DE ENTREGA:*\n`;
      mensagem += `${customerData.address}, ${customerData.number}\n`;
      if (customerData.complement) mensagem += `${customerData.complement}\n`;
      mensagem += `${customerData.neighborhood} - ${customerData.city}/${customerData.state}\n`;
      mensagem += `CEP: ${customerData.cep}\n\n`;
    } else {
      mensagem += `*🏪 RETIRADA NO LOCAL*\n\n`;
    }
    
    // Itens do pedido
    mensagem += `*🛒 ITENS DO PEDIDO:*\n`;
    cartItems.forEach((item, index) => {
      mensagem += `${index + 1}. *${item.product.name}*\n`;
      
      if (item.size) {
        mensagem += `   Tamanho: ${item.size === 'grande' ? 'Grande' : 'Broto'}\n`;
      }
      
      if (item.flavors && item.flavors.length > 1) {
        mensagem += `   Sabores: ${item.flavors.map(f => f.name).join(', ')}\n`;
      }
      
      if (item.border && item.border.price > 0) {
        mensagem += `   Borda: ${item.border.name}\n`;
      }
      
      if (item.beverageFlavor) {
        mensagem += `   Sabor: ${item.beverageFlavor}\n`;
      }
      
      if (item.adicionais && item.adicionais.length > 0) {
        mensagem += `   Adicionais: ${item.adicionais.map(a => a.name).join(', ')}\n`;
      }
      
      if (item.observation) {
        mensagem += `   Obs: ${item.observation}\n`;
      }
      
      mensagem += `   Qtd: ${item.quantity} - R$ ${item.price.toFixed(2)}\n\n`;
    });
    
    // Resumo financeiro
    const subtotal = getTotalPrice();
    const taxaEntrega = deliveryOption === 'entrega' ? 9.00 : 0;
    const total = subtotal + taxaEntrega;
    
    mensagem += `*💰 RESUMO:*\n`;
    mensagem += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    if (deliveryOption === 'entrega') {
      mensagem += `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}\n`;
    }
    mensagem += `*Total: R$ ${total.toFixed(2)}*\n\n`;
    
    // Forma de pagamento
    mensagem += `*💳 PAGAMENTO:*\n`;
    mensagem += `${paymentMethod}\n\n`;
    
    mensagem += `Obrigado pela preferência! 🙏`;
    
    return encodeURIComponent(mensagem);
  };

  const enviarParaWhatsApp = () => {
    const mensagem = gerarResumoWhatsApp();
    const url = `https://wa.me/${pizzariaPhone}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  const saveProduct = (product) => {
    const categoryMap = {
      'Pizzas': 'pizzas',
      'Pizzas Doces': 'pizzasDoces',
      'Esfihas Salgadas': 'esfihasSalgadas',
      'Esfihas Doces': 'esfihasDoces',
      'Lanches': 'lanches',
      'Bebidas': 'bebidas',
      'Beirutes': 'beirutes',
      'Fogazzas': 'fogazzas',
      'Adicionais': 'adicionais'
    };
    
    const category = categoryMap[product.category] || 'pizzas';
    
    if (product.id) {
      // Edit existing
      const updatedProducts = { ...products };
      const categoryProducts = updatedProducts[category];
      const index = categoryProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        categoryProducts[index] = product;
      }
      setProducts(updatedProducts);
    } else {
      // Add new
      const newProduct = { ...product, id: Date.now() };
      setProducts({
        ...products,
        [category]: [...(products[category] || []), newProduct]
      });
    }
    setEditingProduct(null);
    setEditMode(false);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = { ...products };
    Object.keys(updatedProducts).forEach(category => {
      updatedProducts[category] = updatedProducts[category].filter(p => p.id !== productId);
    });
    setProducts(updatedProducts);
  };

  // Header Component
  const Header = () => (
    <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-3 hover:bg-red-600 rounded-lg p-2 transition-colors"
        >
          <div className="w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center shadow-md">
            🍕
          </div>
          <div className="text-left">
            <div className="font-bold text-lg">Nápoles</div>
            <div className="text-xs text-red-100">Pizzaria</div>
          </div>
        </button>
        <div className="flex gap-4 text-sm">
          <button 
            onClick={() => setCurrentView('home')} 
            className={`flex items-center gap-1 hover:underline transition-colors ${currentView === 'home' ? 'text-yellow-300' : ''}`}
          >
            <Home size={16} />
            Início
          </button>
          <button 
            onClick={() => setCurrentView('menu')} 
            className={`hover:underline transition-colors ${currentView === 'menu' ? 'text-yellow-300' : ''}`}
          >
            Cardápio
          </button>
          <button 
            onClick={() => setCurrentView('cart')} 
            className={`flex items-center gap-1 hover:underline transition-colors ${currentView === 'cart' ? 'text-yellow-300' : ''}`}
          >
            <ShoppingCart size={16} />
            Carrinho ({cartItems.length})
          </button>
          {editMode && (
            <button onClick={() => setEditMode(!editMode)} className="hover:underline text-yellow-300">
              Sair Admin
            </button>
          )}
          {!editMode && showAdminButton && (
            <button onClick={() => setEditMode(!editMode)} className="hover:underline">
              Admin
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Tela Inicial
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-md mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo à Nápoles!</h1>
            <p className="text-gray-600">
              Escolha como você quer montar sua pizza:
            </p>
          </div>

          {/* Pizza Options */}
          <div className="space-y-4 mb-8">
            <div 
              onClick={() => {
                setPizzaType('normal');
                setCurrentView('menu');
              }}
              className="bg-white rounded-lg p-6 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Pizza Inteira</h3>
                  <p className="text-gray-600 text-sm">Um sabor delicioso</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => {
                setPizzaType('meio-meio');
                setCurrentView('menu');
              }}
              className="bg-white rounded-lg p-6 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Pizza Meio a Meio</h3>
                  <p className="text-gray-600 text-sm">Dois sabores na mesma pizza</p>
                  <p className="text-xs text-orange-600 font-medium">Valor baseado no sabor com maior valor</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => {
                setPizzaType('3-sabores');
                setCurrentView('menu');
              }}
              className="bg-white rounded-lg p-6 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Pizza 3 Sabores</h3>
                  <p className="text-gray-600 text-sm">Três sabores deliciosos</p>
                  <p className="text-xs text-orange-600 font-medium">Valor baseado no sabor com maior valor</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentView('menu')}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mb-6"
          >
            Ver Cardápio Completo
          </button>

          {/* Footer */}
          <div className="bg-gray-800 text-white rounded-lg p-4 text-center">
            <h3 className="font-bold mb-2">Nápoles Pizzaria</h3>
            <p className="text-sm mb-2">A melhor pizza da Guarulhos é aqui!</p>
            
            <div className="flex justify-center items-center gap-1 mb-2">
              {[1,2,3,4,5].map(star => (
                <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm ml-2">4.8 (150+ avaliações)</span>
            </div>
            
            <div className="text-xs space-y-1">
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} />
                <span>Av. José Miguel Ackel, 1259</span>
              </div>
              <div>Guarulhos - SP</div>
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} />
                <span>(11) 2087-7901 | (11) 2087-7902</span>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-600">
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href="https://www.google.com/search?sa=X&sca_esv=cd968c0da757ee90&biw=1366&bih=633&sxsrf=AHTn8zoC3BB8dZruYv7-jiPw4gTtUj39Ww:1742477111994&kgmid=/g/11ghnm42_c&q=Napoles+Pizzaria+e+Esfiharia&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=7cebd853f876f233"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-yellow-300"
                  >
                    <span>⭐ Avalie a gente no</span>
                    <strong>Google</strong>
                  </a>
                  <a 
                    href="https://www.instagram.com/pizzarianapoles_/"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-yellow-300"
                  >
                    <span>📸</span>
                    <strong>Instagram</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Menu Principal
  if (currentView === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-md mx-auto p-4">
          {/* Back Button */}
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-4 flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <Home size={16} />
            Voltar
          </button>

          {/* Pizza Type Banner */}
          {pizzaType && (
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">
                  {pizzaType === 'normal' && '🍕 Pizza Inteira'}
                  {pizzaType === 'meio-meio' && '🍕 Pizza Meio a Meio'}
                  {pizzaType === '3-sabores' && '🍕 Pizza 3 Sabores'}
                </span>
                <button 
                  onClick={() => {
                    setPizzaType('');
                    setCurrentView('home');
                  }}
                  className="ml-auto text-orange-600 hover:text-orange-800"
                >
                  <X size={16} />
                </button>
              </div>
              {pizzaType !== 'normal' && (
                <p className="text-xs text-orange-600 mt-1">
                  Valor baseado no sabor com maior valor
                </p>
              )}
            </div>
          )}

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Nosso Cardápio</h1>
            <p className="text-gray-600 text-sm">
              Escolha entre nossas opções de pizzas artesanais, fogazzas, esfirras, adicionais e bebidas.
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Pesquise por qualquer item do cardápio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchTerm(''); // Clear search when changing category
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-red-700 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>{getFilteredProducts().length}</strong> resultado(s) encontrado(s) para "<strong>{searchTerm}</strong>"
              </p>
            </div>
          )}

          {/* Add Product Button (Admin) */}
          {editMode && (
            <button
              onClick={() => {
                setEditingProduct({
                  name: '',
                  description: '',
                  price: 0,
                  priceGrande: 0,
                  priceBroto: 39.00,
                  category: selectedCategory === 'Todas' ? 'Pizzas' : selectedCategory,
                  image: '',
                  flavors: selectedCategory === 'Bebidas' ? [] : undefined
                });
              }}
              className="w-full mb-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Adicionar Produto
            </button>
          )}

          {/* Products */}
          <div className="space-y-4">
            {getFilteredProducts().length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  {searchTerm ? 'Nenhum produto encontrado com este termo de busca.' : 'Nenhum produto encontrado nesta categoria.'}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Limpar Busca
                  </button>
                )}
              </div>
            ) : (
              getFilteredProducts().map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex gap-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      
                      {/* Show flavors for beverages and fogazzas */}
                      {product.flavors && product.flavors.length > 0 && (
                        <p className="text-xs text-blue-600 mb-2">
                          Sabores: {product.flavors === 'pizzas' ? 'Todos os sabores de pizzas salgadas' : product.flavors.join(', ')}
                        </p>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <div>
                          {(product.priceGrande !== undefined && product.priceGrande !== null) ? (
                            <div className="text-sm">
                              <div className="text-lg font-bold text-green-700">
                                Grande: R$ {(product.priceGrande || 0).toFixed(2)}
                              </div>
                              {(product.priceBroto !== undefined && product.priceBroto !== null && product.priceBroto > 0) && (
                                <div className="text-sm font-bold text-green-600">
                                  Broto: R$ {(product.priceBroto || 0).toFixed(2)}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-green-700">
                              R$ {(product.price || 0).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {editMode && (
                            <>
                              <button
                                onClick={() => setEditingProduct(product)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => deleteProduct(product.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 size={16} />
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => {
                              setSelectedProduct(product);
                              setCurrentView('product');
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Edit Product Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {editingProduct.id ? 'Editar Produto' : 'Novo Produto'}
                </h2>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome do produto"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                />
                
                <textarea
                  placeholder="Descrição"
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                  className="w-full p-3 border rounded-lg h-24"
                />
                
                <select
                  value={editingProduct.category}
                  onChange={(e) => {
                    const newCategory = e.target.value;
                    setEditingProduct({
                      ...editingProduct, 
                      category: newCategory,
                      flavors: (newCategory === 'Bebidas' || newCategory === 'Fogazzas') ? [] : undefined
                    });
                  }}
                  className="w-full p-3 border rounded-lg"
                >
                  {categories.filter(c => c !== 'Todas').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                {(editingProduct.category === 'Pizzas' || editingProduct.category === 'Pizzas Doces') ? (
                  <>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Preço Broto"
                      value={editingProduct.priceBroto || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, priceBroto: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border rounded-lg"
                    />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Preço Grande"
                      value={editingProduct.priceGrande || ''}
                      onChange={(e) => setEditingProduct({...editingProduct, priceGrande: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border rounded-lg"
                    />
                  </>
                ) : (
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Preço"
                    value={editingProduct.price || ''}
                    onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value) || 0})}
                    className="w-full p-3 border rounded-lg"
                  />
                )}

                {/* Flavors field for beverages and fogazzas */}
                {(editingProduct.category === 'Bebidas' || editingProduct.category === 'Fogazzas') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sabores disponíveis (opcional)
                    </label>
                    <textarea
                      placeholder="Digite os sabores separados por vírgula (ex: Coca-Cola, Pepsi, Guaraná)"
                      value={editingProduct.flavors ? (editingProduct.flavors === 'pizzas' ? 'pizzas' : editingProduct.flavors.join(', ')) : ''}
                      onChange={(e) => {
                        const flavorsText = e.target.value;
                        if (flavorsText === 'pizzas') {
                          setEditingProduct({
                            ...editingProduct,
                            flavors: 'pizzas'
                          });
                        } else {
                          const flavorsArray = flavorsText.split(',').map(f => f.trim()).filter(f => f.length > 0);
                          setEditingProduct({
                            ...editingProduct,
                            flavors: flavorsArray
                          });
                        }
                      }}
                      className="w-full p-3 border rounded-lg h-20"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {editingProduct.category === 'Fogazzas' ? 'Digite "pizzas" para usar todos os sabores de pizzas salgadas, ou liste sabores específicos' : 'Deixe vazio se a bebida não tiver sabores'}
                    </p>
                  </div>
                )}
                
                <input
                  type="text"
                  placeholder="URL da imagem"
                  value={editingProduct.image || ''}
                  onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                />
                
                <button
                  onClick={() => saveProduct(editingProduct)}
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Página do Produto
  if (currentView === 'product' && selectedProduct) {
    const maxFlavors = pizzaType === '3-sabores' ? 3 : pizzaType === 'meio-meio' ? 2 : 1;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-md mx-auto p-4">
          {/* Back Button */}
          <button 
            onClick={() => setCurrentView('menu')}
            className="mb-4 flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <Home size={16} />
            Voltar
          </button>
          
          <div className="bg-orange-100 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                🔥
              </div>
              <span className="font-bold text-orange-800">Personalize seu produto</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{selectedProduct.description}</p>
            
            {/* Size Selection for Pizza */}
            {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Tamanho:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <input
                      type="radio"
                      name="size"
                      checked={selectedSize === 'grande'}
                      onChange={() => setSelectedSize('grande')}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="flex-1">Grande</span>
                    <span className="font-bold">
                      R$ {((selectedProduct.priceGrande !== undefined && selectedProduct.priceGrande !== null) ? selectedProduct.priceGrande : 0).toFixed(2)}
                    </span>
                  </label>
                  {(selectedProduct.priceBroto !== undefined && selectedProduct.priceBroto !== null && selectedProduct.priceBroto > 0) && (
                    <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name="size"
                        checked={selectedSize === 'broto'}
                        onChange={() => setSelectedSize('broto')}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="flex-1">Broto</span>
                      <span className="font-bold">
                        R$ {((selectedProduct.priceBroto !== undefined && selectedProduct.priceBroto !== null) ? selectedProduct.priceBroto : 0).toFixed(2)}
                      </span>
                    </label>
                  )}
                </div>
              </div>
            )}

            {/* Pizza Selection for Multiple Flavors */}
            {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && maxFlavors > 1 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Escolha {maxFlavors === 2 ? '2' : '3'} sabores:</h3>
                
                {/* Progress indicator */}
                <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>{selectedFlavors.length}/{maxFlavors}</strong> sabores selecionados
                    {selectedFlavors.length > 0 && (
                      <span className="block mt-1">
                        Valor baseado no sabor com maior valor: R$ {
                          selectedSize === 'grande' 
                            ? Math.max(...selectedFlavors.map(f => f.priceGrande || 0)).toFixed(2)
                            : Math.max(...selectedFlavors.map(f => f.priceBroto || 0)).toFixed(2)
                        }
                      </span>
                    )}
                  </p>
                </div>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {(selectedProduct.category === 'Pizzas' ? products.pizzas : products.pizzasDoces).map(pizza => {
                    const isSelected = selectedFlavors.some(f => f.id === pizza.id);
                    const isDisabled = !isSelected && selectedFlavors.length >= maxFlavors;
                    
                    return (
                      <label 
                        key={pizza.id} 
                        className={`flex items-center gap-3 p-2 rounded transition-colors ${
                          isDisabled ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
                        } ${isSelected ? 'bg-green-50 border border-green-200' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => {
                            if (e.target.checked) {
                              if (selectedFlavors.length < maxFlavors) {
                                setSelectedFlavors([...selectedFlavors, pizza]);
                              }
                            } else {
                              setSelectedFlavors(selectedFlavors.filter(f => f.id !== pizza.id));
                            }
                          }}
                          disabled={isDisabled}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="flex-1">{pizza.name}</span>
                        <span className={`font-bold ${isSelected ? 'text-green-700' : ''}`}>
                          R$ {selectedSize === 'grande' ? ((pizza.priceGrande !== undefined && pizza.priceGrande !== null) ? pizza.priceGrande : 0).toFixed(2) : ((pizza.priceBroto !== undefined && pizza.priceBroto !== null) ? pizza.priceBroto : 0).toFixed(2)}
                        </span>
                      </label>
                    );
                  })}
                </div>
                
                {selectedFlavors.length < maxFlavors && (
                  <p className="text-xs text-orange-600 mt-2 font-medium">
                    Selecione mais {maxFlavors - selectedFlavors.length} sabor{maxFlavors - selectedFlavors.length > 1 ? 'es' : ''} para continuar
                  </p>
                )}
              </div>
            )}

            {/* Single Pizza Selection */}
            {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && maxFlavors === 1 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Sabor:</h3>
                <div className="p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex-1 font-medium">{selectedProduct.name}</span>
                    <span className="font-bold text-green-700">
                      R$ {selectedSize === 'grande' ? ((selectedProduct.priceGrande !== undefined && selectedProduct.priceGrande !== null) ? selectedProduct.priceGrande : 0).toFixed(2) : ((selectedProduct.priceBroto !== undefined && selectedProduct.priceBroto !== null) ? selectedProduct.priceBroto : 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Beverage Flavor Selection */}
            {selectedProduct.category === 'Bebidas' && selectedProduct.flavors && selectedProduct.flavors.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Escolha o sabor:</h3>
                <div className="space-y-2">
                  {selectedProduct.flavors.map((flavor, index) => (
                    <label key={index} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name="beverageFlavor"
                        checked={selectedBeverageFlavor === flavor}
                        onChange={() => setSelectedBeverageFlavor(flavor)}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="flex-1">{flavor}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Fogazza Flavor Selection */}
            {selectedProduct.category === 'Fogazzas' && selectedProduct.flavors && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Escolha o sabor:</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedProduct.flavors === 'pizzas' ? (
                    // Use all pizza flavors for Fogazza Salgada
                    products.pizzas.map((pizza, index) => (
                      <label key={index} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                        <input
                          type="radio"
                          name="fogazzaFlavor"
                          checked={selectedBeverageFlavor === pizza.name}
                          onChange={() => setSelectedBeverageFlavor(pizza.name)}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="flex-1">{pizza.name}</span>
                      </label>
                    ))
                  ) : (
                    // Use specific flavors for other fogazzas
                    selectedProduct.flavors.map((flavor, index) => (
                      <label key={index} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                        <input
                          type="radio"
                          name="fogazzaFlavor"
                          checked={selectedBeverageFlavor === flavor}
                          onChange={() => setSelectedBeverageFlavor(flavor)}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="flex-1">{flavor}</span>
                      </label>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Border Selection for Pizzas */}
            {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && (
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Borda Recheada:</h3>
                <div className="space-y-2">
                  {borderOptions.map((border, index) => (
                    <label key={index} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name="border"
                        checked={selectedBorder.name === border.name}
                        onChange={() => setSelectedBorder(border)}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="flex-1">{border.name}</span>
                      {(border.price !== undefined && border.price !== null && border.price > 0) && (
                        <span className="font-bold">+ R$ {border.price.toFixed(2)}</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Adicionais Selection - Only for Pizzas, Esfirras and Lanches */}
            {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces' || 
              selectedProduct.category === 'Esfihas Salgadas' || selectedProduct.category === 'Esfihas Doces' ||
              selectedProduct.category === 'Lanches') && (
            <div className="mb-4">
              <h3 className="font-semibold mb-3">Adicionais:</h3>
              {/* Info about pricing for esfihas */}
              {(selectedProduct.category === 'Esfihas Salgadas' || selectedProduct.category === 'Esfihas Doces') && (
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2 mb-3">
                  <p className="text-xs text-yellow-800">
                    <strong>Esfihas:</strong> Qualquer adicional custa R$ 2,00
                  </p>
                </div>
              )}
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {products.adicionais.map(adicional => {
                  let price = 0;
                  if (selectedProduct.category === 'Esfihas Salgadas' || selectedProduct.category === 'Esfihas Doces') {
                    price = 2.00; // Fixed price for esfihas
                  } else if (adicional.priceInteira !== undefined && adicional.priceMeia !== undefined) {
                    // For pizzas, show both prices
                    const isLargePizza = (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && selectedSize === 'grande';
                    price = isLargePizza ? (adicional.priceInteira || 0) : (adicional.priceMeia || 0);
                  } else {
                    price = adicional.price || 0;
                  }
                  
                  return (
                    <label key={adicional.id} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedAdicionais.some(a => a.id === adicional.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const adicionalWithPrice = {
                              ...adicional,
                              price: price
                            };
                            setSelectedAdicionais([...selectedAdicionais, adicionalWithPrice]);
                          } else {
                            setSelectedAdicionais(selectedAdicionais.filter(a => a.id !== adicional.id));
                          }
                        }}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="flex-1">{adicional.name}</span>
                      {(adicional.priceInteira !== undefined && adicional.priceMeia !== undefined && (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces')) ? (
                        <div className="text-right">
                          <div className="text-xs text-gray-500">
                            Inteira: R$ {(adicional.priceInteira || 0).toFixed(2)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(adicional.priceMeia !== undefined && adicional.priceMeia !== null && adicional.priceMeia > 0) ? `Meia: R$ ${(adicional.priceMeia || 0).toFixed(2)}` : 'Meia: -'}
                          </div>
                          <div className="font-bold text-green-600">
                            + R$ {(price || 0).toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <span className="font-bold">+ R$ {(price || 0).toFixed(2)}</span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
            )}

            {/* Quantity */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Quantidade:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold text-lg min-w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-green-700">
                R$ {(selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') ? 
                  (calculatePrice(selectedFlavors.length > 0 ? selectedFlavors : [selectedProduct], selectedBorder, selectedSize, selectedAdicionais) * quantity).toFixed(2) :
                  ((selectedProduct.price || 0) * quantity).toFixed(2)
                }
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => {
                if (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') {
                  if (maxFlavors > 1) {
                    // Para pizzas múltiplas, verificar se o número correto de sabores foi selecionado
                    if (selectedFlavors.length !== maxFlavors) {
                      alert(`Por favor, selecione exatamente ${maxFlavors} sabores para continuar.`);
                      return;
                    }
                  } else {
                    // Para pizza simples, usar o produto selecionado
                    if (selectedFlavors.length === 0) {
                      setSelectedFlavors([selectedProduct]);
                    }
                  }
                }
                
                // Check if beverage requires flavor selection
                if (selectedProduct.category === 'Bebidas' && 
                    selectedProduct.flavors && 
                    selectedProduct.flavors.length > 0 && 
                    !selectedBeverageFlavor) {
                  alert('Por favor, selecione um sabor para esta bebida.');
                  return;
                }

                // Check if fogazza requires flavor selection
                if (selectedProduct.category === 'Fogazzas' && 
                    selectedProduct.flavors && 
                    !selectedBeverageFlavor) {
                  alert('Por favor, selecione um sabor para esta fogazza.');
                  return;
                }
                
                addToCart();
              }}
              disabled={
                (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && 
                maxFlavors > 1 && 
                selectedFlavors.length !== maxFlavors
              }
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                (selectedProduct.category === 'Pizzas' || selectedProduct.category === 'Pizzas Doces') && 
                maxFlavors > 1 && 
                selectedFlavors.length !== maxFlavors
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              + Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Carrinho de Compras
  if (currentView === 'cart') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-md mx-auto p-4">
          {/* Back Button */}
          <button 
            onClick={() => setCurrentView('menu')}
            className="mb-4 flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <Home size={16} />
            Voltar
          </button>

          <h1 className="text-2xl font-bold text-center mb-6">Seu Pedido</h1>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-6">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep >= 1 ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                1
              </div>
              
              <span className="text-xs mt-1">Itens</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep >= 2 ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="text-xs mt-1">Dados</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep >= 3 ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                3
              </div>
              <span className="text-xs mt-1">Pagamento</span>
            </div>
          </div>

          {checkoutStep === 1 && (
            <>
              {/* Warning Banner */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  <p className="text-sm text-yellow-800">
                    <strong>Ao escolher um item adicional, terá opção para colocar em meia pizza e na pizza inteira.</strong>
                    <br />
                    ATENTE-SE AO VALOR DE CADA OPÇÃO!!!
                  </p>
                </div>
              </div>

              {/* Include Adicionais Button */}
              <button 
                onClick={() => {
                  setSelectedCategory('Adicionais');
                  setCurrentView('menu');
                }}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 mb-4"
              >
                + Incluir Adicionais no Pedido
              </button>

              {/* Warning for Esfirras */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>Atenção:</strong> Itens adicionais para <strong>esfihas</strong> qualquer sabor o valor é <strong>R$ 2,00</strong>, para <strong>pizzas</strong> clique no botão acima.
                </p>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        {item.size && (
                          <p className="text-sm text-gray-600">
                            Tamanho: {item.size === 'grande' ? 'Grande' : 'Broto'}
                          </p>
                        )}
                        {item.flavors && item.flavors.length > 1 && (
                          <p className="text-sm text-gray-600">
                            Sabores: {item.flavors.map(f => f.name).join(', ')}
                          </p>
                        )}
                        {item.border && item.border.price > 0 && (
                          <p className="text-sm text-gray-600">
                            Borda: {item.border.name}
                          </p>
                        )}
                        {item.beverageFlavor && (
                          <p className="text-sm text-gray-600">
                            Sabor: {item.beverageFlavor}
                          </p>
                        )}
                        {item.adicionais && item.adicionais.length > 0 && (
                          <p className="text-sm text-gray-600">
                            Adicionais: {item.adicionais.map(a => a.name).join(', ')}
                          </p>
                        )}
                        {item.observation && (
                          <p className="text-sm text-blue-600">
                            Obs: {item.observation}
                          </p>
                        )}
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm">Qtd: {item.quantity}</span>
                          <span className="font-bold">R$ {item.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const newObservation = prompt('Digite sua observação (ex: sem cebola, ponto de referência, etc.):', item.observation || '');
                            if (newObservation !== null) {
                              const updatedItems = cartItems.map(cartItem => 
                                cartItem.id === item.id 
                                  ? { ...cartItem, observation: newObservation }
                                  : cartItem
                              );
                              setCartItems(updatedItems);
                            }
                          }}
                          className="text-blue-600 hover:text-blue-800"
                          title="Adicionar observação"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Subtotal:</span>
                  <span className="text-xl font-bold text-green-700">
                    R$ {getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              {cartItems.length > 0 && (
                <button
                  onClick={() => setCheckoutStep(2)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  Continuar comprando
                </button>
              )}
              
              {cartItems.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                  <button
                    onClick={() => setCurrentView('menu')}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                  >
                    Ver Cardápio
                  </button>
                </div>
              )}
            </>
          )}

          {checkoutStep === 2 && (
            <>
              <div className="mb-4">
                <p className="text-sm text-orange-600 font-medium mb-4">
                  🚨 <strong>Atenção:</strong> Nosso raio de entrega é de 7km!
                </p>
              </div>

              {/* Delivery Option */}
              <div className="mb-4">
                <h3 className="font-semibold mb-3">Forma de Recebimento:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === 'entrega'}
                      onChange={() => setDeliveryOption('entrega')}
                      className="w-4 h-4 text-green-600"
                    />
                    <div className="flex-1">
                      <span className="font-medium">🚚 Entrega</span>
                      <p className="text-sm text-gray-600">Taxa de entrega: R$ 9,00</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === 'retirada'}
                      onChange={() => setDeliveryOption('retirada')}
                      className="w-4 h-4 text-green-600"
                    />
                    <div className="flex-1">
                      <span className="font-medium">🏪 Retirada no Local</span>
                      <p className="text-sm text-gray-600">Sem taxa de entrega</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nome Completo *"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                />
                
                <input
                  type="tel"
                  placeholder="Telefone *"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                  className="w-full p-3 border rounded-lg"
                />

                {deliveryOption === 'entrega' && (
                  <>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="CEP *"
                        value={customerData.cep}
                        onChange={(e) => {
                          const cep = e.target.value.replace(/\D/g, '');
                          setCustomerData({...customerData, cep});
                          if (cep.length === 8) {
                            buscarCEP(cep);
                          }
                        }}
                        maxLength={8}
                        className="flex-1 p-3 border rounded-lg"
                      />
                      <button
                        onClick={() => buscarCEP(customerData.cep)}
                        disabled={addressLoading || customerData.cep.length !== 8}
                        className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-300"
                      >
                        {addressLoading ? '...' : 'Buscar'}
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Endereço *"
                      value={customerData.address}
                      onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                    />

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Número *"
                        value={customerData.number}
                        onChange={(e) => setCustomerData({...customerData, number: e.target.value})}
                        className="w-24 p-3 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Complemento"
                        value={customerData.complement}
                        onChange={(e) => setCustomerData({...customerData, complement: e.target.value})}
                        className="flex-1 p-3 border rounded-lg"
                      />
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Bairro *"
                        value={customerData.neighborhood}
                        onChange={(e) => setCustomerData({...customerData, neighborhood: e.target.value})}
                        className="flex-1 p-3 border rounded-lg"
                      />
                      <select
                        value={customerData.state}
                        onChange={(e) => setCustomerData({...customerData, state: e.target.value})}
                        className="w-20 p-3 border rounded-lg"
                      >
                        <option value="">UF</option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="MG">MG</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      placeholder="Cidade *"
                      value={customerData.city}
                      onChange={(e) => setCustomerData({...customerData, city: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                    />
                  </>
                )}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setCheckoutStep(1)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400"
                >
                  Voltar
                </button>
                <button
                  onClick={() => setCheckoutStep(3)}
                  disabled={!customerData.name || !customerData.phone || 
                    (deliveryOption === 'entrega' && (!customerData.cep || !customerData.address || !customerData.number || !customerData.neighborhood))}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

          {checkoutStep === 3 && (
            <>
              {/* Order Summary */}
              <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                <h3 className="font-bold mb-3">Resumo do Pedido:</h3>
                
                {/* Customer Data */}
                <div className="mb-4 pb-4 border-b">
                  <h4 className="font-semibold text-sm mb-2">📋 Dados do Cliente:</h4>
                  <p className="text-sm">Nome: {customerData.name}</p>
                  <p className="text-sm">Telefone: {customerData.phone}</p>
                  {deliveryOption === 'entrega' && (
                    <>
                      <p className="text-sm">Endereço: {customerData.address}, {customerData.number}</p>
                      {customerData.complement && <p className="text-sm">Complemento: {customerData.complement}</p>}
                      <p className="text-sm">{customerData.neighborhood} - {customerData.city}/{customerData.state}</p>
                      <p className="text-sm">CEP: {customerData.cep}</p>
                    </>
                  )}
                  {deliveryOption === 'retirada' && (
                    <p className="text-sm text-green-600">🏪 Retirada no local</p>
                  )}
                </div>

                {/* Items */}
                <div className="mb-4 pb-4 border-b">
                  <h4 className="font-semibold text-sm mb-2">🛒 Itens ({cartItems.length}):</h4>
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="text-sm mb-2">
                      <p className="font-medium">{index + 1}. {item.product.name}</p>
                      {item.size && <p className="text-gray-600 ml-4">Tamanho: {item.size === 'grande' ? 'Grande' : 'Broto'}</p>}
                      {item.flavors && item.flavors.length > 1 && (
                        <p className="text-gray-600 ml-4">Sabores: {item.flavors.map(f => f.name).join(', ')}</p>
                      )}
                      {item.border && item.border.price > 0 && (
                        <p className="text-gray-600 ml-4">Borda: {item.border.name}</p>
                      )}
                      {item.beverageFlavor && (
                        <p className="text-gray-600 ml-4">Sabor: {item.beverageFlavor}</p>
                      )}
                      {item.adicionais && item.adicionais.length > 0 && (
                        <p className="text-gray-600 ml-4">Adicionais: {item.adicionais.map(a => a.name).join(', ')}</p>
                      )}
                      {item.observation && (
                        <p className="text-gray-600 ml-4">Obs: {item.observation}</p>
                      )}
                      <p className="text-gray-600 ml-4">Qtd: {item.quantity} - R$ {item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                {/* Financial Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  {deliveryOption === 'entrega' && (
                    <div className="flex justify-between">
                      <span>Taxa de entrega:</span>
                      <span>R$ 9,00</span>
                    </div>
                  )}
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-green-700">R$ {(getTotalPrice() + (deliveryOption === 'entrega' ? 9 : 0)).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Forma de Pagamento:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'Cartão de Crédito/Débito na entrega'}
                      onChange={() => setPaymentMethod('Cartão de Crédito/Débito na entrega')}
                      className="w-4 h-4 text-green-600"
                    />
                    <span>💳 Cartão na Entrega</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'Dinheiro na entrega'}
                      onChange={() => setPaymentMethod('Dinheiro na entrega')}
                      className="w-4 h-4 text-green-600"
                    />
                    <span>💰 Dinheiro na Entrega</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'PIX'}
                      onChange={() => setPaymentMethod('PIX')}
                      className="w-4 h-4 text-green-600"
                    />
                    <span>📱 PIX</span>
                  </label>
                </div>
              </div>

              {/* WhatsApp Confirmation */}
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-6">
                <p className="text-sm text-green-800">
                  <strong>Confirmação e WhatsApp:</strong>
                  <br />
                  Ao finalizar seu pedido, será direcionado automaticamente para o WhatsApp da Nápoles Pizzaria e será enviado o resumo completo do seu pedido.
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setCheckoutStep(2)}
                  className="w-24 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    if (paymentMethod) {
                      enviarParaWhatsApp();
                    }
                  }}
                  disabled={!paymentMethod}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  🚀 Finalizar Pedido
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

    {showCartModal && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-11/12 max-w-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Produto Adicionado!</h3>
        <p className="text-gray-600 mb-6">Seu item está no carrinho. O que deseja fazer?</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              setShowCartModal(false);
              setCurrentView('cart');
            }}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Ir para o Carrinho
          </button>
          <button
            onClick={() => setShowCartModal(false)}
            className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    </div>
  )}

    {showCartModal && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-11/12 max-w-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Produto Adicionado!</h3>
        <p className="text-gray-600 mb-6">Seu item está no carrinho. O que deseja fazer?</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              setShowCartModal(false);
              setCurrentView('cart');
            }}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Ir para o Carrinho
          </button>
          <button
            onClick={() => setShowCartModal(false)}
            className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    </div>
  )}


  return null;
};

export default NapolesPizzaria;