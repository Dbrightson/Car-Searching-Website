import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EventIcon from '@mui/icons-material/Event';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import Typography from '@mui/material/Typography';

const CarCard = ({ car }) => {
  const {
    name,
    imageURL,
    seater,
    fuelType,
    mileage,
    transmission,
    modelYear,
    pricePerMonth,
  } = car;

  const [isFavorite, setIsFavorite] = useState(false);

  const cardStyle = {
    backgroundColor: '#33374B', // Background color
    borderRadius: '15px', // Rounded corners
    marginTop: '20px', // Increase top margin
    color: 'white', // Text color
  };

  const iconStyle = {
    color: '#0026FF', // Icon color
    padding:'5px'
  
  };

  const buttonStyle = {
    backgroundColor: '#0026FF', // Button background color
    color: 'white', // Button text color
  };

  const whiteTextStyle = {
    color: 'white', // Text color
    fontSize:'12px'
  };

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '140px',
  };
  
  const priceValueStyle = {
    fontSize: '24px', // Bigger font size for the value
    fontFamily: 'Arial, sans-serif', // Change font family
    color: '#0180FF', // Custom font color for the value
  };
  
  const slashStyle = {
    fontSize: '10px', // Smaller font size for the slash
    color: 'white', // White color for the slash
  };
  

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:"end",
    marginLeft: '10px', // Adjust the spacing between buttons
  };

  const favoriteButtonStyle = {
    width: '20px', // Make it smaller
    height: '20px', // Make it smaller
    fontSize: '15px', // Smaller icon size
    padding: '5px', // Remove padding to make it square
    background: isFavorite ? '#0026FF' : 'transparent',
    borderRadius:"50%",
    color: isFavorite ? 'white' : '#0026FF',
    border: `1px solid ${isFavorite ? 'transparent' : '#0026FF'}`,
    marginRight: '4px', // Add a bit of space to the right
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="mb-4" style={cardStyle}>
      <CardMedia component="img" alt={name} height="160" image={imageURL} />
      <CardContent style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="h6" color="textPrimary"  paddingRight={5} fontWeight="bold" style={{ color: 'white', }}>
            {name}
          </Typography>
          <div style={{ marginLeft: '8px', display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <EventIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {modelYear}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'start', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center',  width: '200px' }}>
            <PeopleIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {seater} seats
            </Typography>
          </div>
          <div style={{  display: 'flex', alignItems: 'center', width: '160px', justifyContent:'start'  }}>
            <LocalGasStationIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {fuelType}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'start' }}>
  <div style={{ display: 'flex', alignItems: 'center', width: '200px',  }}> {/* Adjusted width and added margin */}
    <SpeedIcon fontSize="small" style={iconStyle } /> {/* Adjusted margin */}
    <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
      {mileage}
    </Typography>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',justifyContent:'start' ,width: '160px'}}>
    <DriveEtaIcon fontSize="small" style={iconStyle} />
    <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
      {transmission}
    </Typography>
  </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '16px' ,justifyContent:'space-between'}}>
          <div style={priceContainerStyle}>
            <Typography variant="h6" fontWeight="bold" paddingRight={0.5} paddingBottom={0.7} style={priceValueStyle}>
              ${pricePerMonth}
            </Typography>
            <Typography variant="body1" fontWeight="bold" style={slashStyle}>
              /Month
            </Typography>
          </div>
          <div style={buttonContainerStyle}>
           <FavoriteBorderIcon fontSize="small"               className="btn"
              onClick={handleFavoriteClick} style={favoriteButtonStyle}/>
   
            <Button
              variant="contained"
              style={{
                ...buttonStyle,
                width: '70px', // Larger rectangle
                height: '30px', // Larger square
                borderRadius: '14px', // Rounded corners
                fontSize: '10px', // Smaller text
                padding: '4px', // Smaller padding
                marginLeft: '2px', // Slight move to the right
              }}
            >
              Rent Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;