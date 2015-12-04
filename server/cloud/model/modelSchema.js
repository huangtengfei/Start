
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	className: String,
	schemaObj: Object
}, { versionKey: false });

module.exports = modelSchema;

