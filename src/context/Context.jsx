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

  // Functions to update data
  const addDoctor = (newDoctor) => setDoctors((prevDoctors) => [...prevDoctors, newDoctor]);
  const updateDoctor = (updatedDoctor) => setDoctors((prevDoctors) => 
    prevDoctors.map((doc) => doc.id === updatedDoctor.id ? updatedDoctor : doc)
  );
  const removeDoctor = (doctorId) => setDoctors((prevDoctors) => 
    prevDoctors.filter((doc) => doc.id !== doctorId)
  );

  const addPatient = (newPatient) => setPatients((prevPatients) => [...prevPatients, newPatient]);
  const updatePatient = (updatedPatient) => setPatients((prevPatients) => 
    prevPatients.map((patient) => patient.id === updatedPatient.id ? updatedPatient : patient)
  );
  const removePatient = (patientId) => setPatients((prevPatients) => 
    prevPatients.filter((patient) => patient.id !== patientId)
  );

  const addInventoryItem = (newItem) => setInventory((prevInventory) => [...prevInventory, newItem]);
  const updateInventoryItem = (updatedItem) => setInventory((prevInventory) => 
    prevInventory.map((item) => item.id === updatedItem.id ? updatedItem : item)
  );
  const removeInventoryItem = (itemId) => setInventory((prevInventory) => 
    prevInventory.filter((item) => item.id !== itemId)
  );

  const updateAccountDetails = (newDetails) => setAccountDetails(newDetails);

  return (
    <GlobalContext.Provider
      value={{
        doctors,
        patients,
        inventory,
        accountDetails,
        addDoctor,
        updateDoctor,
        removeDoctor,
        addPatient,
        updatePatient,
        removePatient,
        addInventoryItem,
        updateInventoryItem,
        removeInventoryItem,
        updateAccountDetails
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
