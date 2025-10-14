import './base.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

export default function SamplePage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    language: 'en',
    theme: 'default',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'This is a sample bio generated entirely with AI to demonstrate the design system components.',
    privacy: 'public'
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      {/* AI Generated Description */}
      <div style={{ 
        background: 'var(--lib-color-bg-surface)', 
        padding: 'var(--lib-size-spacing-6)', 
        borderRadius: 'var(--lib-radius-card-default)',
        border: '1px solid var(--lib-color-neutral-200)',
        boxShadow: 'var(--lib-shadow-card-default)'
      }}>
        <h2 className="type-h2" style={{ marginTop: 0, color: 'var(--lib-color-brand-primary)' }}>
          🤖 AI-Generated Sample Page
        </h2>
        <p className="type-body">
          This entire settings page was generated entirely with AI to demonstrate the design system components in a real-world application. 
          All components use the same design tokens for consistent styling, spacing, and interactions.
        </p>
        <p className="type-detail">
          The page showcases form inputs, buttons, navigation, cards, and layout components working together to create a cohesive user interface.
        </p>
      </div>

      {/* Top Navigation Bar */}
      <nav style={{ 
        background: 'var(--lib-color-bg-surface)', 
        padding: 'var(--lib-size-spacing-4)', 
        borderRadius: 'var(--lib-radius-card-default)',
        border: '1px solid var(--lib-color-neutral-200)',
        boxShadow: 'var(--lib-shadow-card-default)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-4)' }}>
          <h1 className="type-h3" style={{ margin: 0, color: 'var(--lib-color-text-base)' }}>
            Settings
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-2)' }}>
          <button className="btn btn-sm btn-secondary">Export</button>
          <button className="btn btn-sm btn-primary">Save Changes</button>
        </div>
      </nav>

      {/* Settings Sections */}
      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        
        {/* Profile Section */}
        <div style={{ 
          background: 'var(--lib-color-bg-surface)', 
          padding: 'var(--lib-size-spacing-6)', 
          borderRadius: 'var(--lib-radius-card-default)',
          border: '1px solid var(--lib-color-neutral-200)',
          boxShadow: 'var(--lib-shadow-card-default)'
        }}>
          <h3 className="type-h3" style={{ marginTop: 0, marginBottom: 'var(--lib-size-spacing-4)' }}>
            Profile Information
          </h3>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--lib-size-spacing-6)' }}>
              <div className="input-group">
                <label className="input-label">First Name</label>
                <input 
                  className="input input-md" 
                  value={settings.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="input-label">Last Name</label>
                <input 
                  className="input input-md" 
                  value={settings.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input 
                className="input input-md" 
                type="email"
                value={settings.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Bio</label>
              <textarea 
                className="textarea" 
                value={settings.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div style={{ 
          background: 'var(--lib-color-bg-surface)', 
          padding: 'var(--lib-size-spacing-6)', 
          borderRadius: 'var(--lib-radius-card-default)',
          border: '1px solid var(--lib-color-neutral-200)',
          boxShadow: 'var(--lib-shadow-card-default)'
        }}>
          <h3 className="type-h3" style={{ marginTop: 0, marginBottom: 'var(--lib-size-spacing-4)' }}>
            Preferences
          </h3>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--lib-size-spacing-6)' }}>
              <div className="input-group">
                <label className="input-label">Language</label>
                <select 
                  className="select select-md" 
                  value={settings.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Theme</label>
                <select 
                  className="select select-md" 
                  value={settings.theme}
                  onChange={(e) => handleInputChange('theme', e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Privacy Level</label>
              <select 
                className="select select-md" 
                value={settings.privacy}
                onChange={(e) => handleInputChange('privacy', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div style={{ 
          background: 'var(--lib-color-bg-surface)', 
          padding: 'var(--lib-size-spacing-6)', 
          borderRadius: 'var(--lib-radius-card-default)',
          border: '1px solid var(--lib-color-neutral-200)',
          boxShadow: 'var(--lib-shadow-card-default)'
        }}>
          <h3 className="type-h3" style={{ marginTop: 0, marginBottom: 'var(--lib-size-spacing-4)' }}>
            Notifications & Features
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--lib-size-spacing-4)' }}>
            <label className="checkbox">
              <input 
                type="checkbox" 
                className="checkbox-input" 
                checked={settings.notifications}
                onChange={(e) => handleInputChange('notifications', e.target.checked)}
              />
              <span className="checkbox-label">Enable email notifications</span>
            </label>
            <label className="checkbox">
              <input 
                type="checkbox" 
                className="checkbox-input" 
                checked={settings.darkMode}
                onChange={(e) => handleInputChange('darkMode', e.target.checked)}
              />
              <span className="checkbox-label">Dark mode</span>
            </label>
            <label className="checkbox">
              <input 
                type="checkbox" 
                className="checkbox-input" 
                checked={settings.autoSave}
                onChange={(e) => handleInputChange('autoSave', e.target.checked)}
              />
              <span className="checkbox-label">Auto-save changes</span>
            </label>
          </div>
        </div>

        {/* File Upload Section */}
        <div style={{ 
          background: 'var(--lib-color-bg-surface)', 
          padding: 'var(--lib-size-spacing-6)', 
          borderRadius: 'var(--lib-radius-card-default)',
          border: '1px solid var(--lib-color-neutral-200)',
          boxShadow: 'var(--lib-shadow-card-default)'
        }}>
          <h3 className="type-h3" style={{ marginTop: 0, marginBottom: 'var(--lib-size-spacing-4)' }}>
            File Management
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--lib-size-spacing-4)' }}>
            <div className="input-group">
              <label className="input-label">Profile Picture</label>
              <input 
                type="file" 
                className="file-input file-input-md" 
                accept="image/*"
              />
              <div className="input-help">Upload a profile picture (JPG, PNG, or GIF)</div>
            </div>
            <div className="input-group">
              <label className="input-label">Document Upload</label>
              <input 
                type="file" 
                className="file-input file-input-md" 
                multiple
              />
              <div className="input-help">Upload multiple documents (PDF, DOC, DOCX)</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          background: 'var(--lib-color-bg-surface)', 
          padding: 'var(--lib-size-spacing-6)', 
          borderRadius: 'var(--lib-radius-card-default)',
          border: '1px solid var(--lib-color-neutral-200)',
          boxShadow: 'var(--lib-shadow-card-default)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-2)' }}>
            <button className="btn btn-md btn-secondary">Reset to Defaults</button>
            <button className="btn btn-md btn-ghost">Cancel</button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-2)' }}>
            <button className="btn btn-md btn-danger">Delete Account</button>
            <button className="btn btn-md btn-primary">Save Settings</button>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
