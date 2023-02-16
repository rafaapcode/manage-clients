export abstract class Mapper<I, O> {
  abstract mapFromDatabase(param: I): O;
  abstract mapToUser(param: O): I;
}
