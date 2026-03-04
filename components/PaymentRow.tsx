import Input from "@/components/Input";

type PaymentRowProps = {
  payment: {
    id: number;
    name: string;
    amount: number;
  };
  dispatch: React.Dispatch<any>;
};

export default function PaymentRow({
  payment,
  dispatch,
}: PaymentRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-4 border-b border-gray-200 pb-4">
      
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-600">
          {payment.name}
        </h3>
      </div>

      <div className="flex-1">
        <Input
          label="Amount"
          type="number"
          value={payment.amount}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PAYMENT",
              id: payment.id,
              value: Number(e.target.value),
            })
          }
        />
      </div>

    </div>
  );
}