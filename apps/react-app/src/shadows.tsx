import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Shadows() {
  const shadowVars = [
    '--lib-shadow-none', '--lib-shadow-xs', '--lib-shadow-sm', '--lib-shadow-md',
    '--lib-shadow-lg', '--lib-shadow-xl', '--lib-shadow-2xl', '--lib-shadow-inner',
    '--lib-shadow-button-default', '--lib-shadow-button-hover', '--lib-shadow-button-active', '--lib-shadow-button-disabled',
    '--lib-shadow-card-default', '--lib-shadow-card-elevated', '--lib-shadow-card-floating',
    '--lib-shadow-modal-backdrop', '--lib-shadow-modal-content',
    '--lib-shadow-input-default', '--lib-shadow-input-focus', '--lib-shadow-input-error',
    '--lib-shadow-elevation-0', '--lib-shadow-elevation-1', '--lib-shadow-elevation-2', 
    '--lib-shadow-elevation-3', '--lib-shadow-elevation-4', '--lib-shadow-elevation-5', '--lib-shadow-elevation-6',
    '--lib-color-bg-surface', '--lib-color-neutral-200', '--lib-color-brand-primary',
    '--lib-size-spacing-8', '--lib-size-spacing-6', '--lib-size-spacing-4', '--lib-size-spacing-3', '--lib-size-spacing-2',
    '--lib-border-width', '--lib-size-radius-sm'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of shadowVars) {
      const value = getComputedStyle(root).getPropertyValue(v).trim()
      resolved[v] = value
    }
    setTokenValues(resolved)
  }, [])

  const ShadowExample = (props: { size: string, varName: string, className: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div
          style={{
            width: 'var(--lib-size-spacing-8)',
            height: 'var(--lib-size-spacing-8)',
            backgroundColor: 'var(--lib-color-bg-surface)',
            boxShadow: `var(${props.varName})`,
            borderRadius: 'var(--lib-size-radius-sm)',
            border: 'var(--lib-border-width) solid var(--lib-color-neutral-200)'
          }}
        />
        <span className="type-body">{props.size}</span>
      </div>
      <div className="type">
        <div>{props.varName.replace('--', '')} = {tokenValues[props.varName]}</div>
        <div>.{props.className}</div>
      </div>
    </div>
  )

  const SemanticExample = (props: { title: string, description: string, examples: { varName: string, className: string, label: string }[] }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
      <h2 className="type-h2">{props.title}</h2>
      <p className="type-body">{props.description}</p>
      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-3)' }}>
        {props.examples.map(example => (
          <div key={example.varName} style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
              <div
                style={{
                  width: 'var(--lib-size-spacing-8)',
                  height: 'var(--lib-size-spacing-8)',
                  backgroundColor: 'var(--lib-color-bg-surface)',
                  boxShadow: `var(${example.varName})`,
                  borderRadius: 'var(--lib-size-radius-sm)',
                  border: 'var(--lib-border-width) solid var(--lib-color-neutral-200)'
                }}
              />
              <span className="type-body">{example.label}</span>
            </div>
            <div className="type">
              <div>{example.varName.replace('--', '')} = {tokenValues[example.varName]}</div>
              <div>.{example.className}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      <h1 className="type-h1">Shadow System</h1>
      <p className="type-body">Token-based shadow system with elevation levels and semantic naming</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Shadow Scale</h2>
        <p className="type-detail">Raw shadow values for precise control</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <ShadowExample size="none" varName="--lib-shadow-none" className="shadow-none" />
          <ShadowExample size="xs" varName="--lib-shadow-xs" className="shadow-xs" />
          <ShadowExample size="sm" varName="--lib-shadow-sm" className="shadow-sm" />
          <ShadowExample size="md" varName="--lib-shadow-md" className="shadow-md" />
          <ShadowExample size="lg" varName="--lib-shadow-lg" className="shadow-lg" />
          <ShadowExample size="xl" varName="--lib-shadow-xl" className="shadow-xl" />
          <ShadowExample size="2xl" varName="--lib-shadow-2xl" className="shadow-2xl" />
          <ShadowExample size="inner" varName="--lib-shadow-inner" className="shadow-inner" />
        </div>
      </div>

      <SemanticExample
        title="Button Shadows"
        description="Shadows for interactive elements in different states"
        examples={[
          { varName: '--lib-shadow-button-default', className: 'shadow-button', label: 'Default' },
          { varName: '--lib-shadow-button-hover', className: 'shadow-button-hover', label: 'Hover' },
          { varName: '--lib-shadow-button-active', className: 'shadow-button-active', label: 'Active' },
          { varName: '--lib-shadow-button-disabled', className: 'shadow-button-disabled', label: 'Disabled' }
        ]}
      />

      <SemanticExample
        title="Card Shadows"
        description="Shadows for content containers with varying emphasis"
        examples={[
          { varName: '--lib-shadow-card-default', className: 'shadow-card', label: 'Default' },
          { varName: '--lib-shadow-card-elevated', className: 'shadow-card-elevated', label: 'Elevated' },
          { varName: '--lib-shadow-card-floating', className: 'shadow-card-floating', label: 'Floating' }
        ]}
      />

      <SemanticExample
        title="Modal Shadows"
        description="Shadows for overlays and modal dialogs"
        examples={[
          { varName: '--lib-shadow-modal-backdrop', className: 'shadow-modal-backdrop', label: 'Backdrop' },
          { varName: '--lib-shadow-modal-content', className: 'shadow-modal-content', label: 'Content' }
        ]}
      />

      <SemanticExample
        title="Input Shadows"
        description="Shadows for form inputs in different states"
        examples={[
          { varName: '--lib-shadow-input-default', className: 'shadow-input', label: 'Default' },
          { varName: '--lib-shadow-input-focus', className: 'shadow-input-focus', label: 'Focus' },
          { varName: '--lib-shadow-input-error', className: 'shadow-input-error', label: 'Error' }
        ]}
      />

      <SemanticExample
        title="Elevation Levels"
        description="Systematic elevation hierarchy from 0 to 6"
        examples={[
          { varName: '--lib-shadow-elevation-0', className: 'shadow-elevation-0', label: 'Level 0' },
          { varName: '--lib-shadow-elevation-1', className: 'shadow-elevation-1', label: 'Level 1' },
          { varName: '--lib-shadow-elevation-2', className: 'shadow-elevation-2', label: 'Level 2' },
          { varName: '--lib-shadow-elevation-3', className: 'shadow-elevation-3', label: 'Level 3' },
          { varName: '--lib-shadow-elevation-4', className: 'shadow-elevation-4', label: 'Level 4' },
          { varName: '--lib-shadow-elevation-5', className: 'shadow-elevation-5', label: 'Level 5' },
          { varName: '--lib-shadow-elevation-6', className: 'shadow-elevation-6', label: 'Level 6' }
        ]}
      />

      <Navigation />
    </div>
  )
}

