# Find Your Internship

---

Name: Chidiebele Udeze

Date: Dec 1st, 2018

Project Topic: Helping students find internships

URL: http://103.283.293.13:3000/
 ---

### 1. Data Format and Storage

Data point fields:
- `Field 1`: company       `Type: String`
- `Field 2`: createdAt     `Type: Date`
- `Field 3`: popularity    `Type: Number`
- `Field 4`: id            `Type: Number`
- `Field 5`: location      `Type: [String]`

Schema:
```javascript
{
  company : {
    type: String,
    required: true
  },
  location: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  id: {
    type: Number,
    required: true
  },
  popularity: {
    type: Number,
    default: 1
  }
}
```

### 2. Add New Data

HTML form route: `/internship/add`

POST endpoint route: `/internship/add`

POST endpoint route: `/internship/inc`

Example Node.js POST request to endpoint:
```javascript
var request = require("request");

var options = {
    method: 'POST',
    url: 'http://localhost:3000/internship/add',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
        company: 'Chidi Company',
        location: 'MD'
    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### 3. View Data

GET endpoint route: `/api/new`

GET endpoint route: `/api/popular`

GET endpoint route: `/api/popular/:amount`

GET endpoint route: `/api/state/:state`

GET endpoint route: `/api/all`

Example Node.js GET request to endpoint:
```javascript
var request = require("request");

var options = {
    url: 'http://localhost:3000/api/all',
};

request(options.url, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### 4. Search Data

Search Field: `company`

### 5. Navigation Pages

Navigation Filters
1. Newest -> `/new`
2. Location -> `/state/:stateabv`
3. Random -> `/random`
4. Popular -> `/popular`
5. Alphabetically -> `/alphabetical`
