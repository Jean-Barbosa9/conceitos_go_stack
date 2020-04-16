import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 18,
  },
  strong: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    marginVertical: 10,
  },
  primaryButton: {
    marginVertical: 10, 
    padding: 10,
    backgroundColor: '#7159c1',
  },
  secondaryButton: {
    marginVertical: 10, 
    padding: 10,
    backgroundColor: '#e02041',
  },
  lightText: {
    fontSize: 18,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  centerText: {
    textAlign: 'center',
  }
})

export default style;