const env = require('../env.js');
const baseURL = env.baseURL;
const options = env.options;
const expect = env.expect;
const request = env.request;
const publishAPI = env.NTApi.publish;
const fs = env.auth.fs;

var now = env.time.now;
// const jsonString = fs.readFileSync('./test/create-placeholder.json');
var jsonString = require('./create-placeholder.json');
var siteUnderTest = 10;
var itemUnderTest = 360052;
var endPointUnderTest = publishAPI + '/placeholder/site/' + siteUnderTest;


describe("Publish endpoint tests:", function(){
    it("Can create a new placeholder", function(done){
        options['url'] = baseURL + endPointUnderTest;

        jsonString.publishMediaitem.clipName = "test placeholder " + now.toLocaleString();
        jsonString.publishMediaitem.date = now.toISOString();
        jsonString.publishMediaitem.details = "ivan placeholder " + now.toLocaleString(); 

        console.log("before = " + JSON.stringify(jsonString));
        options['body'] = JSON.stringify(jsonString);

        console.log("options['url'] " + options['url']);
        console.log("options['body'] " + options['body']);

        request.post(options, 
            function (error, response, body) {
                console.log("response = " + response.body + "\nerror = " + error + "\nbody = " + body);
                expect(response.statusCode).to.equal(200);
        });
    
        done();
    });
});