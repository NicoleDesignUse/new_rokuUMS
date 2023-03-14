const sqlCreds = {
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '', //blank for window root for mac
    database        : 'roku_users',
    port            : '3306' //8889 for MAC users
}

module.exports = sqlCreds;