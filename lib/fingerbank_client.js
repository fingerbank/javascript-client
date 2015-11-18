
function FingerbankClient(key){
  var self = this;
  self.key = key;
}
// Tests run through node so we need to export it
if(typeof(requireGlobal) == "function") exports.FingerbankClient = FingerbankClient;

FingerbankClient.prototype.resultFromCurrentUserAgent = function(callback){
  var self = this;
  return self.resultFromUserAgent(navigator.userAgent, callback);
}

FingerbankClient.prototype.resultFromUserAgent = function(userAgent, callback){
  var self = this;
  $.get("http://127.0.0.1:3000/api/v1/combinations/interogate",
    {
      user_agent: userAgent,
      key: self.key,
    },
    function(data){
      callback(new Endpoint(data));
    }
  );
}

