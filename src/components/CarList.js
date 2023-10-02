import React from 'react';
import CarCard from './CarCard';
import Pagination from './Pagination';
import Grid from '@mui/material/Grid';

const CarList = ({ cars, currentPage, carsPerPage, onPageChange }) => {
  // Calculate the index of the first car on the current page
  const indexOfFirstCar = (currentPage - 1) * carsPerPage;

  // Get the cars to display on the current page
  const currentCars = cars.slice(indexOfFirstCar, indexOfFirstCar + carsPerPage);

  return (
    <div>
      <Grid container spacing={2}>
        {currentCars.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalCars={cars.length}
        carsPerPage={carsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CarList;
