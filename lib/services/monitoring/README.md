# ncloud-monitoring

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install ncloud-monitoring --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Monitoring = require('ncloud-monitoring');

var client = new Monitoring.ApiClient({
  accessKey: 'your access key',
  secretKey: 'your secret key',
});

var apiInstance = new Monitoring.V2Api(client)

var getListMetricsRequest = new Monitoring.GetListMetricsRequest(); // {GetListMetricsRequest} getListMetricsRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListMetrics(getListMetricsRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://ncloud.apigw.ntruss.com/monitoring/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Monitoring.V2Api* | [**getListMetrics**](docs/V2Api.md#getListMetrics) | **POST** /getListMetrics | 
*Monitoring.V2Api* | [**getMetricStatistics**](docs/V2Api.md#getMetricStatistics) | **POST** /getMetricStatistics | 


## Documentation for Models

 - [Monitoring.DataPoint](docs/DataPoint.md)
 - [Monitoring.DataPoints](docs/DataPoints.md)
 - [Monitoring.GetListMetricsRequest](docs/GetListMetricsRequest.md)
 - [Monitoring.GetListMetricsResponse](docs/GetListMetricsResponse.md)
 - [Monitoring.GetMetricStatisticsRequest](docs/GetMetricStatisticsRequest.md)
 - [Monitoring.GetMetricStatisticsResponse](docs/GetMetricStatisticsResponse.md)
 - [Monitoring.Metric](docs/Metric.md)
 - [Monitoring.Statistic](docs/Statistic.md)


### License

```
Copyright 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
