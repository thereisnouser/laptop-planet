import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";

export class ValidationException extends HttpException {

  constructor(responce: string[]) {
    super(responce, HttpStatus.BAD_REQUEST);
  }
}