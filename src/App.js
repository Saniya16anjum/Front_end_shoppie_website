// src/App.js
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, List, ListItem, ListItemText } from '@mui/material';
import CategoryList from './components/CategoryList';
import categoriesData from './categoriesData.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (category, subcategory) => {
    console.log(`Clicked: ${category} -> ${subcategory}`);
    // Implement your logic for handling category and subcategory clicks
  };

  return (
    <div style={{ background: '#D5BBEA', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px', display: 'flex' }}>
          <CategoryList
            categories={categoriesData}
            onItemClick={handleItemClick}
            onSelectCategory={setSelectedCategory}
          />
          <div style={{ marginLeft: '20px', flexGrow: 1 }}>
            <Typography variant="h4">Shopping Website</Typography>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ marginBottom: '20px' }}
            />
            {selectedCategory && (
              <List>
                {categoriesData
                  .find((category) => category.category === selectedCategory)
                  .subcategories.map((subcategory) => (
                    <ListItem key={subcategory} button>
                      <ListItemText primary={subcategory} onClick={() => handleItemClick(selectedCategory, subcategory)} />
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default App;




