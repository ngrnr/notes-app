const getInitialData = () => [
  {
    id: 1,
    title: '',
    body: 'Aplikasi ini merupakan aplikasi catatan pribadi. Anda bisa membuat catatan ringkas mengenai kegiatan pentingmu sehari-hari.',
    createdAt: '2022-06-25T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: 'Dicoding',
    body: 'Dicoding is developer end-to-end platform comprises of online learning program & platform (Dicoding Academy), offline networking and event (Dicoding Event), and product/solution creation (Dicoding Challenge). Dicoding connects technology companies to the right developers and vice versa to collaborate in creating global-scale products.',
    createdAt: '2022-06-25T04:28:17.312Z',
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { getInitialData, showFormattedDate };
