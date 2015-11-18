function requireGlobal(module){
  var ns = require(module);
  for (var key in ns)
      global[key] = ns[key];
}
global['requireGlobal'] = requireGlobal;

requireGlobal("./endpoint_test.js");
(new EndpointTest()).runTests()
