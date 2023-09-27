const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    memberID: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    books: [{ type: String, ref: 'Store' }]
});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;
