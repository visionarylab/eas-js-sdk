# echaloasuerte-js-sdk

EchaloasuerteJsSdk - JavaScript client for echaloasuerte-js-sdk
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install echaloasuerte-js-sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your echaloasuerte-js-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
var EchaloasuerteJsSdk = require('echaloasuerte-js-sdk');


var api = new EchaloasuerteJsSdk.CoinApi()
var coin = new EchaloasuerteJsSdk.Coin(); // {Coin} 
api.coinCreate(coin).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://raw.githubusercontent.com/should-be-overriden*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EchaloasuerteJsSdk.CoinApi* | [**coinCreate**](docs/CoinApi.md#coinCreate) | **POST** /coin/ | 
*EchaloasuerteJsSdk.CoinApi* | [**coinRead**](docs/CoinApi.md#coinRead) | **GET** /coin/{id}/ | 
*EchaloasuerteJsSdk.CoinApi* | [**coinToss**](docs/CoinApi.md#coinToss) | **POST** /coin/{id}/toss/ | 
*EchaloasuerteJsSdk.GroupsApi* | [**groupsCreate**](docs/GroupsApi.md#groupsCreate) | **POST** /groups/ | 
*EchaloasuerteJsSdk.GroupsApi* | [**groupsParticipantsAdd**](docs/GroupsApi.md#groupsParticipantsAdd) | **POST** /groups/{id}/participants/ | 
*EchaloasuerteJsSdk.GroupsApi* | [**groupsRead**](docs/GroupsApi.md#groupsRead) | **GET** /groups/{id}/ | 
*EchaloasuerteJsSdk.GroupsApi* | [**groupsToss**](docs/GroupsApi.md#groupsToss) | **POST** /groups/{id}/toss/ | 
*EchaloasuerteJsSdk.LetterApi* | [**letterCreate**](docs/LetterApi.md#letterCreate) | **POST** /letter/ | 
*EchaloasuerteJsSdk.LetterApi* | [**letterRead**](docs/LetterApi.md#letterRead) | **GET** /letter/{id}/ | 
*EchaloasuerteJsSdk.LetterApi* | [**letterToss**](docs/LetterApi.md#letterToss) | **POST** /letter/{id}/toss/ | 
*EchaloasuerteJsSdk.LinkApi* | [**linkCreate**](docs/LinkApi.md#linkCreate) | **POST** /link/ | 
*EchaloasuerteJsSdk.LinkApi* | [**linkRead**](docs/LinkApi.md#linkRead) | **GET** /link/{id}/ | 
*EchaloasuerteJsSdk.LinkApi* | [**linkToss**](docs/LinkApi.md#linkToss) | **POST** /link/{id}/toss/ | 
*EchaloasuerteJsSdk.LotteryApi* | [**lotteryCreate**](docs/LotteryApi.md#lotteryCreate) | **POST** /lottery/ | 
*EchaloasuerteJsSdk.LotteryApi* | [**lotteryParticipantsAdd**](docs/LotteryApi.md#lotteryParticipantsAdd) | **POST** /lottery/{id}/participants/ | 
*EchaloasuerteJsSdk.LotteryApi* | [**lotteryRead**](docs/LotteryApi.md#lotteryRead) | **GET** /lottery/{id}/ | 
*EchaloasuerteJsSdk.LotteryApi* | [**lotteryToss**](docs/LotteryApi.md#lotteryToss) | **POST** /lottery/{id}/toss/ | 
*EchaloasuerteJsSdk.RaffleApi* | [**raffleCreate**](docs/RaffleApi.md#raffleCreate) | **POST** /raffle/ | 
*EchaloasuerteJsSdk.RaffleApi* | [**raffleParticipantsAdd**](docs/RaffleApi.md#raffleParticipantsAdd) | **POST** /raffle/{id}/participants/ | 
*EchaloasuerteJsSdk.RaffleApi* | [**raffleRead**](docs/RaffleApi.md#raffleRead) | **GET** /raffle/{id}/ | 
*EchaloasuerteJsSdk.RaffleApi* | [**raffleToss**](docs/RaffleApi.md#raffleToss) | **POST** /raffle/{id}/toss/ | 
*EchaloasuerteJsSdk.RandomNumberApi* | [**randomNumberCreate**](docs/RandomNumberApi.md#randomNumberCreate) | **POST** /random_number/ | 
*EchaloasuerteJsSdk.RandomNumberApi* | [**randomNumberRead**](docs/RandomNumberApi.md#randomNumberRead) | **GET** /random_number/{id}/ | 
*EchaloasuerteJsSdk.RandomNumberApi* | [**randomNumberToss**](docs/RandomNumberApi.md#randomNumberToss) | **POST** /random_number/{id}/toss/ | 
*EchaloasuerteJsSdk.SpinnerApi* | [**spinnerCreate**](docs/SpinnerApi.md#spinnerCreate) | **POST** /spinner/ | 
*EchaloasuerteJsSdk.SpinnerApi* | [**spinnerRead**](docs/SpinnerApi.md#spinnerRead) | **GET** /spinner/{id}/ | 
*EchaloasuerteJsSdk.SpinnerApi* | [**spinnerToss**](docs/SpinnerApi.md#spinnerToss) | **POST** /spinner/{id}/toss/ | 


## Documentation for Models

 - [EchaloasuerteJsSdk.BaseDraw](docs/BaseDraw.md)
 - [EchaloasuerteJsSdk.BaseDrawAllOf](docs/BaseDrawAllOf.md)
 - [EchaloasuerteJsSdk.BaseObject](docs/BaseObject.md)
 - [EchaloasuerteJsSdk.BaseResult](docs/BaseResult.md)
 - [EchaloasuerteJsSdk.BaseResultAllOf](docs/BaseResultAllOf.md)
 - [EchaloasuerteJsSdk.Coin](docs/Coin.md)
 - [EchaloasuerteJsSdk.CoinAllOf](docs/CoinAllOf.md)
 - [EchaloasuerteJsSdk.CoinResult](docs/CoinResult.md)
 - [EchaloasuerteJsSdk.CoinResultAllOf](docs/CoinResultAllOf.md)
 - [EchaloasuerteJsSdk.DrawMetadata](docs/DrawMetadata.md)
 - [EchaloasuerteJsSdk.DrawTossPayload](docs/DrawTossPayload.md)
 - [EchaloasuerteJsSdk.Groups](docs/Groups.md)
 - [EchaloasuerteJsSdk.GroupsAllOf](docs/GroupsAllOf.md)
 - [EchaloasuerteJsSdk.GroupsResult](docs/GroupsResult.md)
 - [EchaloasuerteJsSdk.GroupsResultAllOf](docs/GroupsResultAllOf.md)
 - [EchaloasuerteJsSdk.Letter](docs/Letter.md)
 - [EchaloasuerteJsSdk.LetterAllOf](docs/LetterAllOf.md)
 - [EchaloasuerteJsSdk.LetterResult](docs/LetterResult.md)
 - [EchaloasuerteJsSdk.LetterResultAllOf](docs/LetterResultAllOf.md)
 - [EchaloasuerteJsSdk.Link](docs/Link.md)
 - [EchaloasuerteJsSdk.LinkAllOf](docs/LinkAllOf.md)
 - [EchaloasuerteJsSdk.LinkResult](docs/LinkResult.md)
 - [EchaloasuerteJsSdk.LinkResultAllOf](docs/LinkResultAllOf.md)
 - [EchaloasuerteJsSdk.LinkResultAllOfValue](docs/LinkResultAllOfValue.md)
 - [EchaloasuerteJsSdk.Lottery](docs/Lottery.md)
 - [EchaloasuerteJsSdk.LotteryAllOf](docs/LotteryAllOf.md)
 - [EchaloasuerteJsSdk.LotteryResult](docs/LotteryResult.md)
 - [EchaloasuerteJsSdk.LotteryResultAllOf](docs/LotteryResultAllOf.md)
 - [EchaloasuerteJsSdk.Participant](docs/Participant.md)
 - [EchaloasuerteJsSdk.ParticipantAllOf](docs/ParticipantAllOf.md)
 - [EchaloasuerteJsSdk.Prize](docs/Prize.md)
 - [EchaloasuerteJsSdk.PrizeAllOf](docs/PrizeAllOf.md)
 - [EchaloasuerteJsSdk.Raffle](docs/Raffle.md)
 - [EchaloasuerteJsSdk.RaffleAllOf](docs/RaffleAllOf.md)
 - [EchaloasuerteJsSdk.RaffleResult](docs/RaffleResult.md)
 - [EchaloasuerteJsSdk.RaffleResultAllOf](docs/RaffleResultAllOf.md)
 - [EchaloasuerteJsSdk.RaffleResultAllOfValue](docs/RaffleResultAllOfValue.md)
 - [EchaloasuerteJsSdk.RandomNumber](docs/RandomNumber.md)
 - [EchaloasuerteJsSdk.RandomNumberAllOf](docs/RandomNumberAllOf.md)
 - [EchaloasuerteJsSdk.RandomNumberResult](docs/RandomNumberResult.md)
 - [EchaloasuerteJsSdk.RandomNumberResultAllOf](docs/RandomNumberResultAllOf.md)
 - [EchaloasuerteJsSdk.Spinner](docs/Spinner.md)
 - [EchaloasuerteJsSdk.SpinnerAllOf](docs/SpinnerAllOf.md)
 - [EchaloasuerteJsSdk.SpinnerResult](docs/SpinnerResult.md)
 - [EchaloasuerteJsSdk.SpinnerResultAllOf](docs/SpinnerResultAllOf.md)


## Documentation for Authorization

All endpoints do not require authorization.
