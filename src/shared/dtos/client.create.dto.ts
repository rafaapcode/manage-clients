export interface IHealthIssue {
  name: string;
  classification: number;
}

export class ClientCreateDto {
  id?: number;
  name: string;
  birthdate: string;
  sex: string;
  healthIssues: IHealthIssue[];
}
