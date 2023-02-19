class Mark {
  private name: string;
  private mid: number;
  private final: number;
  private activities: number;
  private id: number;
  constructor(
    name: string,
    mid: number,
    final: number,
    activities: number,
    id: number
  ) {
    this.name = name;
    this.mid = mid;
    this.final = final;
    this.activities = activities;
    this.id = id;
  }

  public get _name(): string {
    return this.name;
  }
  public get _mid(): number {
    return this.mid;
  }
  public get _final(): number {
    return this.final;
  }
  public get _activities(): number {
    return this.activities;
  }
  public get _id(): number {
    return this.id;
  }
}
export default Mark;
