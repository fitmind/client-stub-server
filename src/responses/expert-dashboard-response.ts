const expertDashboardResponse = {
  upcomingBookings: [
    {
      _id: '100',
      client: 'Diego',
      time: '3:30 PM, 3 May',
      email: 'diego@gmail.com',
      listing: 'Yoga Trainer',
      price: '30 ',
    },
    {
      _id: '101',
      client: 'Mark',
      time: '5:30 PM, 3 May',
      email: 'mark@gmail.com',
      listing: 'Gym PT',
      price: '50 ',
    },
    {
      _id: '104',
      client: 'Ada',
      time: '8:30 AM, 4 May',
      email: 'ada@gmail.com',
      listing: 'HIIT Coach',
      price: '50 ',
    },
  ],
  pastBookings: [
    {
      _id: '130',
      client: 'Adam',
      time: '1:30 PM, 3 May',
      email: 'diego@gmail.com',
      listing: 'Yoga Trainer',
      price: '30 ',
    },
    {
      _id: '140',
      client: 'Smith',
      time: '2:30 PM, 3 May',
      email: 'mark@gmail.com',
      listing: 'Gym PT',
      price: '50 ',
    },
    {
      _id: '108',
      client: 'Ada',
      time: '4:30 AM, 4 May',
      email: 'ada@gmail.com',
      listing: 'HIIT Coach',
      price: '50 ',
    },
  ],
  liveListings: [
    {
      _id: '123132',
      name: 'Gym',
      listingPictureUrl: 'https://placeholder.com/',
      description: 'Blah BLah listing',
      price: '50 ',
      createdAt: '2019-08-28',
      createdByExpert: {
        _id: '123',
        firstName: 'Adam',
        lastName: 'Gil',
        pictureUrl: 'https://placeholder.com/',
        description: 'Tony Stark',
        createdAt: '2019-08-28',
        approvedStatus: 'APPROVED',
        email: 'tony@fitmind.io',
        expertise: ['PERSONAL_COACH'],
        weeklyAvailability: {
          monday: [{ id: '0:00', label: '12 am to 12:30 am' }],
          tuesday: [{ id: '0:30', label: '12:30 am to 1 am' }],
          wednessday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
          thursday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
          friday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
          saturday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
          sunday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
        },
        phone: '12312312',
      },
      expertiseArea: 'PERSONAL_COACH',
    },
    {
      _id: '1223132',
      name: 'Swim',
      listingPictureUrl: 'https://placeholder.com/',
      description: 'Blah BLah listing',
      price: '50 ',
      createdAt: '2019-08-28',
      createdByExpert: {
        _id: '1232',
        firstName: 'Scan',
        lastName: 'Asa',
        pictureUrl: 'https://placeholder.com/',
        description: 'Tony Stark',
        createdAt: '2019-08-28',
        approvedStatus: 'APPROVED',
        email: 'adam@fitmind.io',
        expertise: ['PERSONAL_COACH'],
        weeklyAvailability: {
          monday: ['0:00'],
          tuesday: ['0:00'],
          wednesday: ['0:00'],
          thursday: ['0:00'],
          friday: ['0:00'],
          saturday: ['0:00'],
          sunday: ['0:00'],
        },
        phone: '12312312',
      },
      expertiseArea: 'PERSONAL_COACH',
    },
  ],
};

export default expertDashboardResponse;
