
const NotificationSettings = () => {
  return (
    <div className="border  p-4 rounded-lg">
      <h3 className="font-semibold mb-4">
        Notification Preference
      </h3>
      <div className="rounded-lg bg-blue/5 divide-y px-2">

    {/* Order Updates */}
    <div className="flex items-center justify-between px-4 py-3">
      <span>Order Updates</span>

      <button
        
        className={`w-10 h-5 rounded-full cursor-pointer p-1 flex items-center transition bg-gray-200
          `}
      >
        <div className="bg-white w-4 h-4 rounded-full"></div>
      </button>
    </div>
      </div>
      </div>
  )
}

export default NotificationSettings