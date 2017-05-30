'use strict'

/* npm modules */
var crypto = require('crypto')
var microTimestamp = require('micro-timestamp')

/* public functions */
module.exports = randomUniqueId

/* generate process-global seed for unique id */


// sync get 32 bytes of random data - this runs once at startup
randomUniqueId.seed = crypto.randomBytes(32).toString('hex')
// generate process id from random data and micro-second timestamp
randomUniqueId.processId = crypto.createHash('sha256')
    // add random data to hash
    .update(randomUniqueId.seed)
    // add microsec timestamp to hash
    .update(microTimestamp())
    // get hash as hex
    .digest('hex')

// count of generated ids
randomUniqueId.count = 0

/**
 * @function randomUniqueId
 *
 * generate 128bit hex unique id using true random seed, micro-second timestamp
 * and counter for entropy.
 *
 * @returns {object}
 */
function randomUniqueId () {
    // increment count of generated ids
    randomUniqueId.count++
    // get timestamp
    var timestamp = microTimestamp()
    // create unique id
    randomUniqueId.id = crypto.createHash('sha256')
        // process id, microsec timestamp, and counter
        .update(randomUniqueId.processId + randomUniqueId.id + timestamp + randomUniqueId.count)
        // get hash as hex
        .digest('hex')
        // only get 128 bits
        .substring(0, 32)
    // return object with id and timestamp
    return {
        id: randomUniqueId.id,
        timestamp,
    }
}