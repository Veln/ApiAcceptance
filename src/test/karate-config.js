function() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  var baseUrl;

  if (!env) {
    env = 'dev';
  }
  
  var config = {
    env: env,
//	myVarName: 'someValue'
    baseUrl: 'https://baseurl-should-come-hear.com',
   }

  if (env == 'dev') {
    // customize
    config.baseUrl = 'https://dev-test-base-url.com'
    } else if (env == 'environtment1') {
    config.baseUrl = 'https://enviroment-base-url-1.com'
  }else if (env == 'environment2') {
    config.baseUrl = 'https://enviroment-base-url-2.com'
  }else if (env == 'environment3'){
   config.baseUrl = 'https://enviroment-base-url-3.com'
  }
