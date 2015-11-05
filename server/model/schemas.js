/**
 * author: huangtengfei
 * Date: 15-11-05
 * Time: 20:44
 * Desc: Start cloud sdk
 */

'use strict';

var mongoose = require('mongoose');

exports.todoSchema = mongoose.Schema({
    title: String,
    completed: Boolean
});