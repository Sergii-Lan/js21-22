

var app ={
    sayHello: function(name){
        return 'Hello,' + name + '!';
    },
    sum: function(a, b){
        return a + b;
    },
    dest: function(a,b,c,d){
        return a*b*c*d;
    }
}

try{
    module.exports = app;
}catch(e){

}