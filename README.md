[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/NaverCloudPlatform/ncloud-sdk-go/blob/master/LICENSE)

# ncloud-sdk

## 설치

### For [Node.js](https://nodejs.org/)

#### npm

설치는 npm 또는 yarn 을 이용해서 아래의 명령어로 설치할 수 있습니다.

```
npm install ncloud-sdk --save
```

## 시작하기

### ncloud-sdk 를 사용하기 위해서는 먼저 인증키를 생성해야 합니다.

- 인증키는 [포털](https://www.ncloud.com)의 마이페이지 > 계정관리 > [인증키 관리](https://www.ncloud.com/mypage/manage/authkey) 메뉴에서 "신규 API 인증키 생성"을 통해서 Access Key ID, Secret Key 를 생성합니다.
- 이미 생성된 인증키가 있을 경우 [포털](https://www.ncloud.com)의 마이페이지 > 계정관리 > [인증키 관리](https://www.ncloud.com/mypage/manage/authkey) 메뉴에서 확인할 수 있습니다.
- sub account 의 경우, [Console](https://console.ncloud.com)의 [Sub Account](https://console.ncloud.com/iam/dashboard) > Sub Accounts > 서브 계정 상세 메뉴에서 "API Key"탭에서 생성한 Access Key ID, Secret Key 를 사용할 수도 있습니다.

### 생성된 인증키 정보를 저장합니다.

- Mac/Linux 의 경우 ~/.ncloud/configure 에, Windows 의 경우 C:\Users\USERNAME\\.ncloud\configure 에 인증키 정보를 저장합니다.
- configure 파일은 [NCLOUD CLI](https://cli.ncloud-docs.com/docs/guide-userguide) 를 이용하여 생성할 수도 있습니다.
- configure example

```
ncloud_access_key_id = C9zxQyBQVqcRNQmcAXKn
ncloud_secret_access_key = NDgSdssXg4RiMMN1f5dqIe775GJXzSe8hWpd2X3g
```

## Example

```javascript
var ncloud = require('ncloud-sdk');
var Server = require('ncloud-server');

var n = new ncloud();
var client = new Server.ApiClient(n.keys());
var instance = new Server.V2Api(client);

instance.getServerInstanceList({}, function(err, data, response) {
  if (err) {
    console.error(err);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
});
```

## Server Role

- Server Role은 서브계정과 유사한 수준의 권한을 Server에 부여하는 서비스로 VPC Server에 적용할 수 있는 서비스입니다. Role이 설정된 Server 내에서 Ncloud SDK 를 실행하면 metadata api를 통해 임시 자격 증명을 받아와서 API인증키로 사용됩니다. 
- Server Role을 사용하기 위해 ncloud-sdk-js `ncloud.init` 를 호출해서 인증키를 받아야 합니다. Server Role 인증키 적용 방법은 Example 을 참고하시기 바랍니다.
- [Console](https://console.ncloud.com)의 [Sub Account](https://console.ncloud.com/iam/dashboard) > Roles 메뉴에서 Server Role을 설정할 수 있습니다.
 
### Example

```javascript
var ncloud = require('ncloud-sdk');
var Server = require('ncloud-server');

var n = new ncloud();
n.init(function (err, creds) {
  if (err) {
    throw err;
  }
  var client = new Server.ApiClient();
  client.credentials = creds;
  var instance = new Server.V2Api(client);
    
  instance.getServerInstanceList({}, function(err, data, response) {
    if (err) {
      console.error(err);
    } else {
      console.log('API called successfully. Returned data: ', data);
    }
  });  
});

```

`ncloud.init`를 사용하면 아래 순서로 인증키를 찾습니다: 

1. Environment: NCLOUD_ACCESS_KEY_ID (또는 NCLOUD_ACCESS_KEY), NCLOUD_SECRET_KEY (또는 NCLOUD_SECRET_ACCESS_KEY) 환경변수 정보를 찾습니다. 
2. Config File: configure 파일에서 인증키를 찾습니다. Mac/Linux 의 경우 ~/.ncloud/configure 에, Windows 의 경우 C:\Users\USERNAME\\.ncloud\configure 에 인증키 정보를 저장합니다.
3. ServerRole: Server Role이 설정된 VPC Server에서 metadata api 를 통해 임시 인증키를 찾습니다. 임시 인증키는 Role에 부여된 권한이 반영됩니다.





## Documentation for individual modules

| Services       | Documentation                                                                                                           | Install Command                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| _Server_       | [**Server**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/server/README.md)             | npm install ncloud-server       |
| _Loadbalancer_ | [**Loadbalancer**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/loadbalancer/README.md) | npm install ncloud-loadbalancer |
| _Autoscaling_  | [**Autoscaling**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/autoscaling/README.md)   | npm install ncloud-autoscaling  |
| _Monitoring_   | [**Monitoring**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/monitoring/README.md)     | npm install ncloud-monitoring   |
| _CDN_          | [**CDN**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/cdn/README.md)                   | npm install ncloud-cdn          |
| _CloudDB_      | [**CloudDB**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/clouddb/README.md)           | npm install ncloud-clouddb      |
| _Server(VPC)_  | [**Server(VPC)**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/vserver/README.md)       | npm install ncloud-vserver      |
| _VPC_          | [**VPC**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/vpc/README.md)                   | npm install ncloud-vpc          |
| _Nas(VPC)_     | [**Nas(VPC)**](https://github.com/NaverCloudPlatform/ncloud-sdk-js/blob/master/lib/services/vnas/README.md)             | npm install ncloud-vnas         |

### License

```
Copyright (c) 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
