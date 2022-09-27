const make_album = (artist_name, album_title, track = null) => {
  if (!artist_name || !album_title) {
    return `Please provide artist name and album title`;
  }
  return {
    artist: artist_name,
    album: album_title,
    ...(track && { track }),
  };
};
const result1 = make_album('Atif', 'Something');
const result2 = make_album(null, 'Something else');
const result3 = make_album('Ali', 'Something else', 10);

console.log(result1);
console.log(result2);
console.log(result3);
