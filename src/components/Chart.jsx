import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h2>{title}</h2>
      <Bar
        data={data}
        options={options}
      />
    </>
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Chart;
