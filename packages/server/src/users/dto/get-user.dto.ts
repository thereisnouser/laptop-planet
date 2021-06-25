import { IsInt, IsString } from 'class-validator';

export class GetUserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
