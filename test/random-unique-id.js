'use strict'

const assert = require('chai').assert
const uniqueId = require('../lib/random-unique-id')

describe('random-unique-id', function () {

    it('should return 128 bit hex id', function () {
        assert.match(uniqueId().id, /^[0-9a-f]{32}$/)
    })

    it('should expose process id', function () {
        assert.match(uniqueId.processId, /^[0-9a-f]{64}$/)
    })

    it('should expose seed', function () {
        assert.match(uniqueId.seed, /^[0-9a-f]{64}$/)
    })

    it('should expose count', function () {
        assert.isNumber(uniqueId.count)
    })

    it('should expose id', function () {
        var id = uniqueId()
        assert.strictEqual(uniqueId.id, id.id)
    })

    it('should increment count with each call', function () {
        var count = uniqueId.count
        uniqueId()
        assert.strictEqual(uniqueId.count, count + 1)
    })

    it('should return micro-second timestamp', function () {
        assert.match(uniqueId().timestamp, /^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d\d\d\d$/)
    })

    it('should generate unique ids', function () {
        for (var i=0; i < 100; i++) {
            assert.notEqual(uniqueId().id, uniqueId().id)
        }
    })
    
})