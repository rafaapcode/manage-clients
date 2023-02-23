import { IsOptional, Length, IsString, IsArray } from 'class-validator';
import { IHealthIssue } from 'src/shared/dtos/client.create.dto';

export class ClientRequest {
  @IsOptional()
  id?: number;

  @IsString({ message: 'The name must be a string' })
  @Length(4, 100, { message: 'The name must be between 4 and 100 characters.' })
  name: string;

  @IsString({ message: 'The birthdate must be a string' })
  @Length(10, 10, { message: 'The birthdate must be 10 characters' })
  birthdate: string;

  @IsString({ message: 'The sex field must be a string' })
  @Length(4, 6, { message: 'The field must be at between 4 and 6 characters' })
  sex: string;

  @IsArray({ message: 'The Health Issues must be an array' })
  healthIssues: IHealthIssue[];
}

export class ClientPatchRequest {
  @IsOptional()
  id?: number;

  @IsString({ message: 'The name must be a string' })
  @Length(4, 100, { message: 'The name must be between 4 and 100 characters.' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'The birthdate must be a string' })
  @Length(10, 10, { message: 'The birthdate must be 10 characters' })
  @IsOptional()
  birthdate?: string;

  @IsString({ message: 'The sex field must be a string' })
  @Length(4, 6, { message: 'The field must be at between 4 and 6 characters' })
  @IsOptional()
  sex?: string;

  @IsArray({ message: 'The Health Issues must be an array' })
  @IsOptional()
  healthIssues?: IHealthIssue[];
}
