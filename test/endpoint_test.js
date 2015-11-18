function EndpointTest(){
  var self = this;
  self.setup();
}

EndpointTest.prototype.assert = function(condition, message) {
  if(!condition){
    throw message || "Assertion failed...";
  }
  else {
    console.log("Test passed ! "+message);
  }
}

EndpointTest.prototype.setup = function() {
  var self = this;
  self.androidResult = '{"id":88809,"score":10,"version":"5.1","created_at":"2015-04-20T17:42:03.000Z","updated_at":"2015-04-20T17:42:03.000Z","device":{"id":4404,"name":"Dream Uno","mobile":false,"created_at":"2014-11-13T12:46:19.000Z","updated_at":"2014-11-13T12:46:19.000Z","parent_id":4403,"inherit":false,"parents":[{"id":4403,"name":"Spice Android","mobile":false,"tablet":false,"created_at":"2014-11-13T12:46:19.000Z","updated_at":"2014-11-13T12:46:19.000Z","parent_id":202,"inherit":false,"submitter_id":null,"approved":true},{"id":202,"name":"Generic Android","mobile":true,"tablet":false,"created_at":"2014-09-09T15:09:52.000Z","updated_at":"2015-02-06T15:53:25.000Z","parent_id":11,"inherit":false,"submitter_id":null,"approved":true},{"id":11,"name":"Smartphones/PDAs/Tablets","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-11-14T19:02:32.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.windowsResult = '{"id":88808,"score":10,"version":null,"created_at":"2015-04-20T17:37:29.000Z","updated_at":"2015-04-20T17:37:29.000Z","device":{"id":36,"name":"Microsoft Windows 7 or Server 2008 R2 or Server SBS 2011 (Version 6.1)","mobile":false,"created_at":"2014-09-09T15:09:51.000Z","updated_at":"2014-09-10T18:41:12.000Z","parent_id":1,"inherit":false,"parents":[{"id":1,"name":"Windows","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-09-09T15:09:50.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.macResult = '{"id":88807,"score":5,"version":"10.8.5","created_at":"2015-04-20T17:36:07.000Z","updated_at":"2015-04-20T17:36:07.000Z","device":{"id":38,"name":"Mac OS X","mobile":false,"created_at":"2014-09-09T15:09:51.000Z","updated_at":"2015-03-24T11:44:09.000Z","parent_id":2,"inherit":false,"parents":[{"id":2,"name":"Macintosh","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-09-09T15:09:50.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.iosResult = '{"id":84040,"score":5,"version":"8.2","created_at":"2015-04-13T22:08:29.000Z","updated_at":"2015-04-15T06:02:44.000Z","device":{"id":264,"name":"Apple iPhone","mobile":true,"created_at":"2014-09-09T15:10:22.000Z","updated_at":"2015-02-06T15:53:26.000Z","parent_id":193,"inherit":false,"parents":[{"id":193,"name":"Apple iPod, iPhone or iPad","mobile":true,"tablet":false,"created_at":"2014-09-09T15:09:52.000Z","updated_at":"2015-02-04T15:53:52.000Z","parent_id":11,"inherit":false,"submitter_id":null,"approved":true},{"id":11,"name":"Smartphones/PDAs/Tablets","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-11-14T19:02:32.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.windowsPhoneResult = '{"id":85817,"score":10,"version":"7.5","created_at":"2015-04-16T22:09:17.000Z","updated_at":"2015-04-16T22:09:17.000Z","device":{"id":5530,"name":"Windows phone - Lumia 710","mobile":true,"created_at":"2014-12-22T05:43:52.000Z","updated_at":"2015-02-18T20:11:09.000Z","parent_id":5492,"inherit":false,"parents":[{"id":5492,"name":"NOKIA Windows Phone","mobile":false,"tablet":false,"created_at":"2014-11-14T18:16:26.000Z","updated_at":"2014-11-14T18:16:26.000Z","parent_id":5474,"inherit":false,"submitter_id":null,"approved":true},{"id":5474,"name":"Windows Phone","mobile":true,"tablet":false,"created_at":"2014-11-13T22:11:04.000Z","updated_at":"2015-02-04T15:53:53.000Z","parent_id":11,"inherit":false,"submitter_id":null,"approved":true},{"id":11,"name":"Smartphones/PDAs/Tablets","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-11-14T19:02:32.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.blackberryResult = '{"id":88668,"score":5,"version":"7.1.0.398","created_at":"2015-04-20T13:35:49.000Z","updated_at":"2015-04-20T13:35:49.000Z","device":{"id":5487,"name":"BlackBerry 9320","mobile":true,"created_at":"2014-11-14T16:16:44.000Z","updated_at":"2015-02-04T15:53:52.000Z","parent_id":192,"inherit":false,"parents":[{"id":192,"name":"RIM BlackBerry","mobile":true,"tablet":false,"created_at":"2014-09-09T15:09:52.000Z","updated_at":"2015-02-06T15:53:26.000Z","parent_id":11,"inherit":false,"submitter_id":null,"approved":true},{"id":11,"name":"Smartphones/PDAs/Tablets","mobile":false,"tablet":false,"created_at":"2014-09-09T15:09:50.000Z","updated_at":"2014-11-14T19:02:32.000Z","parent_id":null,"inherit":false,"submitter_id":null,"approved":true}]}}';

  self.androidEndpoint = new Endpoint(JSON.parse(self.androidResult));
  self.windowsEndpoint = new Endpoint(JSON.parse(self.windowsResult));
  self.macEndpoint = new Endpoint(JSON.parse(self.macResult));
  self.iosEndpoint = new Endpoint(JSON.parse(self.iosResult));
  self.windowsPhoneEndpoint = new Endpoint(JSON.parse(self.windowsPhoneResult));
  self.blackberryEndpoint = new Endpoint(JSON.parse(self.blackberryResult));
}

EndpointTest.prototype.runTests = function() {
  var self = this;
  self.assert(self.androidEndpoint.name == "Dream Uno", "Endpoint name is properly populated");
  self.assert(self.androidEndpoint.score == 10, "Score is properly populated");
  self.assert(self.androidEndpoint.version == "5.1", "Version is properly populated");
  self.assert(self.androidEndpoint.parents.length == 3, "Parents length is correct");
  
  self.assert(self.androidEndpoint.hasParent("Smartphones/PDAs/Tablets"), "Endpoint.hasParent top parent detection is correct");
  self.assert(self.androidEndpoint.hasParent("Generic Android"), "Endpoint.hasParent parent detection is correct");
  self.assert(self.androidEndpoint.hasParent("Spice Android"), "Endpoint.hasParent parent detection is correct");

  self.assert(self.androidEndpoint.is("Dream Uno"), "Endpoint.is works on the device itself");
  self.assert(self.androidEndpoint.is("Generic Android"), "Endpoint.is works on a parent");

  self.assert(self.androidEndpoint.isAndroid(), "Endpoint.isAndroid detects Android devices");
  self.assert(!self.androidEndpoint.isIos(), "Android is not detected as an IOS");
  self.assert(!self.androidEndpoint.isWindows(), "Android is not detected as a Windows");

  self.assert(self.windowsEndpoint.isWindows(), "Endpoint.isWindows detects Windows devices");

  self.assert(self.macEndpoint.isMac(), "Endpoint.isMac detects Mac devices");

  self.assert(self.iosEndpoint.isIos(), "Endpoint.isIos detects IOS devices");

  self.assert(self.windowsPhoneEndpoint.isWindowsPhone(), "Endpoint.isWindowsPhone detects Windows phones");

  self.assert(self.blackberryEndpoint.isBlackberry(), "Endpoint.isBlackberry detects Blackberry devices");
}
