# random-unique-id

Random Unique ID generates a 128-bit hex random id using `crypto.randomBytes` as
an initial seed and then concatenating this with a micro-second timestamp and an
incrementing counter and performing an SHA-256 hash to generate each unique id.

Random Unique IDs are intended to start from a truly random base and subsequently
to be deterministic but pseudo random.

As of version 1.0.0 the id is lower case where previously it was upper case.

## Usage

    const randomUniqueId = require('random-unique-id')

    var uniqueId = randomUniqueId()

    uniqueId.id        // 62793faaa26a55036957b79e3ef6a51b
    uniqueId.timestamp // 2017-05-29 21:18:31.844178

Random Unique ID returns an object with both the generated id and the timestamp
that was used to generate it.

## Accessing internal data

    const randomUniqueId = require('random-unique-id')

    randomUniqueId.count     // 0
    randomUniqueId.id        // undefined
    randomUnqiueId.seed      // 2ff54616eb6a411059031f77c2091771254e03daf4d3a431f70d13ba912e86b3
    randomUniqueId.processId // 06c441675a07ae8790e09e520ac05e86bce6ded412020a82e54bb762b336935a
    

    randomUniqueId()

    randomUniqueId.count     // 1
    randomUniqueId.id        // 7027ce98ca0ed9915841ac4fd7a74d42
    randomUnqiueId.seed      // 2ff54616eb6a411059031f77c2091771254e03daf4d3a431f70d13ba912e86b3
    randomUniqueId.processId // 06c441675a07ae8790e09e520ac05e86bce6ded412020a82e54bb762b336935a

Internal state data is exposed as properites of the unique id function. The `id`
will always contain the last id generated or be undefined if no ids have been
generated.