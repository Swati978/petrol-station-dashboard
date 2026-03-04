"use client";

import { useReducer, useMemo } from "react";
import Card from "@/components/Card";
import MeterRow from "@/components/MeterRow";
import PaymentRow from "@/components/PaymentRow";
import SummaryCard from "@/components/SummaryCard";

import { meterReducer, initialMeters } from "@/reducers/meterReducer";

import { paymentReducer, initialPayments } from "@/reducers/paymentReducer";

export default function Home() {
  const [meters, dispatch] = useReducer(meterReducer, initialMeters);

  const [payments, paymentDispatch] = useReducer(
    paymentReducer,
    initialPayments
  );

  const totalFuel = useMemo(
    () => meters.reduce((sum, m) => sum + m.total, 0),
    [meters]
  );

  const totalSpent = useMemo(
    () => meters.reduce((sum, m) => sum + m.spent, 0),
    [meters]
  );

  const totalLeft = totalFuel - totalSpent;

  const totalPayments = useMemo(
    () => payments.reduce((sum, p) => sum + p.amount, 0),
    [payments]
  );

  const grandTotal = totalSpent + totalPayments;

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Raikot Filling Station Readings
          </h1>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Meter Readings">
            <div className="flex flex-col gap-6">
              {meters.map((meter) => (
                <MeterRow key={meter.id} meter={meter} dispatch={dispatch} />
              ))}
            </div>
          </Card>
          <Card title="Additional Payments">
            <div className="flex flex-col gap-6">
              {payments.map((payment) => (
                <PaymentRow
                  key={payment.id}
                  payment={payment}
                  dispatch={paymentDispatch}
                />
              ))}
            </div>
          </Card>
          {/* Summary Section */}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <SummaryCard title="Total Fuel" value={totalFuel} />
          <SummaryCard title="Total Spent" value={totalSpent} />
          <SummaryCard title="Total Left" value={totalLeft} />
          <SummaryCard title="Total Payments" value={totalPayments} />
          <SummaryCard title="Grand Total" value={grandTotal} />
        </div>
      </section>
    </main>
  );
}
