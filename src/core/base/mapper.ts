export abstract class Mapper<I, O> {
  static abstract mapFromDatabase(param: I): O;
  static abstract mapToUser(param: O): I;
}
