import { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete } from 'react-icons/ai';
import Dashboard from './Dashboard';

// Initial data for inventory
const initialInventoryData = [
  { id: 1, name: 'Aspirin', quantity: 100, price: 5.0 },
  { id: 2, name: 'Paracetamol', quantity: 200, price: 2.5 },
  { id: 3, name: 'Ibuprofen', quantity: 150, price: 3.0 },
];

// Main Inventory Component
const Inventory = () => {
  // State hooks
  const [inventory, setInventory] = useState(() => {
    const storedInventory = localStorage.getItem('inventory');
    return storedInventory ? JSON.parse(storedInventory) : initialInventoryData;
  });
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', quantity: '', price: '' });

  // Update localStorage whenever inventory changes
  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  // Add new item to inventory
  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.quantity && newItem.price) {
      const newItemData = {
        id: inventory.length ? Math.max(...inventory.map(item => item.id)) + 1 : 1,
        name: newItem.name,
        quantity: parseInt(newItem.quantity),
        price: parseFloat(newItem.price),
      };
      setInventory([...inventory, newItemData]);
      setNewItem({ name: '', quantity: '', price: '' });
    }
  };

  // Start editing an item
  const handleEditItem = (item) => {
    setEditingItem(item);
    setEditForm({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
  };

  // Save edited item
  const handleSaveEdit = () => {
    if (editForm.name.trim() && editForm.quantity && editForm.price) {
      setInventory(inventory.map((item) =>
        item.id === editingItem.id
          ? { ...item, ...editForm, quantity: parseInt(editForm.quantity), price: parseFloat(editForm.price) }
          : item
      ));
      setEditingItem(null);
    }
  };

  // Delete an item from inventory
  const handleDeleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  // Filter inventory based on search input
  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate statistics
  const totalItems = filteredInventory.length;
  const totalQuantity = filteredInventory.reduce((acc, item) => acc + item.quantity, 0);
  const totalValue = filteredInventory.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <div>
      <Dashboard/>
    <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-200 min-h-screen max-sm:ml-0">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Inventory Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Inventory List */}
        <div className="bg-white rounded-lg shadow-md overflow-auto">
          <h3 className="text-xl font-semibold mb-4 px-4 pt-2 text-gray-800">Inventory List</h3>
          <div className="px-4 mb-4 flex items-center rounded-lg shadow-sm">
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg w-full bg-white text-sm"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#7695FF] text-white">
                <th className="border p-2">Name</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-[#E9F2FF]">
                  <td className="border p-2 text-gray-800">
                    {editingItem?.id === item.id ? (
                      <input
                        type="text"
                        className="border border-[#9DBDFF] p-1 rounded-lg bg-white text-sm w-full"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="border p-2 text-gray-600">
                    {editingItem?.id === item.id ? (
                      <input
                        type="number"
                        className="border border-[#9DBDFF] p-1 rounded-lg bg-white text-sm w-full"
                        value={editForm.quantity}
                        onChange={(e) => setEditForm({ ...editForm, quantity: e.target.value })}
                      />
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td className="border p-2 text-gray-600">
                    {editingItem?.id === item.id ? (
                      <input
                        type="number"
                        step="0.01"
                        className="border border-[#9DBDFF] p-1 rounded-lg bg-white text-sm w-full"
                        value={editForm.price}
                        onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                      />
                    ) : (
                      `₹${item.price.toFixed(2)}`
                    )}
                  </td>
                  <td className="border p-2 text-gray-600 flex space-x-2">
                    {editingItem?.id === item.id ? (
                      <button
                        onClick={handleSaveEdit}
                        className="bg-[#7695FF] text-white p-1 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
                      >
                        <AiOutlineSave />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditItem(item)}
                          className="bg-[#FFD7C4] text-[#FF9874] p-1 rounded-lg shadow-md hover:bg-[#FF9874] hover:text-white transition-transform"
                        >
                          <AiOutlineEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="bg-[#FF9874] text-white p-1 rounded-lg shadow-md hover:bg-[#FF6F6F] transition-transform"
                        >
                          <AiOutlineDelete />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section: Add New Item Form and Stats */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Add New Item</h3>
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="number"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            />
            <input
              type="number"
              step="0.01"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-4 w-full bg-white text-sm"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <button
              onClick={handleAddItem}
              className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
            >
              Add Item
            </button>
          </div>

          {/* Inventory Stats */}
          <div className="bg-[#E9F2FF] p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Inventory Stats</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Total Items:</span>
                <span className="text-gray-900">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Total Quantity:</span>
                <span className="text-gray-900">{totalQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Total Value:</span>
                <span className="text-gray-900">₹{totalValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Inventory;
