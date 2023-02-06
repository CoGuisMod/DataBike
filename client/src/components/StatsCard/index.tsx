import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type statsCardType = {
  text: string;
  amount: number;
  percentage: number;
  icon: any;
  type: "positive" | "negative";
};

const StatsCard = ({ text, amount, percentage, icon, type }: statsCardType) => {
  return (
    <div className="flex justify-between items-center bg-slate-800 rounded-md w-full p-2">
      <div>
        <p className="text-sm text-slate-50/50">{text}</p>
        <p className="font-medium text-lg">
          $ {amount.toLocaleString("es-CO")}{" "}
          <span
            className={`text-sm ${
              percentage > 0 && type === "positive"
                ? "text-green-400"
                : percentage < 0 && type === "positive"
                ? "text-red-400"
                : percentage > 0 && type === "negative"
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {percentage > 0 ? "+" + percentage : percentage}
            &#37;
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center bg-slate-900 rounded-full w-10 h-10">
        <FontAwesomeIcon icon={icon} className="text-lg text-slate-50" />
      </div>
    </div>
  );
};

export default StatsCard;
