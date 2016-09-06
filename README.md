## Under development
This project is still under heavy development, so expect some bugs and features not working!

# Quercus file manager
Quercus is a file manager built completely in modern Web technologies. With the goal of being customizable and extensible.

![Main screen](https://i.gyazo.com/ba69fc4538552abec9236531957d42da.png)

## Navigation breadcrumb
To come back to any level of the tree structure!

![Breadcrumb](https://i.gyazo.com/ba64ef432ac452bd336d7cfdb1ae4426.gif)

## Filtering results
Go quickly to what you are looking for.

![Filter](https://i.gyazo.com/51859a5852367da33ef8c26162f69cbd.gif)

## Quickly see hidden files
Incredibly, this option is super difficult in default file managers

![Hidden files](https://i.gyazo.com/13b861608a10da27033d9dc2cfd67bf2.gif)

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

`npm install`

and then,

`npm run start` or `npm run start-watch` for livereloading.

## License

Copyright (c) 2016 Alberto Fernandez
