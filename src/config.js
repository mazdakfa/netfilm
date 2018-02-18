let config = {};

config.authInstanceId = "5a893d15e4b04e579e82c63a";
config.objectSorageInstanceId = "5a893d16e4b092a32b03e125";
config.integratedMasterKey = "150b3e7a42674b6cbf5fd26e";
config.clientKey = "5a893d15e4b05bb64131ee30";
config.cloudCode = "5a893d16e4b092a32b03e122";
config.cdnInstanceId = "5a897d18e4b04e579e84a28a";

config.baseUrl = "http://storage.backtory.com/movieslist";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;