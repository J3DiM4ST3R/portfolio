const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

//Example of secure API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the secure backend!" });
});

// Contact from (optional)
/*app.post('/api/contact', express.json(), (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact request received:', name, email, message);
    // Send an email or save to database here (backend only!)
    res.json({ status: 'ok' });
});*/

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});