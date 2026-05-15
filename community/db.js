var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'gcova',
  dateStrings : 'date'
  
});

function getNotiAll(callback){
  connection.query('select * from gcova order by id_notice DESC',
    (err, rows)=>{
      if(err) throw err;
      console.log('완료')
      callback(rows);
    }
  )
}

function insertNoti(title, content,  callback){
  connection.query(`INSERT INTO gcova(title_notice,content_notice,date_notice,pw_notice)  
  VALUES('${title}','${content}',NOW(),'123')`
  ,(err)=>{
      console.log('완료')
      callback();
  })
}

function getNotiID(id, callback){
  connection.query(
    `select * from gcova WHERE id_notice = ${id}`,
    (err, row)=>{
      // if(err) throw err;
      console.log('완료')
      callback(row);
    }
  )
}

function insertImg(imgtit,img,callback){
  connection.query(`INSERT INTO imageitem(create_time,images,title) VALUES(NOW(),'${img}','${imgtit}')`
  ,(err)=>{
      if(err) throw err;
      console.log('완료')
      callback();
  })
}


module.exports = {
    getNotiAll,
    insertNoti,
    getNotiID,
    insertImg
}


 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 