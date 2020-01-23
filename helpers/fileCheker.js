const uuid = require('uuid/v1');
// const fs = require('fs');
// const {resolve: resovlePath} = require('path');

const {MIME_TYPE} = require('../constant');

module.exports =  (photo) => {
    try {


        if (!photo || Array.isArray(photo)) {
            throw new Error('File must be file');
        }

        const {name, mimetype, size} = photo;

        if (!MIME_TYPE.PHOTOS.includes(mimetype)) {
            throw new Error('Photo must have correct mime-type')
        }

        if (size > 5 * 1024 * 1024 || size < 512) {
            throw new Error('Size must be less then 5mb')
        }

        const photoName = uuid() + '.' + name.split('.').pop();
        photo.name = photoName;


        return photo;

    } catch (e) {
        console.log(e);
    }
};
