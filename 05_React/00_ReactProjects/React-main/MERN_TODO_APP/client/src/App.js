import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');

  // Add new todo item to the database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-dynamic-list.vercel.app/api/item', { item: itemText });
      setListItems((prev) => [...prev, res.data]);
      setItemText('');
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch all todo items from the database
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('https://backend-dynamic-list.vercel.app/api/items');
        setListItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  // Delete item when clicked
  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://backend-dynamic-list.vercel.app/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://backend-dynamic-list.vercel.app/api/item/${isUpdating}`, { item: updateItemText });
      const updatedItemIndex = listItems.findIndex((item) => item._id === isUpdating);
      const updatedListItems = [...listItems];
      updatedListItems[updatedItemIndex].item = updateItemText;
      setListItems(updatedListItems);
      setUpdateItemText('');
      setIsUpdating('');
    } catch (err) {
      console.log(err);
    }
  };

  // Render update form
  const renderUpdateForm = () => (
    <form className="update-form" onSubmit={(e) => updateItem(e)}>
      <input
        className="update-new-input"
        type="text"
        placeholder="New Item"
        onChange={(e) => setUpdateItemText(e.target.value)}
        value={updateItemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <div className="App">
      <h1>Sandeepak's Todo List</h1>
      <form className="form" onSubmit={addItem}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={(e) => setItemText(e.target.value)}
          value={itemText}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {listItems.map((item) => (
          <div key={item._id} className="todo-item">
            {isUpdating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <p className="item-content">{item.item}</p>
                <button className="update-item" onClick={() => setIsUpdating(item._id)}>
                  Update
                </button>
                <button className="delete-item" onClick={() => deleteItem(item._id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
