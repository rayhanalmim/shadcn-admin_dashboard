import ContentSection from '../components/content-section'
import { SystemSetting } from './systemSetting'

export default function SettingsSystemSetting() {
  return (
    <div className='mx-6 mt-4'>
      <ContentSection
        title='System Setting'
      >
        <SystemSetting />
      </ContentSection>
    </div>
  )
}
