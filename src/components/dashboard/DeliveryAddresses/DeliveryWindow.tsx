type DeliveryWindowProps = {
  title: string
  time: string
  active?: boolean
}
const DeliveryWindow = ({ title, time, active }: DeliveryWindowProps) => {
  return (
     <div
      className={`border rounded-lg p-4 cursor-pointer
      ${active ? "border-blue-500 bg-blue-50" : ""}`}
    >

      <p className="font-medium">
        {title}
      </p>

      <span className="text-xs text-gray-500">
        {time}
      </span>

    </div>
  )
}

export default DeliveryWindow