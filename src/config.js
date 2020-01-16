export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "awsibagroup"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://biqa759rh0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_xoQHq3dt6",
      APP_CLIENT_ID: "1bq7gop2cv8gbsj5a5haclg49k",
      IDENTITY_POOL_ID: "us-east-1:e4c8642c-9cbd-47f3-a382-14c75457c916"
    }
  };