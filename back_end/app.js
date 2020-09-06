const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({path:'./config/test.env'});
const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('request')

const app = express()
const port = process.env.PORT


   


app.use(cors());

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/stocks' ,(req,res) => {
    const stockUrl = "https://api.tiingo.com/iex/?token=bd7a6ca62fe50c07262959031dc1b6ef216a4c03"
    request(stockUrl , function(error,response,body) {
    
    const content = JSON.parse(body);

    function string_split_name (content) {
        let name = []
        for (x in content) {
            name.push(content[x].ticker)
        }
        return name
    }
    function string_split_open (content) {
        let open = []
        for (x in content) {
            open.push(content[x].open)
        }
        return open
    }
    function string_split_last (content) {
        let last = []
        for (x in content) {
            last.push(content[x].last)
        }
        return last
    }
    function string_split_high (content) {
        let high = []
        for (x in content) {
            high.push(content[x].high)
        }
        return high
    }
    function string_split_low (content) {
        let low = []
        for (x in content) {
            low.push(content[x].low)
        }
        return low
    }
    function string_split_prevClose (content) {
        let prevClose = []
        for (x in content) {
            prevClose.push(content[x].prevClose)
        }
        return prevClose
    }
    

    const names = string_split_name(content)
    const open = string_split_open(content)
    const last = string_split_last(content)
    const high = string_split_high(content)
    const low = string_split_low(content)
    const prevClose = string_split_prevClose(content)

    
    
    
    res.send({

        ticker: names,
        priceOpen: open,
        priceLast: last,
        priceHigh: high,
        priceLow:low,
        Close: prevClose


    })
    })


})

app.listen(port ,() =>{
    console.log('port is up on' + port)

    
})


