export interface Child {
  name: string;
  type: 'file' | 'folder';
}

export type FolderContent = Array<Child>;

export interface App {
  currentPath: string;
  folderContent: FolderContent;
}
