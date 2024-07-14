
interface apiInterface {

    get<T>(id: number | string): Promise<T>;
    getAll<T>(url: string): Promise<T>;
}

export default apiInterface;
