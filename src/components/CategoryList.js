// src/components/CategoryList.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import ExpandableDropdown from './ExpandableDropdown';
import categoriesData from '../categoriesData.json';

const CategoryList = ({ onSelectCategory }) => {
  const [openCategories, setOpenCategories] = useState([]);

  const handleClick = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((openCategory) => openCategory !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  const renderSubcategories = (subcategories) => (
    <Collapse in={true} timeout="auto">
      <List>
        {subcategories.map((subcategory) => (
          <div key={subcategory.subcategory}>
            <ListItem button onClick={() => handleClick(subcategory.subcategory)}>
              <img src={subcategory.image} alt={subcategory.subcategory} style={{ maxWidth: '100%', maxHeight: '100px' }} />
              <ListItemText primary={subcategory.subcategory} />
            </ListItem>
            {openCategories.includes(subcategory.subcategory) && subcategory.items && renderItems(subcategory.items)}
          </div>
        ))}
      </List>
    </Collapse>
  );

  const renderItems = (items) => (
    <Collapse in={true} timeout="auto">
      <List>
        {items.map((item) => (
          <ListItem key={item} button onClick={() => onSelectCategory(item)}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );

  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
      <List>
        {categoriesData.map((category) => (
          <div key={category.category}>
            <ListItem button onClick={() => handleClick(category.category)}>
              <img src={category.image} alt={category.category} style={{ maxWidth: '100%', maxHeight: '100px' }} />
              <ListItemText primary={category.category} />
            </ListItem>
            {openCategories.includes(category.category) && category.subcategories && renderSubcategories(category.subcategories)}
            {openCategories.includes(category.category) && category.items && renderItems(category.items)}
            <Divider />
          </div>
        ))}
      </List>
      <ExpandableDropdown
        label="More Categories"
        options={['Category 4', 'Category 5', 'Category 6']}
        onItemClick={(selectedOption) => console.log(`Selected: ${selectedOption}`)}
      />
    </div>
  );
};

export default CategoryList;
















