import { getSearchResults } from '../services/google';
import { getLinkList, findInList } from '../helpers';

export const getSeoResults = (req, res) => {
  const { num, q, url } = req.query;

  // Check that the params are provided and valid
  // Return 400 Bad Request if not
  num === null ||
    (isNaN(num) &&
      res.status(400).json({
        message: 'Missing or invalid query string "num"; required and must be a number',
      }));
  q === null ||
    (typeof q !== 'string' &&
      res.status(400).json({
        message: 'Missing or invalid query string "q"; required and must be a string',
      }));
  url === null ||
    (typeof url !== 'string' &&
      res.status(400).json({
        message: 'Missing or invalid query string "url"; required and must be a string',
      }));

  // Call Google service
  getSearchResults(q, num)
    .then(message => {
      console.log(message.data);
      const linkList = getLinkList(message.data);
      const urlOccurrences = findInList(linkList, url);
      res.status(200).json({ message: urlOccurrences });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'An error has occurred :(' });
    });
};
