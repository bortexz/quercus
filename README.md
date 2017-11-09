## Querus
 Help is really needed to speed up the developement of

## Things to do
- [ ] Remove unused packages
- [ ] Upgrade all packages
- [ ] Reogranize scss using BEM
- [ ] Use fontello instead of font awesome
- [ ] More option to context menu ( properties, Open with)
- [ ] Editable url bar
- [ ] Status bar
- [ ] Displaying list of drives in right
- [ ] Unit testing needed
- [ ] Different views ( details view)
- [ ] Preview thumbnail in case of images and videos
- [ ] Basic shortcust like copy, paste etc..
- [ ] Full search in all drives
- [ ] Ability to connect to FTP
- [ ] Needs git page
- [ ] Configurable theme using external css file

Here is the Trello Board https://trello.com/b/ese7aQNR/quercus

![Main screen](image.PNG)


## Configuration
It allows to configure the sidebar with the file ~/.quercus/config.json

```json
{
    "Sidebar": {
        "Favorites": [
            {
                "name": "Home",
                "path": "/Users/alberto"
            },
            {
                "name": "Dropbox",
                "path": "/Users/alberto/Dropbox"
            },
            {
                "name": "Applications",
                "path": "/Applications/"
            },
            {
                "name": "Desktop",
                "path": "/Users/alberto/Desktop"
            },
            {
                "name": "Downloads",
                "path": "/Users/alberto/Downloads"
            }
        ],
        "Home": [
            {
                "name": "Documents",
                "path": "/Users/alberto/Documents"
            }, {
                "name": "Pictures",
                "path": "/Users/alberto/Pictures"
            }
        ],
        "Downloads": [
            {
                "name": "Series",
                "path": "/Users/alberto/Downloads/Series"
            }
        ]
    },
    "Startpath": "/Users/alberto"
}
```

## Run
To run it,

`yarn` or `npm install`

and then,

`npm run start` or `npm run start-watch` for livereloading.

## To Build

`npm run build`

## License

Copyright (c) 2016 Alberto Fernandez
