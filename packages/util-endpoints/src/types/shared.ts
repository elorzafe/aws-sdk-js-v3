import { Logger } from "@aws-sdk/types";

export type ReferenceObject = { ref: string };

export type FunctionObject = { fn: string; argv: FunctionArgv };
export type FunctionArgv = Array<string | boolean | ReferenceObject | FunctionObject>;
export type FunctionReturn = string | boolean | number | { [key: string]: FunctionReturn };

export type ConditionObject = FunctionObject & { assign?: string };

export type Expression = string | ReferenceObject | FunctionObject;

export type EndpointParams = Record<string, string | boolean>;
export type EndpointResolverOptions = {
  endpointParams: EndpointParams;
  logger?: Logger;
};

export type ReferenceRecord = Record<string, FunctionReturn>;
export type EvaluateOptions = EndpointResolverOptions & {
  referenceRecord: ReferenceRecord;
};
