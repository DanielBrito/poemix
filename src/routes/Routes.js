const NUMBER_OF_PUBLISHED_ZINES = 37

const routes = {
  APP_BASE_URL: '/poemix',
  ZINES_PATH: '/zines',
  BOOKS_PATH: '/livros',
  PROTESTIZANDO_PATH: '/protestizando',
  A_LER_VAZIOS_PATH: '/a_ler_vazios'
};

for (let i = 1; i <= NUMBER_OF_PUBLISHED_ZINES; i++) {
  routes[`PROTESTIZANDO_${i}_PATH`] = `/protestizando_${i}`;
}

export const getRoutes = () => {
  return routes;
};
