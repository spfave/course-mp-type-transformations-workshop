import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// Approach 1
type ProgramModeEnumMap = typeof programModeEnumMap;
// type IndividualProgramMap = Omit<ProgramModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>;
// export type IndividualProgram = IndividualProgramMap[keyof IndividualProgramMap];

// Approach 2
// export type IndividualProgram = typeof programModeEnumMap['ONE_ON_ONE' | 'PLANNED_ONE_ON_ONE' | 'PLANNED_SELF_DIRECTED' | 'SELF_DIRECTED']

// Approach 3
export type IndividualProgram = typeof programModeEnumMap[Exclude<keyof ProgramModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>]


type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
