# Fingerbank Javascript client (fingerbank-client)


## About

The Fingerbank client is a Javascript client that can accuratly determine what kind of device is using your application based on the client user agent. It uses the data collected by the Fingerbank project and it's public API to allow the discovery of more than 5000 devices including detailed information of most of the Android devices.

## Installation

You can install the client with bower

`# bower install fingerbank-client`

And import `dist/fingerbank-client.js` in your application

You can also add the following tag to your webpage :

`<script src="http://fingerbank.org/libs/javascript/fingerbank-client.js"></script>`

## Usage

First, you need to initialize the client.

`var client = new FingerbankClient();`

And you can then interogate the API with a user agent

`var endpoint = client.endpointFromUserAgent("Some user agent string")`

You can also get the Endpoint object from the currently connected browser

`var endpoint = client.endpointFromCurrentUserAgent()`

Here are the most interesting attributes/methods for an endpoint

```
endpoint.name     // friendly device name
endpoint.parents  // friendly names of the hierarchy of this device. From closest to furtest
endpoint.version  // The OS version of the device.
endpoint.isAndroid()
endpoint.isIOS()
endpoint.isWindows()
endpoint.isMac()
endpoint.isWindowsPhone()
endpoint.isBlackberry()
endpoint.hasParent("Generic Android") // Check if the device has for parent 'Generic Android'
endpoint.is("Samsung Android") // Check if the device is or has for parent Samsung Android
```

## Example

An example is provided in this repository in `index.html`.

