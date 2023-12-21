const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const fs = require('fs')
const cors = require('cors')

const multer = require('multer')
const app = express()
const upload = multer({dest:'uploads/'})


app.use(cors())
app.use(bodyParser.json())

// 创建连接对象
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abc13713510201',
    database:'ecommerce',
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


// 处理图片上传
app.post('/upload',upload.single('image'),(req,res)=>{
    try {
        const file = req.file;
        console.log('req.file',req.file)
        const query = 'insert into products (image) values (?)';
        const values = file.filename
        connection.query(query,values,(error,results)=>{
          if (error){
              console.error(error);
              res.status(500).json({status:'failure~~'});
          }  else {
              res.json({status:'success!'})
          }
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({status:'failure!!'})
    }
})



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






