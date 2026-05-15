const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const db = require('../db'); 
const  multer   =  require ( 'multer' );
const path = require('path');
const upload = multer({ 
  storage:multer.diskStorage({
    destination: function (req, file, done) {
      done(null, '../gcova/public/upload')
    },
    filename: function (req, file, done) {
      const ux = path.extname(file.originalname)
      done(null, path.basename(file.originalname) + '-' + Date.now() + ux)
    }
  }),
  limits : {
    fileSize : 1024*1024*2
  }
 })


router.route('/').get(function (req, res) {
    res.render('app.ejs')
})
router.get('/sub1Noti',function(req, res){
    let page = req.query.page;
    db.getNotiAll((rows)=>{
        console.log(rows)
        res.render('sub1_notice.ejs',{
            rows: rows,
            page: page,
            leng: Object.keys(rows).length-1, page_list:5, pass:true
        })
    })
})
router.route('/sub1Ques').get(function (req, res) {
    res.render('sub1_question.ejs')
})
router.post('/sub1Ques',(req,res)=>{
    let errs = validationResult(req);
    console.log(errs);
    if(errs['errors'].length>0){
        res.render('sub1_question.ejs',{errs:errs['errs']})
    }else{
        let params = JSON.parse(JSON.stringify(req.body));
        console.log(params)
        let tit = params['title']
        let cont = params['content']
        db.insertNoti(tit,cont,()=>{
            res.redirect('/sub1Noti?page=1')
        })
    }
})

// -------------------------------------------------------------------img_menu

router.get ('/menu', function(req, res){
    res.render('menu.ejs')
  })

  router.post('/menu', upload.single('fileName'), function(req, res){
    let errs = validationResult(req);
    console.log(errs);
    if(errs['errors'].length>0){
        res.render('menu.ejs',{errs:errs['errors']}) 
    }else{
        let params = JSON.parse(JSON.stringify(req.body));
        console.log(req.file)
        let imgtit = params['title'];
        let img = 'upload/'+ req.file.filename
        db.insertImg(imgtit,img,()=>{
            res.redirect('/menu')
        })
    }
  })
  

module.exports = router;