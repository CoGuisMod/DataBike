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
        <div className="flex justify-between items-center bg-slate-800 rounded-md w-full p-2">
          <div>
            <p className="text-sm text-slate-50/50">Ventas de hoy</p>
            <p className="font-medium text-lg">
              $ {todaysReport.sales.toLocaleString("es-CO")}{" "}
              <span
                className={`text-sm ${
                  todaysReport.salesPercentage > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {todaysReport.salesPercentage > 0
                  ? "+" + todaysReport.salesPercentage
                  : todaysReport.salesPercentage}
                &#37;
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center bg-slate-900 rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-lg text-slate-50"
            />
          </div>
        </div>

        {/* Today's earning */}
        <div className="flex justify-between items-center bg-slate-800 rounded-md w-full p-2">
          <div>
            <p className="text-sm text-slate-50/50">Ganancias de hoy</p>
            <p className="font-medium text-lg">
              $ {todaysReport.earning.toLocaleString("es-CO")}{" "}
              <span
                className={`text-sm ${
                  todaysReport.earningPercentage > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {todaysReport.earningPercentage > 0
                  ? "+" + todaysReport.earningPercentage
                  : todaysReport.earningPercentage}
                &#37;
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center bg-slate-900 rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faMoneyBillTrendUp}
              className="text-lg text-slate-50"
            />
          </div>
        </div>

        {/* Today's costumers */}
        <div className="flex justify-between items-center bg-slate-800 rounded-md w-full p-2">
          <div>
            <p className="text-sm text-slate-50/50">Clientes de hoy</p>
            <p className="font-medium text-lg">
              {todaysReport.costumers.toLocaleString("es-CO")}{" "}
              <span
                className={`text-sm ${
                  todaysReport.costumersPercentage > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {todaysReport.costumersPercentage > 0
                  ? "+" + todaysReport.costumersPercentage
                  : todaysReport.costumersPercentage}
                &#37;
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center bg-slate-900 rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faUserAlt}
              className="text-lg text-slate-50"
            />
          </div>
        </div>

        {/* Total products */}
        <div className="flex justify-between items-center bg-slate-800 rounded-md w-full p-2">
          <div>
            <p className="text-sm text-slate-50/50">Stock total</p>
            <p className="font-medium text-lg">
              {todaysReport.totalProducts.toLocaleString("es-CO")}{" "}
              <span
                className={`text-sm ${
                  todaysReport.totalProductsPercentage > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {todaysReport.totalProductsPercentage > 0
                  ? "&#43;" + todaysReport.totalProductsPercentage
                  : todaysReport.totalProductsPercentage}
                &#37;
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center bg-slate-900 rounded-full w-10 h-10">
            <FontAwesomeIcon
              icon={faBoxesStacked}
              className="text-lg text-slate-50"
            />
          </div>
        </div>
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
