// récupère l'id et le stocke dans le localStorage pour simuler une authentification

class Auth {
    private static userId: string | null;

    static setUserId() {
        this.userId = '18';
        return window.localStorage.setItem("id", this.userId);
    }

    static getUserId(): string | null {
        this.setUserId();
        this.userId = window.localStorage.getItem("id");
        return this.userId;
    }

}

export default Auth;


