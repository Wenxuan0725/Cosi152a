
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var connectInfoSchema = Schema( {
  name: String,
  email: String,
  willingness: String,
  userId: ObjectId
} );

module.exports = mongoose.model( 'connectInfo', connectInfoSchema );
