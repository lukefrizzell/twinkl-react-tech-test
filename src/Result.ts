type SuccessResult<TData> = { outcome: "success"; data: TData };
type ErrorResult = { outcome: "error"; error: unknown };
export type Result<TData> = SuccessResult<TData> | ErrorResult;