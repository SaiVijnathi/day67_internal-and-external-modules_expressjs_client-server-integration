const express = require("express");
let app = express();

const cors = require("cors");
app.use(cors());

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/appleproducts",(req,res)=>{
    let appleProducts = [
        {
            image:"/images/p1.jpg",
            name:"Apple MacBook Air Laptop",
            price:"57,000",
            rating:"4.6"
        },

        {
            image:"/images/p2.jpg",
            name:"Apple 14 Macbook Pro",
            price:"1,30,000",
            rating:"4.5"
        },

        {
            image:"/images/p3.jpg",
            name:"Apple Macbook Air 15",
            price:"1,69,000",
            rating:"4.7"
        },

        {
            image: "/images/p4.jpg",
            name: "Apple iPhone 15",
            price: "80,000",
            rating: "4.8"
        },
        {
            image: "/images/p5.jpg",
            name: "Apple iPhone 15 Pro",
            price: "1,25,000",
            rating: "4.9"
        },
        {
            image: "/images/p6.jpg",
            name: "Apple iPhone 14",
            price: "70,000",
            rating: "4.6"
        },
        {
            image: "/images/p7.jpg",
            name: "Apple iPhone 14 Pro",
            price: "1,05,000",
            rating: "4.8"
        },
        {
            image: "/images/p8.jpg",
            name: "Apple iPhone SE (2022)",
            price: "45,000",
            rating: "4.5"
        },
        {
            image: "/images/p9.jpg",
            name: "Apple AirPods Pro (2nd Gen)",
            price: "26,000",
            rating: "4.7"
        },
        {
            image: "/images/p10.jpg",
            name: "Apple AirPods (3rd Gen)",
            price: "19,000",
            rating: "4.5"
        },
        {
            image: "/images/p11.jpg",
            name: "Apple AirPods Max",
            price: "59,000",
            rating: "4.6"
        },
        {
            image: "/images/p12.jpg",
            name: "Apple iPad Pro 12.9-inch",
            price: "1,20,000",
            rating: "4.8"
        },
        {
            image: "/images/p13.jpg",
            name: "Apple iPad Pro 11-inch",
            price: "90,000",
            rating: "4.7"
        },
        {
            image: "/images/p14.jpg",
            name: "Apple iPad Air (5th Gen)",
            price: "60,000",
            rating: "4.6"
        },
        {
            image: "/images/p15.jpg",
            name: "Apple iPad 10.2-inch (9th Gen)",
            price: "30,000",
            rating: "4.4"
        },
        {
            image: "/images/p16.jpg",
            name: "Apple Watch Series 8",
            price: "45,000",
            rating: "4.7"
        },
        {
            image: "/images/p17.jpg",
            name: "Apple Watch Ultra",
            price: "89,900",
            rating: "4.9"
        },
       
        {
            image: "/images/p18.jpg",
            name: "Apple Mac Mini M2",
            price: "60,000",
            rating: "4.7"
        },
        {
            image: "/images/p19.jpg",
            name: "Apple Mac Studio",
            price: "1,90,000",
            rating: "4.8"
        },
        {
            image: "/images/p20.jpg",
            name: "Apple HomePod Mini",
            price: "10,000",
            rating: "4.5"
        }

    ]

    res.json(appleProducts);

});

app.listen(8888,()=>{
    console.log("Listening to port 8888");
});