type SummaryCardProps = {
    title: string;
    value: number;
  };
  
  export default function SummaryCard({ title, value }: SummaryCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-2">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
    );
  }