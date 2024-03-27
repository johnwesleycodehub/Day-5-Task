//! Resume data on JSON Format

let ownResume = [
  {
  "basics": {
    "name": "John Wesley",
    "email": "johnwesley2307r@gmail.com",
    "phone": "9655291756",
    "github url": "https://github.com/johnwesleycodehub",
    "location": {
      "address": "Ponnagar,Mettur",
      "postalCode": "636401",
      "city": "Salem",
      "state": "Tamil Nadu",
      "country": "India",
    },
  },
},

  { "work": 
    {
      "company":"Tata Consultancy Services",
      "position":"Product Specialist",
      "startDate":"2022-07-21",
      "summary":"Working as a Product Specialist in Google YouTube Tv operations",
    },
  "education": 
    {
      "institution": "Bannari Amman Institute of Technology",
      "department": "Automobile Engineering",
      "studyType": "fulltime",
      "batch start year": "2018",
      "batch end year": "2022",
      "gpa": "8.6",
    },
  },
    {"skills":
    {
      "name": "c++,javascript",
      "level": "beginer",
      "project": ["Automotive Cruise Control System"],
    },
  }, 
  {
  "languages": [
    {
      "language": "Tamil,Enlish",
    },
  ],
  "interests": [
    {
      "interest": "Music composing,Music Teaching",
    },
  ],
},
]
console.log(ownResume);


//------------------------------------------------------------------------

//! Iterate over all for loops (for, for in, for of, for each)
//! using for loop
for(var i=0;i<ownResume.length;i=i+1)
{
  var display=ownResume[i];
  console.log(display.basics);
  console.log(display.education);
  console.log(display.work);
  console.log(display.skills);
}

//! using for in loop
for(var key in ownResume){
  console.log(ownResume[key].basics);
  console.log(ownResume[key].education);
  }


// ! using for of loop
for(var a of ownResume)
{
    console.log(a);
}

 //! using for each lopp
 ownResume.forEach(function(display) 
 { console.log(display.education); 
  console.log((display.basics));
  console.log(display.skills);
}

 );