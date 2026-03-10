import { MessageCircle, Phone, Mail } from "lucide-react"

const ContactSupport = () => {
  return (
    <div className="bg-primary rounded-xl p-6 grid md:grid-cols-3 gap-4">

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <MessageCircle className="text-primary mb-2" />
        <h4 className="font-medium">Live Chat</h4>
        <p className="text-sm text-gray-500">
          Chat with our support team
        </p>
        <span className="text-green-600 text-xs">
          Available now !
        </span>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <Phone className="text-primary mb-2" />
        <h4 className="font-medium">Call Us</h4>
        <p className="text-sm text-gray-500">
          02 2259 4837
        </p>
        <span className="text-xs text-gray-400">
          Mon-Sat 8AM-8PM
        </span>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <Mail className="text-primary mb-2" />
        <h4 className="font-medium">Email</h4>
        <p className="text-sm text-gray-500">
          help@groceryplus.com
        </p>
        <span className="text-xs text-gray-400">
          24-48 hour response
        </span>
      </div>

    </div>
  )
}

export default ContactSupport