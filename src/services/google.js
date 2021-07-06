import axios from 'axios';
import config from '../../env/default/app-config.json';

export const getSearchResults = async (searchParam, numberParam) => {
  const { timeout } = config.axios;
  const { baseUrl, basePath, searchKey, numberKey } = config.google;

  // Create GET url
  const getUrl = `${baseUrl}${basePath}`;

  // Prepare params
  const formattedSearchParam = searchParam.replace(' ', '+');
  const params = {};
  params[searchKey] = formattedSearchParam;
  params[numberKey] = numberParam;

  // Make axios call and catch any errors
  const response = await axios.get(getUrl, { params, timeout });
  return response;
};
