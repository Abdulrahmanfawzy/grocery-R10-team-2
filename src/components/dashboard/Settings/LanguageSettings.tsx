const LanguageSettings = () => {
  return (
    <div className="border rounded-xl p-6 bg-white">

      <h3 className="font-semibold mb-3">
        Language
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        Preferred Language
      </p>

      <select className="border rounded-lg px-3 py-2">
        <option>English (US)</option>
        <option>Arabic</option>
        <option>French</option>
      </select>

    </div>
  )
}

export default LanguageSettings