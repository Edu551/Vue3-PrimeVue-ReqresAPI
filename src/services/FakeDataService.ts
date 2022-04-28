import http from "./config";

class FakeDataService {
    getUsers(id: any): Promise<any> {
        return http.get(`/users?page=${id}`);
    }
    getUser(id: any): Promise<any> {
        return http.get(`/users/${id}`);
    }
    createUser(data: any): Promise<any> {
        return http.post(`/users`, data);
    }
    deleteUser(id: any): Promise<any> {
        return http.delete(`/users/${id}`);
    }
}

export default new FakeDataService();