import React from 'react';
import {connect} from 'react-redux';
import {getTracks} from './actions/tracks';
import Menu from './Menu';
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';

const App = ({tracks, onAddTrack, onFindTrack, onGetTracks }) => {
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
    onAddTrack(trackInput.value);
    trackInput.value = '';
  };

  const findTrack = () => {
    onFindTrack(searchInput.value);
  };

  return (
    <div className={css(styles.container)}>
      <Menu/>
      <div>
        <h3>Add track</h3>
        <input type="text" ref={(input) => {
          trackInput = input
        }}/>
        <button onClick={addTrack}>Add track</button>
        <div className={css(styles.square)}></div>
      </div>
      <div>
        <h3>Search tracks</h3>
        <input type="text" ref={ (input) => {
          searchInput = input
        } }/>
        <button onClick={findTrack}>Find track</button>
      </div>
      <div>
        <button onClick={onGetTracks}>Get tracks</button>
      </div>
      <ul>
        { tracks.map((track, index) => {
          return <li key={track.id}>{track.name}</li>
        }) }
      </ul>
    </div>
  );
};

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {

      const payload = {
        id: Date.now().toString(),
        name
      };

      dispatch({
        type: 'ADD_TRACK',
        payload
      })
    },
    onFindTrack: (name) => {
      dispatch({
        type: 'FIND_TRACK',
        payload: name
      });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);
