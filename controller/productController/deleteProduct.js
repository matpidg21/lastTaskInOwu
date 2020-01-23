const AWS = require('aws-sdk');

const {productService} = require('../../service');
const {AWS_SECRET} = require('../../constant');

const BUCKET_NAME = 'photo-test-bucket';
const IAM_USER_KEY = AWS_SECRET.iamUser;
const IAM_USER_SECRET = AWS_SECRET.iamSecret;


module.exports = async (req, res) => {
    try {
        AWS.config.update({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET
        });

        const s3 = new AWS.S3();
        const {user_id} = req.user;
        const {product_id} = req.params;

        const {photo_name, user_id: id} = await productService.getProductByParams({id: product_id});

        if (user_id !== id){
            throw new Error("this product is not this user")
        }
        const params = {
            Bucket: BUCKET_NAME,
            Key: photo_name
        };
        await s3.headObject(params).promise();
        console.log("File Found in S3");
        try {
            await s3.deleteObject(params).promise();

            console.log("file deleted Successfully")

        } catch (err) {
            console.log("ERROR in file Deleting : " + JSON.stringify(err))
        }
        await productService.deleteProduct({id: product_id});

        res.end('delete product')
    } catch (e) {
        console.log(e);
    }
};
