const DataManagement = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-4">
        Data Management
      </h3>

      <div className="bg-gray-100 rounded-lg p-4 mb-4">

        <p className="font-medium">
          Download Your Data
        </p>

        <span className="text-sm text-gray-500">
          Get a copy of your account information
        </span>

      </div>

      <div className="border border-red-200 bg-red-50 rounded-lg p-4">

        <p className="text-red-600 font-medium">
          Delete Account
        </p>

        <span className="text-sm text-red-500">
          Permanently delete your account and data
        </span>

      </div>

    </div>
  )
}

export default DataManagement