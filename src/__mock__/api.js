const listFilesResponse = [
  { name: 'folder1', type: 'folder' },
  { name: 'file1', type: 'file' },
];

async function listFiles(path: string) {
  return Promise.resolve(listFilesResponse);
}

module.exports = {
  listFiles,
  listFilesResponse,
};
