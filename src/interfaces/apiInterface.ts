
interface apiInterface {

    get<T>(url: string, id: number | string): Promise<T>;
    getAll<T>(url: string): Promise<T>;
}

export default apiInterface;
