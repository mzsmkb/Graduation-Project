const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const multer = require('multer')
const cors = require('cors')
// const {error} = require("@babel/eslint-parser/lib/convert");
const app = express()
const upload = multer({ dest: 'uploads/' })


// 重置密码
const nodemailer = require('nodemailer')
const crypto = require('crypto')

app.use(cors())
app.use(bodyParser.json())

// 创建连接对象
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abc13713510201',
    database:'eofficial',
    port:'3306'
})
// 连接mysql数据库
connection.connect(err => {
    if(err){
        console.error('Database connection error:',err.stack)
        return
    }

    console.log('Connected ro database')
})

// 01登录验证接口
app.post('/login',(req,res)=>{
    console.log('点击了登录按钮，进入了后端接口处')
    const inputLoginInfo = req.body
    console.log('用户输入的信息是：',inputLoginInfo)
    connection.query(`select * from users where username=?`,[inputLoginInfo.username],
        (err,result)=>{
        if(err||result.length===0){
            console.log('查询数据库失败',err,result);
            res.status(500).send("Database query error");
            return;
        }

        if(result[0].password===inputLoginInfo.password){
            console.log('查询数据库成功',result[0].password,inputLoginInfo.password)
            res.status(201).send({inputLoginInfo:inputLoginInfo})
        }else {
            console.log('密码错误');
            res.status(500).send('Password error')
            return;
        }
        })
})

// 02注册接口
app.post('/register',(req,res) => {
    console.log("点击了注册按钮是，进入了后端注册接口")
    console.log("获取到了这些注册数据：",req.body)
    const registerInfo = req.body
    // 将注册信息插入到数据库
    const registrationTime = new Date().toISOString().slice(0, 19).replace('T', ' '); // 获取当前时间并转换为合适的格式
    connection.query('INSERT INTO users (username, email, password, registration_time,phone) VALUES (?, ?, ?, ?,?)',
        [registerInfo.username, registerInfo.email, registerInfo.password, registrationTime,registerInfo.phoneNumber], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).send('Registration failed');
            }
            res.status(201).json({ message: 'Registration successful', registrationTime }); // 返回注册成功和注册时间
        });

    // res.status(201).send('注册成功')
})

// 03重置密码
// 生成随机验证码
function generateVerificationCode() {
    return crypto.randomBytes(3).toString('hex').toUpperCase(); // 生成一个6位的随机验证码
}
// 邮件传输配置
const transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '2224928022@qq.com', // 你的QQ邮箱地址
        pass: 'ntbfnmpsoppoechi' // 你的QQ邮箱授权码
    }
});
// 发送包含验证码的电子邮件
app.post('/resetPassword/sendEmail', (req, res) => {
    const loginInfo = req.body
    console.log("loginInfo",req.body)
    const verificationCode = generateVerificationCode();

    // 将验证码与用户邮箱关联起来，这里可以使用数据库或者缓存来保存映射关系

    const mailOptions = {
        from: loginInfo.email, // 该重置密码用户的QQ邮箱地址
        to: "2224928022@qq.com",
        subject: '重置密码验证码',
        text: `您的重置密码验证码是：${verificationCode}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send verification code');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Verification code sent successfully');
        }
    });
});


// 04 获取当前登录用户的信息
app.post('/getuserinfo',(req,res) => {

    const username = req.body.username; // 从请求中获取要查询的用户名
    console.log("正在进入后端数据库拿取登录用户信息",username)
    // 查询用户信息
    const query = "SELECT * FROM users WHERE username = ?";
    connection.query(query, [username], (error, results, fields) => {
        if (error) throw error;
        console.log('User information: ', results[0]); // 输出用户信息
        res.send(results[0]); // 将用户信息发送回前端
    });
})


// 05修改用户个人数据
app.post('/editUserInfo',(req,res)=>{
    const editUserInfo = req.body; // 从请求中获取新的用户信息
    console.log("222",editUserInfo)

    // 更新用户信息
    const query = "UPDATE users SET phone = ?, email = ? WHERE username = ?";
    connection.query(query, [editUserInfo.phone, editUserInfo.email, editUserInfo.username], (error, results, fields) => {
        if (error) throw error;
        console.log('User information updated'); // 输出更新成功信息
        res.send('User information updated'); // 将更新成功信息发送回前端
    });
})


// 获取商品接口：首页手机
app.get('/getphone',(req,res)=>{
    console.log('进入到数据库中获取手机的数据')
    connection.query(`select * from phone`,(err,result)=>{
        if (err){
            // console.log('查询数据库失败',err,result);
            res.status(500).send("Database query error");
            return;
        }
        else {
            // console.log('拿到的数据是：',result)
            res.status(201).send({backResToFront:result})
            return;
        }
    })
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})






