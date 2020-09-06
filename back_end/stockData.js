const request = require('request')
// open, last and high-low, ticker , previous close

const stockUrl = "https://api.tiingo.com/iex/?tickers=aapl,spy&token=bd7a6ca62fe50c07262959031dc1b6ef216a4c03"
request(stockUrl , function(error,response,body) {

const content = JSON.parse(body);
function string_split_name (content) {
    let name = []
    for (x in content) {
        name += content[x].ticker + " "
    }
    return name
}
function string_split_open (content) {
    let open = []
    for (x in content) {
        open += content[x].open + " "
    }
    return open
}
function string_split (content) {
    let last = []
    for (x in content) {
        last += content[x].last + " "
    }
    return last
}
function string_split_high (content) {
    let high = []
    for (x in content) {
        high += content[x].high + " "
    }
    return high
}
function string_split_low (content) {
    let low = []
    for (x in content) {
        low += content[x].low + " "
    }
    return low
}
function string_split_prevClose (content) {
    let prevClose = []
    for (x in content) {
        prevClose += content[x].prevClose + " "
    }
    return prevClose
}

const truck = string_split_name(content)
console.log(truck)



 
})
