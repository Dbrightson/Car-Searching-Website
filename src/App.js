import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import carsData from './data/cars.json';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  const [cars, setCars] = useState(carsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All'); // Default filter to show all cars

  useEffect(() => {
    const filteredCars = carsData.filter((car) => {
      return (
        (selectedBrand === 'All' || car.brand === selectedBrand) &&
        (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.fuelType.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setCars(filteredCars);
  }, [searchQuery, selectedBrand]);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxWidth="md">
      
      <Navbar onSearch={setSearchQuery} onBrandFilter={setSelectedBrand} />
      <CarList
        cars={cars}
        currentPage={currentPage}
        carsPerPage={carsPerPage}
        onPageChange={onPageChange}
      />
    </Container>
  );
}

export default App;