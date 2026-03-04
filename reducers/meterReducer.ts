import { Meter } from "@/types/meter";

export type MeterAction =
  | { type: "UPDATE_TOTAL"; id: number; value: number }
  | { type: "UPDATE_SPENT"; id: number; value: number };

export const initialMeters: Meter[] = [
  { id: 1, name: "Pump 1", total: 0, spent: 0 },
  { id: 2, name: "Pump 2", total: 0, spent: 0 },
  { id: 3, name: "Pump 3", total: 0, spent: 0 },
  { id: 4, name: "Pump 4", total: 0, spent: 0 },
  { id: 5, name: "Pump 5", total: 0, spent: 0 },
];

export function meterReducer(state: Meter[], action: MeterAction): Meter[] {
  switch (action.type) {
    case "UPDATE_TOTAL":
      return state.map((meter) =>
        meter.id === action.id ? { ...meter, total: action.value } : meter
      );

    case "UPDATE_SPENT":
      return state.map((meter) => {
        if (meter.id === action.id) {
          // If spent is greater than total, ignore update
          if (action.value > meter.total) {
            return meter;
          }

          return { ...meter, spent: action.value };
        }
        return meter;
      });

    default:
      return state;
  }
}
