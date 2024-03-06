const file = {
    profile: {
      id: 1,
      name: "Ninja",
      picture: "https://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960633owjjy.png",
      status: "Available",
      friends: [  
        {
          id: 2,
          name: "Ram",
          picture: "https://i.ibb.co/HpB1d1P/dp.jpg",
          latest_timestamp: "10:00",
          lastChat: "Give me sometime",
        },
        {
          id: 3,
          name: "John",
          picture: "https://i.ibb.co/0C3Qtzm/bhuvnesh-kumar.jpg",
          latest_timestamp: "12:30",
          lastChat: "Alright",
        },
        {
          id: 4,
          name: "Luke",
          picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
          latest_timestamp: "4:12",
          lastChat: "I will look into it",
        },
        {
          id: 5,
          name: "Bane",
          picture: "https://i.ibb.co/6tmq1LT/Inderjeet.jpg",
          latest_timestamp: "7:53",
          lastChat: "Good morning",
        },
        {
          id: 6,
          name: "Zach",
          picture: "../",
          latest_timestamp: "1:09",
          lastChat: "Not quite the same.",
        },
      ],
    },
    friends: [
      {
        id: 2,
        name: "Gary",
        picture: "https://th.bing.com/th/id/R.0301819f445a8855c4a577a6763fb62d?rik=TT%2fgaYZuz1YEig&riu=http%3a%2f%2fanhede.se%2fwp-content%2fuploads%2f2014%2f01%2f130221-2528.jpg&ehk=LToqkipED3KxGj7CVuMoQrvi487RY2HN6IPZ59FCWNQ%3d&risl=&pid=ImgRaw&r=0",
        chatlog: [
          {
            text: "Did you recieve the package I sent you the other day?",
            timestamp: "10:00",
            side: "left",
            message_id: 1,
          },
          {
            text: "I believe they must have misplaced it elsewhere?!",
            timestamp: "10:02",
            side: "left",
            message_id: 2,
          },
          {
            text: "Or maybe not, let me check logistics and call you. Give me sometime",
            timestamp: "10:03",
            side: "left",
            message_id: 3,
          },
          {
            text: "All the Lorem Ipsum generators on the Internet.",
            timestamp: "10:03",
            side: "left",
            message_id: 4,
          },
          {
            text: " Hi Developer ",
            timestamp: "10:05",
            side: "left",
            message_id: 5,
          },
        ],
      },
      {
        id: 3,
        name: "Keshav",
        picture: "https://www.dapperconfidential.com/wp-content/uploads/2019/08/model-2911329_1920-e1564755590911.jpg",
        chatlog: [
          {
            text: "Hello, Everyone",
            timestamp: "06:55",
            side: "left",
            message_id: 1,
          },
          {
            text: "The standard chunk of Lorem Ipsum.",
            timestamp: "06:58",
            side: "left",
            message_id: 2,
          },
          {
            text: "The generated Lorem Ipsum is therefore always free from repetition.",
            timestamp: "07:00",
            side: "left",
            message_id: 3,
          },
          {
            text: "It uses a dictionary of over 200 Latin words",
            timestamp: "07:05",
            side: "left",
            message_id: 4,
          },
        ],
      },
      {
        id: 5,
        name: "Coding Ninjas",
        picture: "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain",
        chatlog: [
          {
            text: "Did You complete Full stack developer course",
            timestamp: "07:05",
          },
          {
            text: "yes",
            timestamp: "11:52",
          },
        ],
      },
      {
        id: 6,
        name: "Krishna",
        picture: "https://th.bing.com/th/id/OIP.umfOnnlU1WyPddLlAHAGnQHaLH?w=533&h=800&rs=1&pid=ImgDetMain",
        chatlog: [
          {
            text: "Hi, Arjun",
            timestamp: "04:25",
          },
          {
            text: "You have any issue regading your course?? If yes then pls feel free to reach out to me.",
            timestamp: "05:55",
          },
        ],
      },
      {
        id: 7,
        name: "Aleen",
        picture: "https://th.bing.com/th/id/OIP.3-uaRZTtERRV93HeAcpdRwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
        chatlog: [
          {
            text: "Hi",
            timestamp: "09:05",
          },
          {
            text: "Who are You ??",
            timestamp: "10:06",
          },
        ],
      },
      {
        id: 8,
        name: "Katie",
        picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
        chatlog: [],
      },
      {
        id: 9,
        name: "Chloe",
        picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        chatlog: [],
      },
      {
        id: 10,
        name: "Kennith",
        picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
        chatlog: [],
      },
      {
        id: 11,
        name: "Tara",
        picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
        chatlog: [],
      },
      {
        id: 12,
        name: "Gary",
        picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        chatlog: [],
      },
      {
        id: 13,
        name: "Zoey",
        picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        chatlog: [],
      },
      {
        id: 14,
        name: "Ash",
        picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
        chatlog: [],
      },
      {
        id: 15,
        name: "Zen",
        picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
        chatlog: [],
      },
    ],
    allFriends: [
      // {
      //   "id": 16,
      //   "name": "A'Koba",
      //   "picture": "",
      //   "status": "Available"
      // },
      {
        id: 15,
        name: "Zen",
        picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
        status: "Busy",
      },
      {
        id: 14,
        name: "Ash",
        picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
        status: "Busy",
      },
      {
        id: 13,
        name: "Zoey",
        picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        status: "Busy",
      },
      {
        id: 12,
        name: "Gary",
        picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        status: "Busy",
      },
      {
        id: 11,
        name: "Tara",
        picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
        status: "Busy",
      },
      {
        id: 10,
        name: "Kennith",
        picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
        status: "Busy",
      },
      {
        id: 9,
        name: "Chloe",
        picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        status: "Busy",
      },
      {
        id: 8,
        name: "Katie",
        picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
        status: "Busy",
      },
      {
        id: 7,
        name: "Zach",
        picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
        status: "Busy",
      },
      {
        id: 6,
        name: "Darth Vader",
        picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
        status: "Busy",
      },
      {
        id: 5,
        name: "Bane",
        picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
        status: "Busy",
      },
      {
        id: 4,
        name: "Luke",
        picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
        status: "Busy",
      },
      {
        id: 3,
        name: "Bob",
        picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
        status: "Busy",
      },
      {
        id: 2,
        name: "Alex",
        picture: "https://i.ibb.co/HpB1d1P/dp.jpg",
        status: "Busy",
      },
    ],
  };
  
  export default file;
  