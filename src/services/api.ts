import axios from 'axios';
import ApiInterface  from '../interfaces/apiInterface';


 class Api implements ApiInterface {

  async get <T>(url: string, id: number | string): Promise<T> {

    try {

      const response = await axios.get(`${url}${id}`);
      return response.data;

    } catch (error) {

      console.error('Erreur lors de la récupération des données, get ', error);
      throw error;
    }
  }

  async getAll <T> (url: string): Promise<T> {

    try {

      const response = await axios.get(url);
      return response.data;
    } catch (error) {

      console.error('Erreur lors de la récupération des données, getAll ', error);
      throw error;
    }
  }
}

export default Api;