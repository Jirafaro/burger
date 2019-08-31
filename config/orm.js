var connection = require("./connection.js");

const selectAll = (table, callback) => { 
    const sql = `select * from ${table}`;
    connection.query(sql,(err,res)=> {
        if (err){
            throw err;
        } 
        return callback(res);
    });
};

const insertOne = (table, newRow) => {
    const sql = `insert into ${table}('burger_name')
    values ('$(newRow)')`;
    connection.query(sql, (err,) => {
        if (err) {
            throw err;
        }
    });
};

const updateOne = (table, column, id, newVal) => {
    const sql = `update ${table} SET ${colum} = ${newRow} where id = ${id}`;
    connection.query(sql, (err) => {
        if (err) {
            throw err;
        }
    })
}

module.esports = {updateOne, insertOne, selectAll};