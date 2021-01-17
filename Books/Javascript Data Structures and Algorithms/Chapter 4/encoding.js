//btoa('hello I love learning to computer program');
// alternatively:
//Buffer.from('hello I love learning to computer program').toString('base64')

//atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0');
//Buffer.from('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0', 'base64').toString()

const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

function reverseWord(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

function encodeId(num) {
    const base = DICTIONARY.length;
    let encoded = '';

    if (num === 0) {
        return DICTIONARY[0];
    }

    while (num > 0) {
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }

    return reverseWord(encoded);
}

function decodeId(id) {
    const base = DICTIONARY.length;
    let decoded = 0;

    for (let index = 0; index < id.split("").length; index++) {
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }

    return decoded;
}

console.log(encodeId(11231230)); // prints 'VhU2'
console.log(decodeId('VhU2')); // prints '11231230'

console.log('\n----RSA encryption examples----')
function modInverse(e, phi) {
    let m0 = phi,
        t, q;
    let x0 = 0,
        x1 = 1;

    if (phi == 1)
        return 0;

    while (e > 1) {
        // q is quotient
        q = Math.floor(e / phi);

        t = phi;

        // phi is remainder now, process same as
        // Euclid's algo
        phi = e % phi, e = t;

        t = x0;

        x0 = x1 - q * x0;

        x1 = t;
    }

    // Make x1 positive
    if (x1 < 0)
        x1 += m0;

    return x1;
}
console.log(modInverse(7, 40)); // 23

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // check from 2 to n-1
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function RSAKeyPair(p, q) {
    // Need to check that they are primes
    if (! (isPrime(p) && isPrime(q)))
        return;

    // Need to check that they're not the same
    if (p==q)
        return;

    const n = p * q,
        phi = (p - 1) * (q - 1),
        e = 3,
        d = modInverse(e, phi);

    // Public key: [e,n], Private key: [d,n]
    return [[e,n], [d,n]]
}
console.log(RSAKeyPair(5,11)); //Public key:  [3,55], Private key: [27,55]