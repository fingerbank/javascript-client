
function FingerbankClient(key){
  var self = this;
  self.key = key;
}
// Tests run through node so we need to export it
if(typeof(requireGlobal) == "function") exports.FingerbankClient = FingerbankClient;

FingerbankClient.prototype.endpointFromCurrentUserAgent = function(callback){
  var self = this;
  return self.endpointFromUserAgent(navigator.userAgent, callback);
}

FingerbankClient.prototype.endpointFromUserAgent = function(userAgent, callback){
  var self = this;
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:3000/api/v1/combinations/interogate",
    data:{
      user_agent: userAgent,
      key: self.key,
    },
    success: function(data){
      callback(new Endpoint(data));
    },
    error: function(response){
      if(response.status == 404){
        callback()
      }
      else {
        throw "Failed with error : "+response.status;
      }
    }
  });
}

