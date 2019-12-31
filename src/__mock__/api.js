const listFilesResponse = [
  { name: 'folder1', type: 'folder' },
  { name: 'file1.jpg', type: 'file' },
  { name: 'stuff', type: 'folder' },
  {
    name: 'todos.md',
    type: 'file',
  },
];

async function listFiles(path) {
  return Promise.resolve(listFilesResponse);
}

module.exports = {
  listFiles,
  listFilesResponse,
};
