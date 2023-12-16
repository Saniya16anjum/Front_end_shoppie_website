// src/components/ExpandableDropdown.js
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const ExpandableDropdown = ({ label, options, onItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleOpen} onMouseOver={handleOpen} onMouseLeave={handleClose}>
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => onItemClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ExpandableDropdown;



