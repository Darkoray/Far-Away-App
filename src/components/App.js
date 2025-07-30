import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = item => {
    setItems(items => [...items, item]);
  };

  const handleDeleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
