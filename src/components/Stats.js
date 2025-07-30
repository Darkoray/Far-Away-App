const Stats = ({ items }) => {
  const numItems = items.length;

  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numPacked = items.filter(item => item.packed).length;
  const parentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {parentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `👜You have ${numItems} items on your list, and you already packed ${numPacked} (${parentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
