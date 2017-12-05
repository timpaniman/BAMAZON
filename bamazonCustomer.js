var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
});

console.log("==== Displaying Inventory..  Type  Quit   to exist application ========");

runSearchAll();


function runSearchAll() {
    {
        var query = "select * from products;";
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
            }

            mainMenu();
        });
    };
}

function mainMenu() {
    inquirer
        .prompt({
            name: "action",
            type: "input",
            message: "What would you like to buy? (type Quit to exit)",
        })
        .then(function(answer) {
            if (answer.action == 'Quit') {
                console.log("========= Bye =========");
                return;
            }
            var query = "SELECT * FROM products where ?";
            var myQuery = connection.query(query, { product_name: answer.action }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
                }
                getQty(res[0].product_name, res[0].stock_quantity, res[0].price);
            });

        });
}


function getQty(product, qty, price) {
    inquirer
        .prompt({
            name: "qtyUser",
            type: "input",
            message: "How Many would you like to buy?",
        })
        .then(function(answer) {
            var totalPrice = price * qty;
            if (qty < answer.qtyUser) {
                console.log("***** Not enough Stock *****");
                console.log("...Back to main menu");
                mainMenu();
            } else {
                var resultQty = qty - answer.qtyUser;
                var query1 = "update products set ? where ?";
                var myQuery = connection.query(query1, [{ stock_quantity: resultQty }, { product_name: product }], function(err, res) {

                });

                console.log("Ok.. Purchased. Back to main to order.....")
                console.log("The total price is = " + totalPrice);
                runSearchAll();
            }

        });
}