const env = require('../env.js');
const baseURL = env.baseURL;
const options = env.options;
const expect = env.expect;
const request = env.request;
const refdata = env.NTApi.refdata;

var siteUnderTest = 8;
var endPointUnderTest = refdata + '/site/' +  siteUnderTest + '/publishvalidation';

describe("Refdata endpoint tests:", function(){
    it("Returns the publish validation rules", function(done){
        options['url'] = baseURL + endPointUnderTest;
        request.get(options, function(error, response, body){
            console.log("response = " + response.statusCode + "\nerror = " + error + "\nbody = " + body);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});