const getApiUrl = (path: string) => {
  if (path == "/entertainment/books")
    return "/api.php?amount=10&category=10&type=multiple&encode=url3986";
  if (path == "/entertainment/movies")
    return "/api.php?amount=10&category=11&type=multiple&encode=url3986";
  if (path == "/entertainment/music")
    return "/api.php?amount=10&category=12&type=multiple&encode=url3986";
  if (path == "/science/computers")
    return "/api.php?amount=10&category=18&type=multiple&encode=url3986";
  if (path == "/science/mathematics")
    return "/api.php?amount=10&category=19&type=multiple&encode=url3986";
  if (path == "/science/gadgets")
    return "/api.php?amount=10&category=30&type=multiple&encode=url3986";

  return "";
};

export { getApiUrl };
