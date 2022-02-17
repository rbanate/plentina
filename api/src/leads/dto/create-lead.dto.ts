import { IsEmail, IsString, IsMobilePhone, IsOptional } from 'class-validator';
export class CreateLeadDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsMobilePhone()
  mobileNumber: string;

  @IsOptional()
  officeNumber: string;
}
