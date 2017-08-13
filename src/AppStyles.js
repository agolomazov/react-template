import { StyleSheet } from 'aphrodite/no-important';
import { blackSquare } from './squareStyles';

export default StyleSheet.create({
  container: {
    background: '#bfbea7',
    display: 'block',
    padding: '10px'
  },
  square: {
    ...blackSquare,
    width: '50px',
    height: '50px'
  }
});
