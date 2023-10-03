import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Typography from '@mui/material/Typography';

const CustomPagination = ({ currentPage, totalCars, carsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const handlePageChange = (event, newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div style={{ marginTop: '40px' }}> {/* Add margin to lower the pagination */}
      <Pagination
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        size="large"
        style={{
          backgroundColor: '#33374B',
        }}
        renderItem={(item) => (
          <PaginationItem {...item} style={{ color: 'white' }}>
            {item.page ? (
              <Typography variant="body2" color="textSecondary">
                Page {currentPage} of {totalPages}
              </Typography>
            ) : null}
          </PaginationItem>
        )}
      />
    </div>
  );
};

export default CustomPagination;
