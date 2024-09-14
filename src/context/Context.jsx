// Context.js
import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [accountDetails, setAccountDetails] = useState({});

  // Example for fetching and setting data
  useEffect(() => {
    // Fetch doctors data
    const fetchDoctors = async () => {
      const response = await fetch('/api/doctors'); // Replace with your API endpoint
      const data = await response.json();
      setDoctors(data);
    };
    
    // Fetch patients data
    const fetchPatients = async () => {
      const response = await fetch('/api/patients'); // Replace with your API endpoint
      const data = await response.json();
      setPatients(data);
    };

    // Fetch inventory data
    const fetchInventory = async () => {
      const response = await fetch('/api/inventory'); // Replace with your API endpoint
      const data = await response.json();
      setInventory(data);
    };

    // Fetch account details data
    const fetchAccountDetails = async () => {
      const response = await fetch('/api/account-details'); // Replace with your API endpoint
      const data = await response.json();
      setAccountDetails(data);
    };

    fetchDoctors();
    fetchPatients();
    fetchInventory();
    fetchAccountDetails();
  }, []);

  return (
    <GlobalContext.Provider value={{ doctors, patients, inventory, accountDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
