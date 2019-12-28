const fs = window.require('fs-extra');

/**
 * List all files and folders in given path
 * @param path to list files and folders from
 * @returns Array<{name: string, type: "file" | "folder"}>
 */
export const listFiles = async (path: string) => {
  const children = await fs.readdir(path, { withFileTypes: true });

  return [
    ...children.map((child: { isFile: Function; name: string }) => {
      if (child.isFile()) {
        return { name: child.name, type: 'file' };
      }
      return { name: child.name, type: 'folder' };
    }),
  ];
};
