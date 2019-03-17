const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    blacklistedCategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    blacklistedBrands: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Brand'
        }
    ]
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

publisherSchema.plugin(autoIncrement, {inc_field: 'publisherNumber'});

module.exports = mongoose.model('Publisher', publisherSchema);