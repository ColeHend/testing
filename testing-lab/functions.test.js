const {returnTwo,greeting,add,subtract,multiply,divide} = require('./functions')

test('is equal to 2',()=>{
    let two = returnTwo()
    expect(two).toBe(2);
})

test('should return Hello, James.',()=>{
    let hello = greeting('James');
    let hello2 = greeting('Jill');
    expect(hello).toBe('Hello, James.')
    expect(hello2).toBe('Hello, Jill.')
})

describe('Math functions',()=>{
    test('add numbers',()=>{
        let addition = add(1,2);
        let addition2 = add(5,9)
        let addString = add('T','A')
        let addiString = add(NaN,'F')
        expect(addition).toBe(3)
        expect(addition2).toBe(14)
        expect(addString).toBe(TypeError)
        expect(addiString).toBe(TypeError)
    })
    
    test('subtract numbers',()=>{
        let minus = subtract(2,2);
        let minus2 = subtract(5,9);
        let minusString = subtract("a",'9')
        expect(minus).toBe(0)
        expect(minus2).toBe(-4)
        expect(minusString).toBe(TypeError)
    })
    
    test('multiply numbers',()=>{
        let mult = multiply(1,2);
        let mult2 = multiply(5,9)
        let multString = multiply('f','t')
        expect(mult).toBe(2)
        expect(mult2).toBe(45)
        expect(multString).toBe(TypeError)
    })
    
    test('divide numbers',()=>{
        let divided = divide(9,3);
        let divided2 = divide(18,9)
        let divString = divide('T','A')
        expect(divided).toBe(3)
        expect(divided2).toBe(2)
        expect(divString).toBe(TypeError)
    })


})