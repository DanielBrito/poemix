# Steps to add new publications

- Add image file to `src/assets/zines` or `src/assets/books`:
  - Dimensions (WxH): `339x480`
  - Format: `WEBP`
- Import thumb image into `src/data/Thumbs.js` and set the `altText`

- Add PDF file source URL from GoogleDrive into `src/data/FilesSource.js`

- Add route to `src/routes/Routes.js`

- Add publication info to `src/data/Books.js` or `src/data/Zines.js`:

´´´json
...
{
  name: 'New Publication',
  releasedAt: '05/02/2015',
  thumb: thumbs.NEW_PUBLICATION.image,
  path: `${prefix}${routes.NEW_PUBLICATION_PATH}`,
  altText: thumbs.NEW_PUBLICATION.altText,
},
...
´´´