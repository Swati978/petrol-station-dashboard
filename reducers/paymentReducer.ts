import { Payment } from "@/types/payment";

export type PaymentAction = {
  type: "UPDATE_PAYMENT";
  id: number;
  value: number;
};

export const initialPayments: Payment[] = [
  { id: 1, name: "Paytm", amount: 0 },
  { id: 2, name: "GPay", amount: 0 },
  { id: 3, name: "Advance Goldy", amount: 0 },
  { id: 4, name: "Advance M/S", amount: 0 },
];

export function paymentReducer(
  state: Payment[],
  action: PaymentAction
): Payment[] {
  switch (action.type) {
    case "UPDATE_PAYMENT":
      return state.map((payment) =>
        payment.id === action.id
          ? { ...payment, amount: action.value }
          : payment
      );

    default:
      return state;
  }
}