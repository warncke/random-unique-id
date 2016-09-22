'use strict'

const assert = require('chai').assert
const uniqueId = require('../lib/random-unique-id')

describe('random-unique-id', function () {

    it('should return 128 bit hex id', function () {
        assert.match(uniqueId().id, /^[0-9A-Z]{32}$/)
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