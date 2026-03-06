import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Container from "@/components/common/Container"

const Profilelayout = () => {
  return (
    <div>
        <Container>
          <div className="flex gap-6 py-8">
            {/* Sidebar */}
            <div className="w-[260px]">
              <Sidebar />
            </div>
            {/* content */}
            <div className="flex-1">
                <Outlet />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Profilelayout