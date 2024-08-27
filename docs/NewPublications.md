# Steps to add new publications

- Add image file to `src/assets/zines` or `src/assets/books`:
  - Dimensions (WxH): `339x480`
  - Format: `WEBP`

- Import thumb image into `src/data/Thumbs.js` and set a descriptive `altText`

- Add PDF file source URL from GoogleDrive into `src/data/FilesSource.js`

- Add route to `src/routes/Routes.js`
  - Increment `NUMBER_OF_PUBLISHED_ZINES` for zines

- Add publication info to `src/data/Books.js` or `src/data/Zines.js`:

```js
...
{
  name: 'New Publication',
  releasedAt: 'DD/MM/YYYY',
  thumb: thumbs.NEW_PUBLICATION.image,
  path: `${prefix}${routes.NEW_PUBLICATION_PATH}`,
  altText: thumbs.NEW_PUBLICATION.altText,
}
```
