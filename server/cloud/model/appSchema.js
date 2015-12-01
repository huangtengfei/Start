
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
	// appKey: { type: String, required: true },
	appName: String
}, { versionKey: false });

module.exports = appSchema;
