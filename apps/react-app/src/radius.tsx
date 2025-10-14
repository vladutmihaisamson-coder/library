import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Radius() {
  const radiusVars = [
    '--lib-size-radius-none', '--lib-size-radius-xs', '--lib-size-radius-sm', '--lib-size-radius-md',
    '--lib-size-radius-lg', '--lib-size-radius-xl', '--lib-size-radius-2xl', '--lib-size-radius-3xl', '--lib-size-radius-full',
    '--lib-radius-button-default', '--lib-radius-button-small', '--lib-radius-button-large', '--lib-radius-button-pill',
    '--lib-radius-card-default', '--lib-radius-card-compact', '--lib-radius-card-relaxed',
    '--lib-radius-input-default', '--lib-radius-input-large',
    '--lib-radius-badge-default', '--lib-radius-badge-subtle',
    '--lib-radius-modal-default', '--lib-radius-modal-compact',
    '--lib-color-brand-primary', '--lib-color-brand-secondary', '--lib-color-brand-accent',
    '--lib-color-neutral-100', '--lib-color-neutral-200', '--lib-color-text-base',
    '--lib-size-spacing-8', '--lib-size-spacing-6', '--lib-size-spacing-4', '--lib-size-spacing-3', '--lib-size-spacing-2',
    '--lib-border-width', '--lib-font-size-sm', '--lib-font-weight-medium'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of radiusVars) {
      const value = getComputedStyle(root).getPropertyValue(v).trim()
      resolved[v] = value
    }
    setTokenValues(resolved)
  }, [])

  const RadiusExample = (props: { size: string, varName: string, className: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div
          style={{
            width: 'var(--lib-size-spacing-8)',
            height: 'var(--lib-size-spacing-8)',
            backgroundColor: 'var(--lib-color-brand-primary)',
            borderRadius: `var(${props.varName})`,
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
                  backgroundColor: 'var(--lib-color-brand-primary)',
                  borderRadius: `var(${example.varName})`,
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

      <h1 className="type-h1">Radius System</h1>
      <p className="type-body">Token-based border radius system with semantic naming</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Radius Scale</h2>
        <p className="type-detail">Raw radius values for precise control</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <RadiusExample size="none" varName="--lib-size-radius-none" className="rounded-none" />
          <RadiusExample size="xs" varName="--lib-size-radius-xs" className="rounded-xs" />
          <RadiusExample size="sm" varName="--lib-size-radius-sm" className="rounded-sm" />
          <RadiusExample size="md" varName="--lib-size-radius-md" className="rounded-md" />
          <RadiusExample size="lg" varName="--lib-size-radius-lg" className="rounded-lg" />
          <RadiusExample size="xl" varName="--lib-size-radius-xl" className="rounded-xl" />
          <RadiusExample size="2xl" varName="--lib-size-radius-2xl" className="rounded-2xl" />
          <RadiusExample size="3xl" varName="--lib-size-radius-3xl" className="rounded-3xl" />
          <RadiusExample size="full" varName="--lib-size-radius-full" className="rounded-full" />
        </div>
      </div>

      <SemanticExample
        title="Button Radius"
        description="Border radius for interactive elements like buttons and toggles"
        examples={[
          { varName: '--lib-radius-button-default', className: 'rounded-button', label: 'Default' },
          { varName: '--lib-radius-button-small', className: 'rounded-button-sm', label: 'Small' },
          { varName: '--lib-radius-button-large', className: 'rounded-button-lg', label: 'Large' },
          { varName: '--lib-radius-button-pill', className: 'rounded-button-pill', label: 'Pill' }
        ]}
      />

      <SemanticExample
        title="Card Radius"
        description="Border radius for content containers and cards"
        examples={[
          { varName: '--lib-radius-card-default', className: 'rounded-card', label: 'Default' },
          { varName: '--lib-radius-card-compact', className: 'rounded-card-compact', label: 'Compact' },
          { varName: '--lib-radius-card-relaxed', className: 'rounded-card-relaxed', label: 'Relaxed' }
        ]}
      />

      <SemanticExample
        title="Input Radius"
        description="Border radius for form inputs and text fields"
        examples={[
          { varName: '--lib-radius-input-default', className: 'rounded-input', label: 'Default' },
          { varName: '--lib-radius-input-large', className: 'rounded-input-lg', label: 'Large' }
        ]}
      />

      <SemanticExample
        title="Badge Radius"
        description="Border radius for status indicators and badges"
        examples={[
          { varName: '--lib-radius-badge-default', className: 'rounded-badge', label: 'Default' },
          { varName: '--lib-radius-badge-subtle', className: 'rounded-badge-subtle', label: 'Subtle' }
        ]}
      />

      <SemanticExample
        title="Modal Radius"
        description="Border radius for overlays and modal dialogs"
        examples={[
          { varName: '--lib-radius-modal-default', className: 'rounded-modal', label: 'Default' },
          { varName: '--lib-radius-modal-compact', className: 'rounded-modal-compact', label: 'Compact' }
        ]}
      />

      <Navigation />
    </div>
  )
}
