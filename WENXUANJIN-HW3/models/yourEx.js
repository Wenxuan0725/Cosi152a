
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var yourExSchema = Schema( {
  item: String,
  createdAt: Date,
  userId: ObjectId,
} );

module.exports = mongoose.model( 'YourEx', yourExSchema );
