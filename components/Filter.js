import { useState } from "react";

export default function Filter() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [formInfo, setFormInfo] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();

    const difficulty = event.target.difficulty.value;
    const category = event.target.category.value;
    setFormInfo({
      difficulty,
      category,
    });

    const response = await fetch("/api/items");
    const allItems = await response.json();
    setFilteredItems(allItems);
    console.log(allItems);
  };
  return (
    <>
      <h3>Filter by category/ difficulty</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Category</label>
          <select className="select" id="category" name="category">
            <option>all</option>
            <option>bottoms</option>
            <option>tops</option>
            <option>full</option>
            <option>accessories</option>
          </select>
          <label htmlFor="difficulty">Difficulty</label>
          <select className="select" id="difficulty" name="difficulty">
            <option>all</option>
            <option>easy</option>
            <option>medium</option>
            <option>expert</option>
          </select>
          <button>search</button>
        </form>
      </div>
      <div>
        {filteredItems.map((filteredItem) => {
          if (
            filteredItem.category === formInfo.category &&
            filteredItem.difficulty === formInfo.difficulty
          ) {
            return (
              <div key={filteredItem._id} id={filteredItem._id}>
                <div>{filteredItem.title}</div>
                <div>{filteredItem.price}</div>
              </div>
            );
          } else if (filteredItem.length === 0) {
            return <div key={filteredItem._id}> No items found</div>;
          }
        })}
      </div>
    </>
  );
}
