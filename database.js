var mysql = require("mysql2");
var con = mysql.createConnection({
    // host is where 
    host: "127.0.0.1",
    user: "root",
    password: "Bongda123@",
    database: "testbdnew",
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
con.query("SELECT * FROM tasks", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    console.log('fields: ' + fields)
});

con.end(function (err) {
    if (err) throw err;
    console.log("Connection closed!");
});