import Info from "@/components/dashboard/personalInfo/Info"
import NotificationSettings from "@/components/dashboard/personalInfo/NotificationSettings"
import ProfileSettings from "@/components/dashboard/personalInfo/ProfileSettings"

const PersonalInfo = () => {
  return (
    <div>
      <Info />
      <ProfileSettings />
      <NotificationSettings />
    </div>
  )
}

export default PersonalInfo