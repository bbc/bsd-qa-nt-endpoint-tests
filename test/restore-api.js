import { request } from "https";
var global = require('../env.js');

describe("restore api", function(){
    it("restores part of a shelved item by subclipping", function(done){
        options['url'] = baseURL + '/v1/restore/site/10/item/355478?in=10&out=500&placeholder=355507';
        request.get(options, function(error, response, body){
            console.log("response = " + response.statusCode + "\nerror = " + error + "\nbody = " + body);
            expect(response.statusCode).to.equal(200);
            done();
        });

        options['url'] = baseURL + '/v1/mediaitem/site/10/item/355507';
        request.get(options, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });



});