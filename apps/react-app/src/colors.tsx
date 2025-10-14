import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Colors() {
  const colorVars = [
    // Brand colors
    '--lib-color-brand-primary', '--lib-color-brand-secondary', '--lib-color-brand-accent',
    // Neutral colors
    '--lib-color-neutral-0', '--lib-color-neutral-50', '--lib-color-neutral-100', '--lib-color-neutral-200',
    '--lib-color-neutral-300', '--lib-color-neutral-400', '--lib-color-neutral-500', '--lib-color-neutral-600',
    '--lib-color-neutral-700', '--lib-color-neutral-800', '--lib-color-neutral-900',
    // Text colors
    '--lib-color-text-base', '--lib-color-text-muted', '--lib-color-text-on-brand',
    // Background colors
    '--lib-color-bg-body', '--lib-color-bg-surface',
    // Border color
    '--lib-border-color',
    // Semantic colors
    '--lib-color-semantic-danger', '--lib-color-semantic-danger-hover',
    '--lib-color-semantic-success', '--lib-color-semantic-success-hover',
    '--lib-color-semantic-warning', '--lib-color-semantic-warning-hover',
    '--lib-color-semantic-info', '--lib-color-semantic-info-hover'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of colorVars) {
      resolved[v] = getComputedStyle(root).getPropertyValue(v).trim()
    }
    setTokenValues(resolved)
  }, [])

  const ColorExample = (props: { varName: string, name: string, description?: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div 
          style={{ 
            width: 'var(--lib-size-spacing-8)', 
            height: 'var(--lib-size-spacing-8)', 
            backgroundColor: `var(${props.varName})`,
            borderRadius: 'var(--lib-size-radius-sm)',
            border: 'var(--lib-border-width) solid var(--lib-color-neutral-200)'
          }}
        />
        <div>
          <div className="type-body">{props.name}</div>
          {props.description && <div className="type-detail">{props.description}</div>}
        </div>
      </div>
      <div className="type">
        <div>{props.varName.replace('--', '')} = {tokenValues[props.varName]}</div>
      </div>
    </div>
  )

  const ColorGroup = (props: { title: string, colors: Array<{ varName: string, name: string, description?: string }> }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
      <h2 className="type-h2">{props.title}</h2>
      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
        {props.colors.map((color, index) => (
          <ColorExample key={index} varName={color.varName} name={color.name} description={color.description} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>
      
      <div>
        <h1 className="type-h1">Colors</h1>
        <p className="type-body">Token-based color system with semantic naming</p>
      </div>

      <ColorGroup 
        title="Brand Colors"
        colors={[
          { varName: '--lib-color-brand-primary', name: 'Primary', description: 'Main brand color for buttons, links, and primary actions' },
          { varName: '--lib-color-brand-secondary', name: 'Secondary', description: 'Secondary brand color for supporting elements' },
          { varName: '--lib-color-brand-accent', name: 'Accent', description: 'Accent color for highlights and success states' }
        ]}
      />

      <ColorGroup 
        title="Neutral Colors"
        colors={[
          { varName: '--lib-color-neutral-0', name: 'White', description: 'Pure white background' },
          { varName: '--lib-color-neutral-50', name: 'Gray 50', description: 'Lightest gray for subtle backgrounds' },
          { varName: '--lib-color-neutral-100', name: 'Gray 100', description: 'Very light gray for containers' },
          { varName: '--lib-color-neutral-200', name: 'Gray 200', description: 'Light gray for borders and dividers' },
          { varName: '--lib-color-neutral-300', name: 'Gray 300', description: 'Medium light gray for disabled states' },
          { varName: '--lib-color-neutral-400', name: 'Gray 400', description: 'Medium gray for placeholder text' },
          { varName: '--lib-color-neutral-500', name: 'Gray 500', description: 'Medium gray for secondary text' },
          { varName: '--lib-color-neutral-600', name: 'Gray 600', description: 'Medium dark gray for muted text' },
          { varName: '--lib-color-neutral-700', name: 'Gray 700', description: 'Dark gray for headings' },
          { varName: '--lib-color-neutral-800', name: 'Gray 800', description: 'Very dark gray for emphasis' },
          { varName: '--lib-color-neutral-900', name: 'Gray 900', description: 'Darkest gray for primary text' }
        ]}
      />

      <ColorGroup 
        title="Text Colors"
        colors={[
          { varName: '--lib-color-text-base', name: 'Base Text', description: 'Primary text color for body content' },
          { varName: '--lib-color-text-muted', name: 'Muted Text', description: 'Secondary text color for less important content' },
          { varName: '--lib-color-text-on-brand', name: 'On Brand', description: 'Text color for use on brand colored backgrounds' }
        ]}
      />

      <ColorGroup 
        title="Background Colors"
        colors={[
          { varName: '--lib-color-bg-body', name: 'Body Background', description: 'Main background color for the page' },
          { varName: '--lib-color-bg-surface', name: 'Surface Background', description: 'Background color for cards and surfaces' }
        ]}
      />

      <ColorGroup 
        title="Border Colors"
        colors={[
          { varName: '--lib-border-color', name: 'Border', description: 'Default border color for elements' }
        ]}
      />

        <Navigation />
    </div>
  )
}
