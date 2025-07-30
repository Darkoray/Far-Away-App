import { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onItems, onDeleteItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items.toSorted((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === 'packed')
    sortedItems = items.toSorted((a, b) => Number(a.packed) - Number(b.packed));

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to clear the list?');
    if (confirmed) onItems([]);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by Input order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed status</option>
        </select>

        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
