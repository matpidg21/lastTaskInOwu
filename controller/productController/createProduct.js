const AWS = require('aws-sdk');
const BusBoy = require('busboy');

const {AWS_SECRET} = require('../../constant');
const {productService} = require('../../service');
const {fileCheker} = require('../../helpers');

const BUCKET_NAME = 'photo-test-bucket';
const IAM_USER_KEY = AWS_SECRET.iamUser;
const IAM_USER_SECRET = AWS_SECRET.iamSecret;


function uploadToS3(file) {
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME
    });

    s3bucket.createBucket(function () {
        let params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
            if (err) {
                console.log('error in callback');
                console.log(err);
            }
            console.log('success');
            // console.log(data.Key);
        })
    });
}

module.exports = async (req, res) => {
    try {
        const product = req.body;
        const file = req.files.element;

        const {user_id} = req.user;
        const {name} = await fileCheker(file);


        product.user_id = user_id;
        product.photo_name = name;

        const busboy = new BusBoy({headers: req.headers});

        busboy.on('finish', function () {
            console.log('Upload finished');

            uploadToS3(file);
        });
        req.pipe(busboy);

        await productService.createProduct(product);
        res.send('Create Product')
    } catch (e) {
        console.log(e);
    }
};
