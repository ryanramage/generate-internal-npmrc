#!/usr/bin/env node

var ini = require('ini'),
    username = process.argv[2],
    password = process.argv[3],
    email = process.argv[4]
    registry = process.argv[5];

if (!email || !username || !password) {
  return console.log('USAGE: generate-internal-npmrc <username> <password> <email>');
}


var auth = username + ':' + password
var data = {};

data._auth = new Buffer(auth, 'utf8').toString('base64')
data.email = email;
data['always-auth'] = true;

if (registry) {
	data.registry = registry;
}

console.log(ini.stringify(data))