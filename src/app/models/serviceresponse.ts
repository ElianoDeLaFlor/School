export class Serviceresponse<T> {
    public data?: T;
    public success: boolean = false;
    public message: string = "";
}
