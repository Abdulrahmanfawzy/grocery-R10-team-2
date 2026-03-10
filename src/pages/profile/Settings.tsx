import AppearanceSettings from '@/components/dashboard/Settings/AppearanceSettings'
import DataManagement from '@/components/dashboard/Settings/DataManagement'
import LanguageSettings from '@/components/dashboard/Settings/LanguageSettings'
import NotificationSettings from '@/components/dashboard/Settings/NotificationSettings'

const Settings = () => {
  return (
    <div className='p-6 space-y-8'>
      <div>
        <h2 className="text-2xl font-semibold">
          Settings
        </h2>

        <p className="text-sm text-gray-500">
          Manage app preferences and privacy settings
        </p>
      </div>
      {/* LanguageSettings */}
      <LanguageSettings />
      {/* AppearanceSettings */}
      <AppearanceSettings />
      {/* NotificationSettings */}
      <NotificationSettings />
      {/* DataManagement */}
      <DataManagement />
    </div>
  )
}

export default Settings