//! Resume data on JSON Format

let ownResume = {
  personaldetails: {
    name: "JOHN WESLEY R",
    email: "johnwesley2307r@gamil.com",
    phone: 6381301756,
    degree: "B.E",
    location: {
      address: "Ponnagar,Mettur",
      postalCode: 636401,
      city: "Salem",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: [
      {
        github: "https://github.com/johnwesleycodehub",
      },
    ],
  },
  work: [
    {
      company: "Tata Consultancy Services",
      position: "Product Specialist",
      startDate: "2022-07-21",
      summary:
        "Working as a Product Specialist in Google YouTube Tv operations",
    },
  ],
  education: [
    {
      institution: "Bannari Amman Institute of Technology",
      department: "Automobile Engineering",
      studyType: "fulltime",
      "batch start year": 2018,
      "batch end year": 2022,
      gpa: 8.6,
    },
  ],
  skills: [
    {
      name: "c++,javascript",
      level: "beginer",
      project: ["Automotive Cruise Control System"],
    },
  ],
  languages: [
    {
      language: "Tamil,Enlish",
    },
  ],
  interests: [
    {
      name: "Music composing,Music Teaching",
    },
  ],
};
console.log(ownResume);
