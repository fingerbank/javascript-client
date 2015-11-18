
function Endpoint(result){
  var self = this;
  self.name = result['device']['name'];
  self.version = result['version'];
  self.score = result['score'];

  self.parents = [];
  for(var i in result['device']['parents']){  
    self.parents.push(result['device']['parents'][i]['name']);
  }
}
// Tests run through node so we need to export it
if(typeof(requireGlobal) == "function") exports.Endpoint = Endpoint;

Endpoint.prototype.hasParent = function(name){
  var self = this;
  return self.parents.indexOf(name) > -1;
}

Endpoint.prototype.is = function(name){
  var self = this;
  return (self.name == name || self.hasParent(name));
}

Endpoint.prototype.isAndroid = function(){
  var self = this;
  return self.is("Generic Android");
}

Endpoint.prototype.isIos = function(){
  var self = this;
  return self.is("Apple iPod, iPhone or iPad");
}

Endpoint.prototype.isWindows = function(){
  var self = this;
  return self.is("Windows");
}

Endpoint.prototype.isMac = function(){
  var self = this;
  return self.is("Macintosh");
}

Endpoint.prototype.isWindowsPhone = function(){
  var self = this;
  return self.is("Windows Phone");
}

Endpoint.prototype.isBlackberry = function(){
  var self = this;
  return self.is("RIM BlackBerry");
}


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

