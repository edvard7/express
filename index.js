const express = require('express');
const friendsRouter = require('./routers/friends.router');
const path = require('path')
const app = express();
const { sequelize } = require('./db')
const usersRouter = require('./routers/users.router')


const PORT = 4000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/users', usersRouter)
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/photo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img.jpg'));
// LINUX /var/www/public/img.jpg

});
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Friends App',
        caption: 'Mountains are awesome!'
    });
});


app.listen(PORT, () => {  
    console.log(`Listening on ${PORT}`);
})