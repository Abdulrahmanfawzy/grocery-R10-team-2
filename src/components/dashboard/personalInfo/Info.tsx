import { Plus } from 'lucide-react'
import Image from '../../../assets/img/user.jpg'

const Info = () => {
  return (
    <div className='p-8 max-w-3xl'>
      {/* title */}
      <h2 className='text-xl font-semibold text-gray-800'>Personal Information</h2>
    <p className='mt-1 text-gray-500'>Manage your personal details and preferences</p>
    {/* Profile Section */}
    <div className='mt-8 '>
      <h3 className='text-lg font-medium text-gray-800'>Profile Picture</h3>
      {/* Image */}
      <div className='flex items-center gap-6 mt-4'>
        <img src={Image} alt="Upload Image User" className='w-24 h-24 rounded-full object-cover'  />
        {/* Upload */}
        <div>
          <input type="file" className='hidden' id="upload" />
          <label htmlFor="upload" className='bg-primary flex items-center gap-1 px-6 py-2 text-white rounded-lg font-light'>
            <Plus size={18} /> Upload New Photo
          </label>
          <p className='text-sm text-gray-400 mt-4'>JPG, PNG or GIF. Max size 5MB</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Info