const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

require('./database')
// require('./mail')

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public')); 

// app.use(express.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use('/user', require('./routes/userRouter'))
app.use('/member', require('./routes/membersRouter'))
app.use('/chapter', require('./routes/chapterRouter'))
app.use('/leaderChapter', require('./routes/leaderChapterRouter'))
app.use('/admin', require('./routes/adminRouter'))
app.use('/message', require('./routes/messageRouter'))
app.use('/credentials', require('./routes/mailCredentialsRouter'))

// Puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port ' + app.get('puerto'));
});