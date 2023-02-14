export interface IUseCase<TModel> {
  execute(...args: any[]): Promise<TModel>;
}
