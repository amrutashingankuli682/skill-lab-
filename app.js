const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
// Middleware
app.use(authenticationMiddleware);
// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
