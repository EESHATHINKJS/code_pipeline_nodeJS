const { S3Client, GetObjectCommand} = require('@aws-sdk/client-s3');
const client = new S3Client({"region": "us-east-1"});
module.exports.getCountryList=async() =>{

    const streamToString = (stream) => new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });

    const params = {
        Bucket: 'lifedemy',
        Key: 'country_list_withFlag.json',
      };
      const command = new GetObjectCommand(params);
      const response = await client.send(command);
      const {Body} = response
      return streamToString(Body);
}