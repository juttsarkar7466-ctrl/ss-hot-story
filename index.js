const express = require('express');
const app = express();
const path = require('path');

// Yeh aapki static files (HTML, CSS, JS) ko serve karega
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
