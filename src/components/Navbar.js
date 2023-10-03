import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Navbar = ({ onSearch, onBrandFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    onBrandFilter(brand); // Pass the selected brand to the parent component
    setAnchorEl(null);
  };

  const openBrandMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeBrandMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#33374B' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car Search Website
        </Typography>
        <TextField
          label="Search cars..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            sx: {
              color: 'white', // Text color
            },
            notchedOutline: {
              borderColor: 'white !important', // Border color
            },
          }}
          InputLabelProps={{
            sx: { color: 'white' }, // Placeholder text color
          }}
          sx={{ flex: '1', minWidth: '100px', maxWidth: '300px', borderRadius: '25px' }}
        />
        <IconButton
          onClick={handleSearch}
          color="inherit"
          className="text-white"
        >
          <SearchIcon />
        </IconButton>
        <div>
          <Button
            aria-controls="brand-menu"
            aria-haspopup="true"
            onClick={openBrandMenu}
            color="inherit"
          >
            Filter by Brand
          </Button>

          <Button color="inherit">
            Relevance
          </Button>

          <Menu
            id="brand-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeBrandMenu}
          >
            <MenuItem onClick={() => handleBrandFilter('All')}>All Brands</MenuItem>
            <MenuItem onClick={() => handleBrandFilter('Tesla')}>Tesla</MenuItem>
            <MenuItem onClick={() => handleBrandFilter('BMW')}>BMW</MenuItem>
            <MenuItem onClick={() => handleBrandFilter('Lexus')}>Lexus</MenuItem>
            {/* Add more brand options here */}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
