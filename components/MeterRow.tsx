import Input from "@/components/Input";

type MeterRowProps = {
  meter: {
    id: number;
    name: string;
    total: number;
    spent: number;
  };
  dispatch: React.Dispatch<any>;
};

export default function MeterRow({ meter, dispatch }: MeterRowProps) {
  const left = meter.total - meter.spent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end border-b border-gray-200 pb-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{meter.name}</h3>
      </div>

      <Input
        label="Total"
        type="number"
        value={meter.total || ""}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_TOTAL",
            id: meter.id,
            value: Number(e.target.value),
          })
        }
      />

      <Input
        label="Spent"
        type="number"
        value={meter.spent.toPrecision(3) || ""}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_SPENT",
            id: meter.id,
            value: Number(e.target.value),
          })
        }
      />

      <div className="flex flex-col gap-2">
        <label className="block flex-1 min-w-0 truncate text-sm font-medium text-gray-700">
          Left
        </label>
        <div className="px-3 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium">
          {left.toPrecision(3)}
        </div>
      </div>
    </div>
  );
}
