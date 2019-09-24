const getExpertMeResponse = {
  _id: '1234',
  firstName: 'Fitmind',
  lastName: 'User',
  createdAt: new Date().toISOString().slice(0, 10),
  approvedStatus: 'APPROVED',
  description:
    'II’m a versatile personal trainer, who has experience in Functional training, wieight training and yoga. I’ve been training people of all ages for over 12 years improving their overall quality of life.',
  email: 'expert1@fitmind.io',
  isAnExpertIn: ['PERSONAL_COACH', 'YOGA_COACH'],
  phone: '123123132',
  weeklyAvailability: {
    monday: ['08:00', '09:00', '10:00'],
    tuesday: ['07:00', '08:00', '09:00'],
    wednesday: ['06:00', '07:00', '08:00', '09:00'],
    thursday: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    friday: ['20:00', '21:00', '22:00', '23:00'],
    saturday: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'],
    sunday: ['00:00'],
  },
  profilePictureUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx76lQwzW2cAsjz5JqgVp_ReTpVji6G_pMO6crXSJn9NETq3F',
  upcomingBookings: [
    {
      _id: '5d6fa8d2f491b80938fb351d',
      time: '2019-09-10T08:00:00.000Z',
      customer: '5d6a50432760900718f9e024',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
    {
      _id: '5d6fa930082a80094132a662',
      time: '2019-09-10T09:00:00.000Z',
      customer: '5d6fa91a082a80094132a661',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
    {
      _id: '5d6fa974082a80094132a663',
      time: '2019-09-10T10:00:00.000Z',
      customer: '5d6fa91a082a80094132a661',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
  ],
  pastBookings: [
    {
      _id: '5d6fa8d2f491b80938fb351d',
      time: '2019-09-10T08:00:00.000Z',
      customer: '5d6a50432760900718f9e024',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
    {
      _id: '5d6fa930082a80094132a662',
      time: '2019-09-10T09:00:00.000Z',
      customer: '5d6fa91a082a80094132a661',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
    {
      _id: '5d6fa974082a80094132a663',
      time: '2019-09-10T10:00:00.000Z',
      customer: '5d6fa91a082a80094132a661',
      listing: '5d6fa64479bbb0088ab1e98d',
      expert: '5d6f9e05448e9506db043104',
      __v: 0,
    },
  ],
};

export default getExpertMeResponse;
