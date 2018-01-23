const chai = require('chai');
const expect = chai.expect;

describe('2+2', function(){
    it('should equal four', function(){
       expect(2+2).to.equal(4);
    })
})

describe('setTimeout', function(){
    it('waits the correct amount of milliseconds', function(){
        
        const start = new Date();
        setTimeout(function(){
            const end = new Date();
            expect(end).to.equal(start + 1000);
        })
    })
})

const spies = require('chai-spies');
chai.use(spies);

describe('Chai-spies', function(){
    it('should be called each time its spied on function is called', function(){
        function print(word){console.log(word)}
        arr = [1,2,3,4,5]
        print = chai.spy(print)
        arr.forEach((idx)=>{print(idx)})
        expect(print).to.have.been.called.exactly(arr.length)
    })
})