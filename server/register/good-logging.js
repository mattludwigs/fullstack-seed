import good from 'good';
import goodConsole from 'good-console';

export default {
    register: good,
    options: {
      reporters: [
        { reporter: goodConsole, events: { log: '*', response: '*' }}
      ]
    }
  };