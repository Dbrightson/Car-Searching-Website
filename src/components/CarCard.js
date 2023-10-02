import React from 'react';
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

  const cardStyle = {
    backgroundColor: '#33374B', // Background color
    borderRadius: '15px', // Rounded corners
    marginTop: '20px', // Increase top margin
    color: 'white', // Text color
  };

  const iconStyle = {
    color: '#0026FF', // Icon color
    marginRight: '8px', // Increase spacing
  };

  const buttonStyle = {
    backgroundColor: '#0026FF', // Button background color
    color: 'white', // Button text color
  };

  const whiteTextStyle = {
    color: 'white', // Text color
  };

  return (
    <Card className="mb-4" style={cardStyle}>
      <CardMedia component="img" alt={name} height="160" image={imageURL} />
      <CardContent style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant="h6" color="textPrimary" fontWeight= 'bold' style={whiteTextStyle}>
            {name}
          </Typography>
          <div style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
            <EventIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {modelYear}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '130px' }}>
            <PeopleIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {seater} seats
            </Typography>
          </div>
          <div style={{ marginLeft: '16px', display: 'flex', alignItems: 'center', width: '130px' }}>
            <LocalGasStationIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {fuelType}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '130px' }}>
            <SpeedIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {mileage}
            </Typography>
          </div>
          <div style={{ marginLeft: '16px', display: 'flex', alignItems: 'center', width: '130px', }}>
            <DriveEtaIcon fontSize="small" style={iconStyle} />
            <Typography variant="body2" color="textSecondary" style={whiteTextStyle}>
              {transmission}
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', maxWidth: '140px' }}>
            <Typography variant="h6" style={{ fontSize: '14px', ...whiteTextStyle }}>
              ${pricePerMonth}/month
            </Typography>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                ...buttonStyle,
                width: '28px', // Smaller square
                height: '30px', // Smaller square
                borderRadius: '14px', // Rounded corners
                fontSize: '10px', // Smaller text
                marginRight: '10px',
                padding: '4px', // Smaller padding
              }}
            >
              <FavoriteBorderIcon fontSize="small" />
            </Button>
            <Button
              variant="contained"
              style={{
                ...buttonStyle,
                width: '80px', // Larger rectangle
                height: '30px', // Larger square
                borderRadius: '14px', // Rounded corners
                fontSize: '10px', // Smaller text
                padding: '6px', // Smaller padding
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
