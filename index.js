var Airtable = require('airtable');
var jsonfile = require('jsonfile');
var fileBook = 'data/books.json';
var bookJson = [];
var bookJsonTest = [];

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('appZS57k7B6rp8Cny');

// base('MY_TABLE_NAME').select({
//     // MY_TABLE_NAME is "booktable" for this example
//     maxRecords: 4,
//     //sort
//     sort: [{
//         field: "publication_date",
//         direction: "desc"
//     }]
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         bookJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileBook, bookJson, function(err) {
//         console.error(err)
//     });
//     console.log('Success!');
// });