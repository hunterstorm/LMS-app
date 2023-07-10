//libraries
const http = require ('http');
const express = require ('express');
const app = express();
const sequelize = require('./sequelizeConnection');
const cors = require('cors');

//router variables
const apiAuth = require('./routes/apiAuth');

//model variables
const User = require('./models/User');
const Course = require('./models/Course');
const Enrollment = require('./models/Enrollment');
const Lesson = require('./models/Lesson');
const Assignment = require('./models/Assignment');
const Grade = require('./models/Grade');



//middleware
app.use(cors());
app.use(apiAuth);
app.use(express.json());


//table relationships

Course.belongsTo(User, {
    foreignKey: "instructor_id",
    onDelete: 'CASCADE',
    allowNull: false
});
User.hasMany(Course, {
    foreignKey:"instructor_id",
    allowNull: false
});

Enrollment.belongsTo(User, {
    foreignKey:'student_id',
    allowNull: false
})
User.hasMany(Enrollment, {
    foreignKey:'student_id',
    allowNull: false
})

Enrollment.belongsTo(Course, {
    foreignKey: 'course_id',
    allowNull: false
})
Course.hasMany(Enrollment, {
    foreignKey: 'course_id',
    allowNull: false
})

Lesson.belongsTo(Course, {
    foreignKey: 'course_id',
    allowNull: false
})
Course.hasMany(Lesson, {
    foreignKey: 'course_id',
    allowNull: false
})

Assignment.belongsTo(Course, {
    foreignKey: 'course_id',
    allowNull: false
})
Course.hasMany(Assignment, {
    foreignKey: 'course_id',
    allowNull: false
})

Grade.belongsTo(Assignment, {
    foreignKey: 'assignment_id',
    allowNull: false
})
Assignment.hasMany(Grade, {
    foreignKey: 'assignment_id',
    allowNull: false
})

Grade.belongsTo(User, {
    foreignKey: 'student_id',
    onDelete: 'CASCADE',
    allowNull: false
})


//db authentication
sequelize.authenticate().then(()=>{
    console.log("database connection successful")
}).catch((error)=>{
    console.log(error);
})

//db connection and server start
sequelize.sync().then(()=>{
    console.log("tables created successfully");
})

const server = http.createServer(app);
server.listen(3000, '127.0.0.1', ()=>{
    console.log('server started');
})

