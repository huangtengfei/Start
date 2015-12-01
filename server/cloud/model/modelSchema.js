
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	className: String,
	schemaObj: {}
}, { versionKey: false });

module.exports = modelSchema;

