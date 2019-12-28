const os = require('os');
const path = require('path');

export const getPath = name => {
  switch (name) {
    case 'home':
      return os.homedir();
    case 'trash':
      return 'trash:///';
    case 'recent':
      return 'recent:///';
    case 'desktop':
      return path.join(os.homedir(), 'Desktop');
    case 'download':
      return path.join(os.homedir(), 'Downloads');
    case 'image':
      return path.join(os.homedir(), 'Pictures');
    default:
      return '';
  }
};
