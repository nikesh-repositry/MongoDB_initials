use('ecommerce')
db.products.find();

//COMPARISON OPERATOR

//find products with price 12.99
use('ecommerce')
db.products.find(
    {price:12.99},
    {title:1,category:1,price:1}
)
//greater then 12.99
use('ecommerce')
db.products.find(
    {price:{$gt: 12.99}},
    {title:1,category:1,price:1}
)
//less than
use('ecommerce')
db.products.find(
    {price:{$lt: 49.99}},
    {title:1,category:1,price:1}
)
//less then or equal
db.products.find(
    {price:{$lte: 49.99}},
    {title:1,category:1,price:1}
)
//greater than or equal
db.products.find(
    {price:{$gte: 19.99}},
    {title:1,category:1,price:1}
)
//equal to
db.products.find(
    {price:{$eq: 49.99}},
    {title:1,category:1,price:1}
)
//not equal to
db.products.find(
    {price:{$ne: 19.99}},
    {title:1,category:1,price:1}
)
















// LOGICAL OPERATOR
use('ecommerce')
// and operator 
//you can attach more than two filters with and operator in mongodb
db.products.find(
    {$and: [{category:'beauty'},{price:{$lt:12.99}},{_id: ObjectId("69c2778213010cc10f2d8a56")}]},
    {title:1,price:1,category:1}
)
db.products.find(    //this is also a way to use and operator and this one is simple way to use 1
    {
        category:'beauty',
        price: {$lt: 12.99}
    },
    {title:1,category:1,price:1}
)
// or operator
db.products.find(
    {$or: [{category:'beauty'},{price:{$lt:12.99}}]},
    {title:1,price:1,category:1}
)
// not operator
db.products.find(
    {$or: [{category:'beauty'},{price:{$not:{$lt:12.99}}}]}, 
    {title:1,price:1,category:1}
)
// nor operator
db.products.find(
    {$nor:[{category:false},{price:{$gt:10}}]},
    {title:1,price:1,category:1}
)












// ELEMENT OPERATOR
use('myusers')
// db.users.insertMany([
//     {name: 'nikesh', age: 21},
//     {name: 'vikas'},
//     {age: 25},
//     {name: 'yash',age: 24},
//     {name: 'raj', age:'23'},
//     {name: 'puneet', age: 33}
// ])
use('myusers')
// exists operator
db.users.find({age:{$exists:true}})
// data type checking
db.users.find({age:{$type:'string'}})





















// EVALUATION OPERATOR
use('test')
// db.students.insertMany([
//   {
//     name: "Ravi",
//     maths: 80,
//     science: 70
//   },
//   {
//     name: "Anita",
//     maths: 60,
//     science: 75
//   },
//   {
//     name: "Karan",
//     maths: 90,
//     science: 85
//   },
//   {
//     name: "Pooja",
//     maths: 50,
//     science: 65
//   }
// ])
// db.employees.insertMany([
//   {
//     name: "Rahul",
//     salary: 8000,
//     bonus: 10000
//   },
//   {
//     name: "Priya",
//     salary: 60000,
//     bonus: 5000
//   },
//   {
//     name: "Amit",
//     salary: 45000,
//     bonus: 15000
//   },
//   {
//     name: "Neha",
//     salary: 70000,
//     bonus: 2000
//   }
// ])

// db.products.insertMany([
//   {
//     name: "Laptop",
//     price: 60000,
//     discountPrice: 55000
//   },
//   {
//     name: "Phone",
//     price: 30000,
//     discountPrice: 31000
//   },
//   {
//     name: "Tablet",
//     price: 20000,
//     discountPrice: 18000
//   },
//   {
//     name: "Headphones",
//     price: 5000,
//     discountPrice: 4500
//   }
// ])

// expr operator
db.employees.find({     //find out whose salary is greater than bonus
    $expr:{
        $gt:['$salary','$bonus']      //$ attached with salary and bonus because we want the value of these variables
    }
})
db.employees.find({     //find out whose bonus+salary>60000
    $expr:{
        $gt:[
            {$add:['$salary','$bonus']},
            60000
        ]
    }
})

// regex operator (regular expression)
use('test')
db.students.find({
    name: {$regex: 'avi'}
})
db.students.find({
    name: {$regex: 'a$'}
}
)

// mod operator
// db.numbers.insertMany([
//     {value:10},
//     {value:11},
//     {value:1},
//     {value:6},
//     {value:58},
//     {value:45},
//     {value:99},
// ])
db.numbers.find({
    value:{$mod:[2,0]}
})


























