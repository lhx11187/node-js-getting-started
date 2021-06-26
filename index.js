const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/sendmail', (req, res) => {
  res.send({
            "subject":"中文测试",
            "body":"邮件测试",
            "mailto":"lhx11187@qq.com"
    })
})
  .post('/sendmail', (req, res) => {
  //console.log(req.body);
  //res.set('000','success')
  /*
    res.send({
        msg: 'set演示'
    })*/
      res.send({
          "result": "Success",
          "subject": "中文测试"
    })

})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
