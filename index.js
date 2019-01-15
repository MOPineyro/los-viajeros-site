var Airtable = require('airtable');
var jsonfile = require('jsonfile');
var fileTaco = 'data/taco_menu.json';
var fileBurr = 'data/burrito_menu.json';
var fileQues = 'data/quesadilla_menu.json';
var fileSides = 'data/side_menu.json';
// var fileSched = 'data/schedule.json';
var sFileSched = 'data/store_schedule.json';
var tFileSched = 'data/truck_schedule.json';
var fileNews = 'data/news.json';
var menuJson = [];
var menuJsonTest = [];
var tScheduleJson = [];
var sScheduleJson = [];
var newsJson = [];

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('appZS57k7B6rp8Cny');

// base('Tacos').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         menuJson._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileTaco, menuJson, function(err) {
//         console.error(err)
//     });
//     console.log('Success!');
// });

// var menuJson = [];

// base('Burritos').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         menuJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileBurr, menuJson, function(err) {
//         console.error(err)
//     });
//     console.log('Success!');
// });

// var menuJson = [];

// base('Quesadillas').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         menuJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileQues, menuJson, function(err) {
//         console.error(err)
//     });
//     console.log('Success!');
// });

// var menuJson = [];

// base('Sides').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         menuJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileSides, menuJson, function(err) {
//         console.error(err)
//     });
//     console.log('Success!');
// });

// base('Schedule').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         scheduleJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileSched, scheduleJson, function(err) {
//         console.error(err)
//     });
//     console.log('Schedule - Success!');
// });

base('Truck Schedule').select({}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function (record) {
        tScheduleJson.push(record._rawJson.fields);
    });
    fetchNextPage();
}, function done(error) {
    if (error) {
        console.log(error);
    }
    jsonfile.writeFile(tFileSched, tScheduleJson, function (err) {
        console.error(err)
    });
    console.log('Truck Schedule - Success!');
});

base('Store Schedule').select({}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function (record) {
        sScheduleJson.push(record._rawJson.fields);
    });
    fetchNextPage();
}, function done(error) {
    if (error) {
        console.log(error);
    }
    jsonfile.writeFile(sFileSched, sScheduleJson, function (err) {
        console.error(err)
    });
    console.log('Store Schedule - Success!');
});

// base('News').select({
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         newsJson.push(record._rawJson.fields);
//     });
//     fetchNextPage();
// }, function done(error) {
//     if (error) {
//         console.log(error);
//     }
//     jsonfile.writeFile(fileNews, newsJson, function(err) {
//         console.error(err)
//     });
//     console.log('News - Success!');
// });
