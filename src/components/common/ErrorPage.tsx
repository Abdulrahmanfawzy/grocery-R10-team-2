import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; 
import { Home } from "lucide-react"; 

const ErrorPage = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4">


      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="text-2xl font-semibold text-slate-500 mt-2">
        Page Not Found
      </p>

      <Link to="/" className="mt-8">
        <Button
          variant="default"
          className=" gap-2 px-8 py-6 text-lg rounded-full transition-all shadow-lg cursor-pointer"
        >
          <Home size={20} />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
