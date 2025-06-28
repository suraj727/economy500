const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample data (would be from database in production)
const companies = require('./fortune500Data.json');

// Routes
app.get('/api/companies', (req, res) => {
    // Apply filters from query params
    let results = [...companies];
    
    if (req.query.search) {
        results = results.filter(c => 
            c.company.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }
    
    if (req.query.sector) {
        results = results.filter(c => c.sector === req.query.sector);
    }
    
    // More filters...
    
    res.json(results);
});

app.post('/api/register', (req, res) => {
    // Handle registration
    // Validate data, create user in database
    res.json({ success: true });
});

app.post('/api/login', (req, res) => {
    // Handle login
    // Verify credentials, create session
    res.json({ success: true });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
