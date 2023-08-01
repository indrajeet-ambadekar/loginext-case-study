let initialState = {
  users: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Arthur",
        last: "Jones"
      },
      location: {
        street: {
          number: 5593,
          name: "Stanley Way"
        },
        city: "Woodstock",
        state: "Prince Edward Island",
        country: "Canada",
        postcode: "O2W 3H1",
        coordinates: {
          latitude: "-69.8824",
          longitude: "-93.7133"
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul"
        }
      },
      email: "arthur.jones@example.com",
      login: {
        uuid: "27a8efc1-5993-41b2-8b03-03c7e38d526f",
        username: "angryelephant149",
        password: "popcorn",
        salt: "uJLohRks",
        md5: "4a565e19ea610d9ace4b4212f149382d",
        sha1: "5b9612dca5dade4c39ddfacc0fdbd548678e5e5d",
        sha256:
          "9f1d019573ef8f5aec581b07526f01981a195ce564e6263f1cd7f3360ecb3561"
      },
      dob: {
        date: "1957-12-08T06:29:36.898Z",
        age: 65
      },
      registered: {
        date: "2017-10-12T01:19:19.263Z",
        age: 5
      },
      phone: "X25 V31-4949",
      cell: "M20 C07-2854",
      id: {
        name: "SIN",
        value: "641056635"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      },
      nat: "CA"
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Kristiane",
        last: "Senf"
      },
      location: {
        street: {
          number: 5119,
          name: "Birkenstraße"
        },
        city: "Verden",
        state: "Nordrhein-Westfalen",
        country: "Germany",
        postcode: 19393,
        coordinates: {
          latitude: "-48.9156",
          longitude: "98.5066"
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      email: "kristiane.senf@example.com",
      login: {
        uuid: "9d4482e9-11c6-495b-86de-377fde190c9e",
        username: "tinyduck496",
        password: "streets",
        salt: "hUxLvRsy",
        md5: "4a202ac7f35aca8b02bb29bd5bbd3158",
        sha1: "a89460a316613359d49d904bfb0d1375c9f7ca7c",
        sha256:
          "c559bd62de466fdacf6c89e1d404893b678f5f4eb32d16c6128a1e105c3518cd"
      },
      dob: {
        date: "1969-08-24T06:42:53.271Z",
        age: 53
      },
      registered: {
        date: "2021-07-29T22:57:08.192Z",
        age: 2
      },
      phone: "0905-0768847",
      cell: "0175-4560249",
      id: {
        name: "SVNR",
        value: "47 240869 S 957"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/83.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/83.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/83.jpg"
      },
      nat: "DE"
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Samantha",
        last: "Wallace"
      },
      location: {
        street: {
          number: 580,
          name: "George Street"
        },
        city: "Gorey",
        state: "Waterford",
        country: "Ireland",
        postcode: 64566,
        coordinates: {
          latitude: "-3.7171",
          longitude: "78.1792"
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa"
        }
      },
      email: "samantha.wallace@example.com",
      login: {
        uuid: "de30036e-9eb8-4767-8abd-b3ef3baf9c76",
        username: "ticklishpanda288",
        password: "redbaron",
        salt: "4RFCzCHO",
        md5: "cf5a50835354f475ce29dfdca5938c88",
        sha1: "56e4b24df6e74e37874af4623b1cf1efd21ae849",
        sha256:
          "d05cd55b9972b2e87bab24a173af04d71778588b43865da924bc691fce9d2fb6"
      },
      dob: {
        date: "1996-01-06T18:26:42.182Z",
        age: 27
      },
      registered: {
        date: "2021-02-24T11:02:56.995Z",
        age: 2
      },
      phone: "051-696-7439",
      cell: "081-137-6553",
      id: {
        name: "PPS",
        value: "2771854T"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"
      },
      nat: "IE"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Pat",
        last: "Butler"
      },
      location: {
        street: {
          number: 8164,
          name: "Jones Road"
        },
        city: "Gorey",
        state: "Offaly",
        country: "Ireland",
        postcode: 31015,
        coordinates: {
          latitude: "1.6402",
          longitude: "-95.3277"
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      email: "pat.butler@example.com",
      login: {
        uuid: "c17d56b3-6a42-4aee-97f7-0702786932f4",
        username: "yellowladybug155",
        password: "interacial",
        salt: "zQsjP76L",
        md5: "c320de838ac5fbacf97538da537143e2",
        sha1: "414e5232929527c05b9477240a0badb5e0ab34a2",
        sha256:
          "e06233b8d29ddf50f08cd571ba111909bfed2d820520011a908272b36bfad780"
      },
      dob: {
        date: "1971-07-24T22:57:21.542Z",
        age: 52
      },
      registered: {
        date: "2002-04-05T21:25:44.314Z",
        age: 21
      },
      phone: "041-535-2192",
      cell: "081-962-6617",
      id: {
        name: "PPS",
        value: "3241571T"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg"
      },
      nat: "IE"
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Akhila",
        last: "Mugeraya"
      },
      location: {
        street: {
          number: 4198,
          name: "Tank Bund Rd"
        },
        city: "Bharatpur",
        state: "Dadra and Nagar Haveli",
        country: "India",
        postcode: 19647,
        coordinates: {
          latitude: "10.2263",
          longitude: "63.3078"
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      email: "akhila.mugeraya@example.com",
      login: {
        uuid: "08476f23-1bdb-48e4-a430-98750ffc93a2",
        username: "angrymeercat602",
        password: "chinook",
        salt: "RZUF4qNr",
        md5: "a4ca6d308d98e80042fdff7d2fe95e88",
        sha1: "e895bf41306d9a0ae55b0f378a6b6c8bb564baf4",
        sha256:
          "a19daa9f844cbd04a104a0a32b90fdac558cdc2c0dd41c18d715bf5abf961cb0"
      },
      dob: {
        date: "1971-08-31T14:00:28.141Z",
        age: 51
      },
      registered: {
        date: "2009-04-28T18:16:52.113Z",
        age: 14
      },
      phone: "9975261575",
      cell: "7771447053",
      id: {
        name: "UIDAI",
        value: "902096354054"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/4.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
      },
      nat: "IN"
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Nenad",
        last: "Barbier"
      },
      location: {
        street: {
          number: 1889,
          name: "Rue Abel-Hovelacque"
        },
        city: "Buchs (Sg)",
        state: "Basel-Stadt",
        country: "Switzerland",
        postcode: 8294,
        coordinates: {
          latitude: "-59.9901",
          longitude: "-57.2847"
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)"
        }
      },
      email: "nenad.barbier@example.com",
      login: {
        uuid: "b0235228-8fc3-4d1d-8ea8-0c68c616c425",
        username: "purpleleopard114",
        password: "toby",
        salt: "I9XpZh2I",
        md5: "c20163e04c30e4b3eded916f8575dfd8",
        sha1: "9cef8352b8f7368c48bc411167f3b613477a06f4",
        sha256:
          "b984191e72fea5058b9d3e61d1392315e19b5d914c5b6dd6754a76ea32c85e05"
      },
      dob: {
        date: "1988-04-26T23:59:33.057Z",
        age: 35
      },
      registered: {
        date: "2010-03-02T05:35:38.837Z",
        age: 13
      },
      phone: "077 048 31 36",
      cell: "079 491 24 86",
      id: {
        name: "AVS",
        value: "756.6569.8701.89"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/50.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
      },
      nat: "CH"
    },
    {
      gender: "female",
      name: {
        title: "Madame",
        first: "Josefine",
        last: "Vidal"
      },
      location: {
        street: {
          number: 7375,
          name: "Rue du Dauphiné"
        },
        city: "Hägglingen",
        state: "Ticino",
        country: "Switzerland",
        postcode: 2716,
        coordinates: {
          latitude: "-61.9118",
          longitude: "72.3955"
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City"
        }
      },
      email: "josefine.vidal@example.com",
      login: {
        uuid: "7f73bc5c-95a9-4396-bb6c-ffc748386a28",
        username: "silverwolf993",
        password: "highheel",
        salt: "tQKmKA7T",
        md5: "59a050f01b8d2c48c79a00387783a9b4",
        sha1: "50bcaf834cfc55438fe4944c786123eb51cb98c5",
        sha256:
          "6bedc6304274be699ed8964ae8400ae7efa43a51ef73de9bba0bc88923d119bb"
      },
      dob: {
        date: "1990-10-01T01:58:25.020Z",
        age: 32
      },
      registered: {
        date: "2011-05-02T07:57:01.514Z",
        age: 12
      },
      phone: "077 461 58 46",
      cell: "077 924 13 21",
      id: {
        name: "AVS",
        value: "756.8861.3488.82"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/30.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg"
      },
      nat: "CH"
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Kimberly",
        last: "Gregory"
      },
      location: {
        street: {
          number: 8836,
          name: "Bridge Road"
        },
        city: "City of London",
        state: "Derbyshire",
        country: "United Kingdom",
        postcode: "D8T 0WH",
        coordinates: {
          latitude: "-9.8854",
          longitude: "140.4266"
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo"
        }
      },
      email: "kimberly.gregory@example.com",
      login: {
        uuid: "95ace134-f240-4869-8703-d97e58551842",
        username: "bluesnake640",
        password: "161616",
        salt: "kqcGxLXB",
        md5: "4c079e89c576138284763ca381f54f6d",
        sha1: "a863d919a3977fb331c4f78fb7e7d40cdb8ae3a0",
        sha256:
          "82a7a9286c374f62a802d468a3a8f7873e54454aa693b0cd2f7d9787ac0f867a"
      },
      dob: {
        date: "1970-08-26T16:39:00.025Z",
        age: 52
      },
      registered: {
        date: "2020-08-04T06:44:18.348Z",
        age: 2
      },
      phone: "0141 275 9406",
      cell: "07793 227785",
      id: {
        name: "NINO",
        value: "XN 33 94 49 Z"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/30.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg"
      },
      nat: "GB"
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Lily",
        last: "Fontai"
      },
      location: {
        street: {
          number: 5223,
          name: "Avenue Tony-Garnier"
        },
        city: "Brest",
        state: "Eure-et-Loir",
        country: "France",
        postcode: 92066,
        coordinates: {
          latitude: "-18.8591",
          longitude: "55.1404"
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia"
        }
      },
      email: "lily.fontai@example.com",
      login: {
        uuid: "85bf8134-e83d-4639-a7ee-1606b6b838f0",
        username: "tinybutterfly445",
        password: "tinman",
        salt: "Fn1xmLME",
        md5: "de55d43626ec4fd0d5cea8911881bf9a",
        sha1: "72654009aa87930aaef7cb9189721236d7927c39",
        sha256:
          "5dcec4896954323afd6dc03a2a0dcf7f8b063a5eeaa5232e7094accdf2c4d0fd"
      },
      dob: {
        date: "1947-01-03T01:35:02.830Z",
        age: 76
      },
      registered: {
        date: "2010-07-21T11:53:48.770Z",
        age: 13
      },
      phone: "03-75-25-90-35",
      cell: "06-80-12-61-86",
      id: {
        name: "INSEE",
        value: "2470084793771 62"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg"
      },
      nat: "FR"
    },
    {
      gender: "female",
      name: {
        title: "Madame",
        first: "Jane",
        last: "David"
      },
      location: {
        street: {
          number: 7151,
          name: "Rue du Bon-Pasteur"
        },
        city: "Wangen bei Olten",
        state: "Appenzell Innerrhoden",
        country: "Switzerland",
        postcode: 6028,
        coordinates: {
          latitude: "-64.2513",
          longitude: "52.7641"
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      email: "jane.david@example.com",
      login: {
        uuid: "72d4bcf1-9cab-4e4b-948e-9e74fa8fe42a",
        username: "whitemeercat891",
        password: "light",
        salt: "YOS4tTKr",
        md5: "773741c750289fbc72df1c1420d46d03",
        sha1: "8bb072556f1fdc9b9eb743899bb445ca33b7b66e",
        sha256:
          "354be24ac52bf18462a337a38895363638d05d2816287e8116bec851d6f8aa8c"
      },
      dob: {
        date: "1972-08-19T18:46:01.851Z",
        age: 50
      },
      registered: {
        date: "2007-08-16T04:30:12.175Z",
        age: 15
      },
      phone: "079 821 65 69",
      cell: "075 830 11 29",
      id: {
        name: "AVS",
        value: "756.3643.7380.46"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg"
      },
      nat: "CH"
    }
  ],
  loading: false
};
export default function applicationReducer(state = initialState, action) {
  /*eslint no-redeclare: 0*/
  var { type, payload } = action;

  switch (type) {
    case "GET_USERS_BEGIN":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, users: payload };
    case "DELETE_USER":
      state.users.splice(payload, 1);
      return { ...state, loading: false };
    case "LIKE_USER":
      state.users = state.users.map((u, i) => {
        if (i === payload) {
          if (u.isLiked) {
            u.isLiked = false;
          } else {
            u.isLiked = true;
          }
        }
        return u;
      });
      return { ...state, loading: false };
    case "EDIT_USER":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
