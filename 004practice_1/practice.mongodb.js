//level 1
show('dbs')
use('shopapp')
db.createCollection('users')


//level2
use('shopapp')
db.users.insertOne({
    name: "nikesh",
    address: "noida",
    age:21
})
db.users.insertMany([
    {
        name:"singh",
        address: "delhi",
        age: 23
    },
    {
        name:"kumar",
        address: "noida",
        age: 20
    },
    {
        name:"raj",
        address: "noida",
        age: 21
    }
])

use('shopapp')
db.users.find()

use('shopapp')
db.users.find({address: 'noida'})


//level3
use('ecom')
db.createCollection('products')

use('ecom')
db.products.insertMany([
    {
        name: "iphone",
        price: "80000",
        category: "electronics",
        stock: 12
    },
    {
        name: "laptop",
        price: "90000",
        category: "electronics",
        stock: 15
    },
    {
        name: "headphone",
        price: "8000",
        category: "electronics",
        stock: 20
    },
    {
        name: "tshirt",
        price: "1200",
        category: "fashion",
        stock: 25
    }
])

use('ecom')
db.products.find()

use('ecom')
db.products.find({category:"electronics"})

use('ecom')
db.products.countDocuments() //show the number of documents in the collection


//level 4
use('shopapp')
db.users.updateMany(
    {address:'noida'},
    {$set:{address: 'delhi ncr'}}
)

use('ecom')
db.products.updateOne(
    {},
    {$set: {price: "50000"}}  //first object form start being update with this 
)

use('ecom')
db.products.updateOne(
    {name:"laptop"},
    {$set: {stock: 4}}
)

use('ecom')
db.products.updateMany(
    {category: 'electronics'},
    {$inc:{stock: 6}}   //it increment old value rather than setting a new value
)

use('shopapp')
db.users.updateOne(
    {address: "delhi"},
    {$set:{address: "noida"}}
)


//level 5
use('shopapp')
db.users.deleteOne({name:"kumar"})

use('shopapp')
db.users.deleteMany(
    {age:{$gt:22}} //$gt for greater than and $lt for less than 
)

use('ecom')
db.products.deleteOne({})


//level 6
use('shopapp')
db.users.find({age:{$gt:20}})

use('ecom')
db.products.find({price:{$lt: "5000"}})

use('shopapp')
db.users.find({name: "nikesh"})

use('shopapp')
db.users.countDocuments({address: "noida"})

use('shopapp')
show('collections')