const customerDashboardResponse = {
  _id: '1234',
  name: 'Fitmind User',
  createdAt: new Date().toISOString().slice(0, 10),
  description:
    'II’m a versatile personal trainer, who has experience in Functional training, wieight training and yoga. I’ve been training people of all ages for over 12 years improving their overall quality of life.',
  email: 'user1@fitmind.io',
  interestedInExperiseAreas: ['PERSONAL_COACH', 'YOGA_COACH'],
  phone: '+44 20 7123 1234',
  pictureUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx76lQwzW2cAsjz5JqgVp_ReTpVji6G_pMO6crXSJn9NETq3F',
  upcomingBookings: [
    {
      _id: '100',
      client: 'Diego',
      time: '3:30 PM, 3 May',
      email: 'diego@gmail.com',
      listing: 'Yoga Trainer',
      price: '30 €',
    },
    {
      _id: '101',
      client: 'Mark',
      time: '5:30 PM, 3 May',
      email: 'mark@gmail.com',
      listing: 'Gym PT',
      price: '50 €',
    },
    {
      _id: '104',
      client: 'Ada',
      time: '8:30 AM, 4 May',
      email: 'ada@gmail.com',
      listing: 'HIIT Coach',
      price: '50 €',
    },
  ],
  pastBookings: [
    {
      _id: '130',
      client: 'Adam',
      time: '1:30 PM, 3 May',
      email: 'diego@gmail.com',
      listing: 'Yoga Trainer',
      price: '30 €',
    },
    {
      _id: '140',
      client: 'Smith',
      time: '2:30 PM, 3 May',
      email: 'mark@gmail.com',
      listing: 'Gym PT',
      price: '50 €',
    },
    {
      _id: '108',
      client: 'Ada',
      time: '4:30 AM, 4 May',
      email: 'ada@gmail.com',
      listing: 'HIIT Coach',
      price: '50 €',
    },
  ],
};

export default customerDashboardResponse;
