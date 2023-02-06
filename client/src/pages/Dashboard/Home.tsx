/* Charts imports */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

/* Line chart config */

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip
);

export const lineChartOptions = {
  responsive: true,
  SVGPreserveAspectRatio: false,
  plugins: {},
};

export const doughnutChartOptions = {
  responsive: true,
  SVGPreserveAspectRatio: false,
  plugins: {},
};

export const barChartOptions = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Stock",
    },
  },
};

/* Icons import */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faDollarSign,
  faMoneyBillTrendUp,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../../components/StatsCard";

const todaysReport = {
  sales: 480000,
  salesPercentage: 13,
  earning: 230000,
  earningPercentage: 25,
  costumers: 16,
  costumersPercentage: 48,
  totalProducts: 650,
  totalProductsPercentage: -25,
};

export const lineChartData = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Ventas",
      data: [
        222222, 234567, 222222, 234567, 222222, 234567, 222222, 234567, 222222,
        234567, 222222, 234567,
      ],
      borderColor: "#3b82f6",
      backgroundColor: "#60a5fa",
    },
    {
      label: "Ganancias",
      data: [
        222222, 234567, 222222, 234567, 222222, 234567, 222222, 234567, 222222,
        234567, 222222, 234567,
      ],
      borderColor: "#22c55e",
      backgroundColor: "#4ade80",
    },
  ],
};

export const doughnutData = {
  labels: ["Bicicletas", "Cascos", "Guantes"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#60a5fa", "#f87171", "#facc15"],
      borderColor: ["#60a5fa", "#f87171", "#facc15"],
      borderWidth: 1,
    },
  ],
};

export const barChartData = {
  labels: ["B. Urbana", "B. Montaña", "Cascos", "Guantes"],
  datasets: [
    {
      label: "Bodega",
      data: [23, 12, 8, 4],
      borderColor: "#60a5fa",
      backgroundColor: "#60a5fa",
    },
    {
      label: "Almacen",
      data: [12, 4, 4, 2],
      borderColor: "#f87171",
      backgroundColor: "#f87171",
    },
  ],
};

const Home = () => {
  return (
    <section className="w-full h-full pl-24 md:pl-8 pr-4 py-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        {/* Title */}
        <div>
          <h1 className="font-bold text-xl">Bienvenid&#64; {"Camilo"}.</h1>
        </div>
      </div>

      <div className="py-2" />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
        {/* Today's sales */}
        <StatsCard
          text="Ventas de hoy"
          amount={todaysReport.sales}
          percentage={todaysReport.salesPercentage}
          icon={faDollarSign}
          type="positive"
        />

        {/* Today's earning */}
        <StatsCard
          text="Ganancias de hoy"
          amount={todaysReport.earning}
          percentage={todaysReport.earningPercentage}
          icon={faMoneyBillTrendUp}
          type="positive"
        />

        {/* Today's costumers */}
        <StatsCard
          text="Clientes de hoy"
          amount={todaysReport.costumers}
          percentage={todaysReport.costumersPercentage}
          icon={faUserAlt}
          type="positive"
        />

        {/* Total products */}
        <StatsCard
          text="Stock total"
          amount={todaysReport.totalProducts}
          percentage={todaysReport.totalProductsPercentage}
          icon={faBoxesStacked}
          type="positive"
        />
      </div>

      <div className="py-2" />

      {/* Charts */}
      <div className="grid md:grid-cols-12 gap-4 w-full">
        <div className="md:col-span-5 flex justify-center items-center bg-slate-800 rounded-md w-full h-full p-2 overflow-hidden">
          <Line options={lineChartOptions} data={lineChartData} />
        </div>

        <div className="md:col-span-3 flex justify-center items-center bg-slate-800 rounded-md w-full h-full p-2 overflow-hidden">
          <Doughnut options={doughnutChartOptions} data={doughnutData} />
        </div>

        <div className="md:col-span-4 flex justify-center items-center bg-slate-800 rounded-md w-full h-full p-2 overflow-hidden">
          <Bar options={barChartOptions} data={barChartData} />
        </div>
      </div>
    </section>
  );
};

export default Home;
