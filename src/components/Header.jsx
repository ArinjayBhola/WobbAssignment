import PropTypes from "prop-types";

const Header = ({ data }) => {
  return (
    <header className="bg-white shadow-md p-3 ml-4">
      <h1 className="text-xl font-bold text-gray-800">{data}</h1>
    </header>
  );
};

export default Header;

Header.propTypes = {
  data: PropTypes.string.isRequired,
};
