
module.exports = {
    
    awsS3: async (files, callback) => {

        const AWS = require('aws-sdk');
        var filesPath = [];
        var count = 0;
        const s3 = new AWS.S3({
            Bucket: 'ipangram.com',
            accessKeyId: 'AKIA2DFKFWOXGPJ27DWJ',    //access key for bucket
            secretAccessKey: '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' // secret key for bucket
        });
        console.log('files', files.length)
        await files.forEach(async function (i) {
            if (i.name) {
                await s3.createBucket(async function () {
                    var params = {
                        Bucket: 'ipangram.com/upload',
                        Key: i.name,
                        Body: i.data
                    };
                    await s3.upload(params, function (err, data) {
                        count++;
                        if (err) {
                            console.log('error in callback');
                            console.log(err);
                            callback(err, null);
                        }
                        filesPath.push(data.Location);
                        console.log('filepath', count, files.length);
                        if (files.length == count) {
                            callback(null, filesPath);
                        }
                    });
                });
            }
            else {
                count++;
                filesPath.push(i);
                if (files.length == count) {
                    callback(null, filesPath);
                }
            }
        });
    },

 
}