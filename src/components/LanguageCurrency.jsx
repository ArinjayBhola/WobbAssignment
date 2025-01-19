const LanguageCurrency = () => {
  return (
    <div className="text-center flex justify-center items-center px-4">
      <div className="bg-white p-6 max-w-lg w-full">
        <h2 className="text-lg font-semibold text-gray-700">Regional Preferences</h2>
        <p className="text-sm text-gray-600 mt-1">Customize your experience based on your location.</p>
        <p className="text-xs text-red-500 mt-2">
          Please note: Changing your country will require you to configure the Wobb Wallet settings, including
          auto-debit, for the new region to ensure seamless campaign funding and transactions.
        </p>
        <div className="mt-6">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700">
            Choose Country
          </label>
          <select
            id="country"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
        <div className="mt-6">
          <label
            htmlFor="language"
            className="block text-sm font-medium text-gray-700">
            Language Settings
          </label>
          <select
            id="language"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>English-IN</option>
            <option>English-US</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageCurrency;
