# TiTTTAttributedLabel Module

## Description

Wrapper for the [TTTAttributedLabel](https://github.com/mattt/TTTAttributedLabel) library

Supports highlighting for all checking types supported by NSTextCheckingTypes.

It handles clicks and fires events for the following types:
* links: `link` event
* addresses: `address` event
* phone numbers: `phone` event

|Event name | Event object keys|
|----------:|:-----------------|
|`link`     | `url`: the clicked URL, for example "https://www.github.com" |
|`phone`    | `phone`: the clicked phone number |
|`address`  | `address`: an object containing information on the clicked address. Contains keys such as `Street`, `ZIP`, `City` and `State`. |

## Usage
See app.js file
