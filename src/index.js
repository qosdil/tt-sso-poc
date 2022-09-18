const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
function component() {
  const element = document.createElement('div');

  // From https://docs.aws.amazon.com/cognito/latest/developerguide/authentication.html
  // Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.

  var authenticationData = {
    Username : '__EMAIL__',
    Password : '__PASSWORD__',
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  var poolData = {
    UserPoolId : '__USER_POOL_ID__',
    ClientId : '__CLIENT_ID__'
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
    Username : '__EMAIL__',
    Pool : userPool,
    Storage: new AmazonCognitoIdentity.CookieStorage({domain: "tiplocal.studio", secure: true, httpOnly: true}),
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log('accessToken: ' + accessToken);
        element.innerHTML = 'You\'re signed in as ' + authenticationData.Username + '<br/><br/>'
          + 'Will open in new tab: <a href="https://bizcenter.tiplocal.studio:9001" target="_blank">Biz Center</a>' + '<br/><br/>'
          + 'accessToken: ' + accessToken;

        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        var idToken = result.idToken.jwtToken;
        console.log('idToken: ' + idToken);
    },

    onFailure: function(err) {
        alert(err);
    },

  });

  return element;
}

document.body.appendChild(component());