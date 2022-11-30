export class NotFoundError extends Error {
  constructor() {
    super("Could not retrieve entity information.");
  }
}
