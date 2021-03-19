export const getGifs = async (search) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&limit=10&api_key=xOnFUEAOmGpIf6k5uWjiFwXl2CP2rF5R`
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });
  return gifs;
}
