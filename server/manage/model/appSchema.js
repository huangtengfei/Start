
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
	// appKey: Schema.Types.ObjectId,
	appName: String
});

// appSchema.virtual('appKey').get(function() {
//     return this._id;
// });

module.exports = appSchema;
