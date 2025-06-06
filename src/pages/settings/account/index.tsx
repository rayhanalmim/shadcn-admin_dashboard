import { AccountForm } from './account-form'
import ContentSection from '../components/content-section'

export default function SettingsAccount() {
  return (
    <div className='mx-6 mt-4'>
      <ContentSection
      title='User Profile'
    >
      <AccountForm />
    </ContentSection>
    </div>
  )
}
