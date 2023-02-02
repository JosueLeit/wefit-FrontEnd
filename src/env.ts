export default {
  /**
   * URL base para consumo da API de produtos.
   */
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL as string,
  /**
   * Endereço (URL) para uma imagem quer será usada quando a imagem do produto não for encontrada
   * ou retornar algum tipo de erro.
   */
  NO_IMAGE_PLACEHOLDER: 'https://via.placeholder.com/300x445?text=No+Image',
  /**
   * Limite de items por página.
   */
  PAGINATION_LIMIT: 10,
};
