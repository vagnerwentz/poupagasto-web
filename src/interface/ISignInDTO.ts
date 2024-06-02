export interface ISignInDTO {
    message: string,
    success: boolean,
    exception: string,
    statusCode: number,
    data: { token: string }
}