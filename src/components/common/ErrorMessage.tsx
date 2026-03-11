type ErrorMessageProps = {
  message?: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md text-center">
        <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
        <p>{message || "Please try again later"}</p>
      </div>
    </div>
  )
}