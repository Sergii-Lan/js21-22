
var app = require('../js/script.js');

describe("app", function() {
    it("sayHello()", function() {

        //prepare
        var result;
        console.log('app',app);

        //act
        result = app.sayHello('Vasya');

        //assert
        expect(result).toEqual('Hello,Vasya!');
    });

    it("sum()", function() {

        //prepare
        var result;

        //act
        result = app.sum(5,5);

        //assert
        expect(result).toEqual(10);
    });

    it("dest()", function() {

        //prepare
        var result;

        //act
        result = app.dest(1,2,3,4);

        //assert
        expect(result).toEqual(24);
    });
});