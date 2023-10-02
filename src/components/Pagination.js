import React from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const CustomPagination = ({ currentPage, totalCars, carsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const handlePageChange = (event, newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="mt-4 flex justify-center items-center">
      <Typography variant="body2" color="textSecondary">
        {currentPage} from {totalPages}
      </Typography>
      <Pagination
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        size="large"
        style={{
          backgroundColor: '#33374B',
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#002BFF', // Change color for the selected page
          },
        }}
      />
    </div>
  );
};

export default CustomPagination;
