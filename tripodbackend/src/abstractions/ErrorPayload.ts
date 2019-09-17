
interface IErrorPayload extends Error {
  message: string;
  errorCode: number;
}

export abstract class ErrorPayload implements IErrorPayload {
  message: string;  errorCode: number;
  name: string;
  stack?: string;
}