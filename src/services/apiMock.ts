

import axios from "axios";
import apiInterface from "../interfaces/apiInterface";


class ApiMock implements apiInterface {

   async  get<T>(url: string, id: number | string): Promise<T> {

        try {
            const response = await axios.get(`${url}${id}`)
            return response

        } catch (error) {
            console.error("erreur lors de la récupération des données ", error)
            throw error
        }
    }
        
   async  getAll(url: string): Promise<any> {

        try {
            const response = await axios.get(url)
            return response

        } catch (error) {
            console.error("erreur lors de la récupération des données ", error)
            throw error
        }
    }

    }

    export default ApiMock;


