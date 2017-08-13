const mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'NIB'
  },
  {
    id: 3,
    name: 'Paranoid'
  },
  {
    id: 4,
    name: 'Some kind of Monster'
  },
  {
    id: 5,
    name: 'Master of Puppets'
  }
];

export function getTracks(){
  return function (dispatch) {
    setTimeout(() => {
      console.log('I got tracks');
      dispatch({
        type: 'FETCH_TRACKS_SUCCESS',
        payload: mockApiData
      });
    }, 2000);
  };
};
