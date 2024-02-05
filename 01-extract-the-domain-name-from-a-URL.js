// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun.sky" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    const host = new URL(url)
    const result = host.hostname.split('.')
    return result.length > 2 ? result[1] : result[0]
}

console.log(domainName("http://github.com/carbonfive/raygun.sky"))
console.log(domainName("http://web.facebook.com/"))
console.log(domainName("https://www.instagram.com/"))

// let github = (new URL('http://github.com/carbonfive/raygun.sky'))
// github = github.hostname
// console.log(github)

// let zombie = new URL('http://www.zombie-bites.com')
// zombie = zombie.hostname
// console.log(zombie)

// let cnet = (new URL('https://www.cnet.com'))
// cnet = cnet.hostname
// console.log(cnet)

// // Clean domain name value from 'www' or other prefix
// function cleanDomain(removeValue) {
//     var domainName = window.location.hostname.split('.');
//     if (domainName.includes(removeValue)) {
//         domainName.shift();
//         console.log(domainName);
//     }
//     else {
//         console.log(domainName);
//     }
// }

// cleanDomain(cnet);