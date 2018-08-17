var expect = require('expect')

var {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate message object', () => {
        var from = 'Jen'
        var text = 'Some'
        var message = generateMessage(from, text)

        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from,text})
    })
})


