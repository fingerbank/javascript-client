
function FingerbankClient(){
  var self = this;
  self.key = "javascript-lib";
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
    url:"https://fingerbank.inverse.ca/api/v1/combinations/interogate",
    beforeSend: function(request){
      request.setRequestHeader("X-Fingerbank-Lib", "Inverse-Javascript-Lib");
    },
    data:{
      user_agent: userAgent,
      key: self.key,
    },
    success: function(data){
      callback(new Endpoint(data));
    },
    error: function(response){
      if(response.status == 404){
        callback();
      }
      else {
        console.error("Fingerbank API call failed with error : "+response.status+", Response text : "+response.responseText);
        var error = {status : response.status, message : response.responseText};
        callback(null,error);
      }
    }
  });
}

