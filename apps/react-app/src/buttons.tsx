import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Buttons() {
  const buttonVars = [
    '--lib-button-size-xs', '--lib-button-size-sm', '--lib-button-size-md', '--lib-button-size-lg', '--lib-button-size-xl',
    '--lib-button-variant-primary-background', '--lib-button-variant-primary-color', '--lib-button-variant-primary-border', '--lib-button-variant-primary-shadow',
    '--lib-button-variant-secondary-background', '--lib-button-variant-secondary-color', '--lib-button-variant-secondary-border', '--lib-button-variant-secondary-shadow',
    '--lib-button-variant-ghost-background', '--lib-button-variant-ghost-color', '--lib-button-variant-ghost-border', '--lib-button-variant-ghost-shadow',
    '--lib-button-variant-danger-background', '--lib-button-variant-danger-color', '--lib-button-variant-danger-border', '--lib-button-variant-danger-shadow',
    '--lib-button-variant-success-background', '--lib-button-variant-success-color', '--lib-button-variant-success-border', '--lib-button-variant-success-shadow',
    '--lib-button-state-hover-primary-background', '--lib-button-state-hover-primary-shadow',
    '--lib-button-state-hover-secondary-background', '--lib-button-state-hover-secondary-color',
    '--lib-button-state-hover-ghost-background',
    '--lib-button-state-hover-danger-background', '--lib-button-state-hover-danger-shadow',
    '--lib-button-state-hover-success-background', '--lib-button-state-hover-success-shadow',
    '--lib-button-state-active-primary-shadow',
    '--lib-button-state-active-secondary-background',
    '--lib-button-state-active-ghost-background',
    '--lib-button-state-active-danger-shadow',
    '--lib-button-state-active-success-shadow',
    '--lib-button-state-disabled-background', '--lib-button-state-disabled-color', '--lib-button-state-disabled-border', '--lib-button-state-disabled-shadow', '--lib-button-state-disabled-cursor',
    '--lib-button-animation-hover', '--lib-button-animation-active', '--lib-button-animation-focus', '--lib-button-animation-disabled',
    '--lib-font-size-xs', '--lib-font-size-sm', '--lib-font-size-md', '--lib-font-size-lg', '--lib-font-size-xl',
    '--lib-font-weight-medium', '--lib-font-family-sans', '--lib-font-line-height-normal',
    '--lib-radius-button-default', '--lib-animation-button-default',
    '--lib-size-spacing-2', '--lib-size-spacing-4', '--lib-size-spacing-6', '--lib-size-spacing-8'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of buttonVars) {
      const value = getComputedStyle(root).getPropertyValue(v).trim()
      resolved[v] = value
    }
    setTokenValues(resolved)
  }, [])


  const SizeExample = (props: { size: string, className: string, varName: string }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <button className={`btn btn-primary ${props.className}`}>
          {props.size} Button
        </button>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>Padding: {tokenValues[props.varName]}</div>
        <div>Font Size: {tokenValues[`--lib-font-size-${props.size}`]}</div>
      </div>
    </div>
  )

  const VariantExample = (props: { 
    variant: string, 
    className: string, 
    description: string,
    backgroundVar: string,
    colorVar: string,
    borderVar: string,
    shadowVar: string
  }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <button className={`btn btn-md ${props.className}`}>
          {props.variant} Button
        </button>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>{props.description}</div>
        <div>Background: {tokenValues[props.backgroundVar]}</div>
        <div>Color: {tokenValues[props.colorVar]}</div>
        <div>Border: {tokenValues[props.borderVar]}</div>
        <div>Shadow: {tokenValues[props.shadowVar]}</div>
      </div>
    </div>
  )

  const StateExample = (props: { 
    state: string, 
    className: string, 
    description: string,
    tokens: { name: string, value: string }[]
  }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <button className={`btn btn-md btn-primary ${props.className}`}>
          {props.state} Button
        </button>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>{props.description}</div>
        {props.tokens.map((token, index) => (
          <div key={index}>{token.name} = {token.value}</div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      <h1 className="type-h1">Button System</h1>
      <p className="type-body">Token-based button system with variants, sizes, and interactive states</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Button Sizes</h2>
        <p className="type-detail">Different button sizes with corresponding padding and font sizes</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <SizeExample size="xs" className="btn-xs" varName="--lib-button-size-xs" />
          <SizeExample size="sm" className="btn-sm" varName="--lib-button-size-sm" />
          <SizeExample size="md" className="btn-md" varName="--lib-button-size-md" />
          <SizeExample size="lg" className="btn-lg" varName="--lib-button-size-lg" />
          <SizeExample size="xl" className="btn-xl" varName="--lib-button-size-xl" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Button Variants</h2>
        <p className="type-detail">Different button styles for various use cases</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <VariantExample 
            variant="Primary" 
            className="btn-primary" 
            description="Primary action button with brand color"
            backgroundVar="--lib-button-variant-primary-background"
            colorVar="--lib-button-variant-primary-color"
            borderVar="--lib-button-variant-primary-border"
            shadowVar="--lib-button-variant-primary-shadow"
          />
          <VariantExample 
            variant="Secondary" 
            className="btn-secondary" 
            description="Secondary action with outline style"
            backgroundVar="--lib-button-variant-secondary-background"
            colorVar="--lib-button-variant-secondary-color"
            borderVar="--lib-button-variant-secondary-border"
            shadowVar="--lib-button-variant-secondary-shadow"
          />
          <VariantExample 
            variant="Ghost" 
            className="btn-ghost" 
            description="Subtle button with transparent background"
            backgroundVar="--lib-button-variant-ghost-background"
            colorVar="--lib-button-variant-ghost-color"
            borderVar="--lib-button-variant-ghost-border"
            shadowVar="--lib-button-variant-ghost-shadow"
          />
          <VariantExample 
            variant="Danger" 
            className="btn-danger" 
            description="Destructive action button"
            backgroundVar="--lib-button-variant-danger-background"
            colorVar="--lib-button-variant-danger-color"
            borderVar="--lib-button-variant-danger-border"
            shadowVar="--lib-button-variant-danger-shadow"
          />
          <VariantExample 
            variant="Success" 
            className="btn-success" 
            description="Positive action button"
            backgroundVar="--lib-button-variant-success-background"
            colorVar="--lib-button-variant-success-color"
            borderVar="--lib-button-variant-success-border"
            shadowVar="--lib-button-variant-success-shadow"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Interactive States</h2>
        <p className="type-detail">Button states for different interactions (hover to see effects)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <StateExample 
            state="Default" 
            className="" 
            description="Default button state"
            tokens={[
              { name: 'Background', value: tokenValues['--lib-button-variant-primary-background'] },
              { name: 'Color', value: tokenValues['--lib-button-variant-primary-color'] },
              { name: 'Shadow', value: tokenValues['--lib-button-variant-primary-shadow'] }
            ]}
          />
          <StateExample 
            state="Hover" 
            className="btn-hover" 
            description="Hover state (hover to see effect)"
            tokens={[
              { name: 'Background', value: tokenValues['--lib-button-state-hover-primary-background'] },
              { name: 'Shadow', value: tokenValues['--lib-button-state-hover-primary-shadow'] }
            ]}
          />
          <StateExample 
            state="Active" 
            className="btn-active" 
            description="Active/pressed state"
            tokens={[
              { name: 'Shadow', value: tokenValues['--lib-button-state-active-primary-shadow'] }
            ]}
          />
          <StateExample 
            state="Disabled" 
            className="btn-disabled" 
            description="Disabled state"
            tokens={[
              { name: 'Background', value: tokenValues['--lib-button-state-disabled-background'] },
              { name: 'Color', value: tokenValues['--lib-button-state-disabled-color'] },
              { name: 'Cursor', value: tokenValues['--lib-button-state-disabled-cursor'] }
            ]}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Button Groups</h2>
        <p className="type-detail">Grouped buttons for related actions</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="btn-group">
              <button className="btn btn-md btn-primary">First</button>
              <button className="btn btn-md btn-primary">Second</button>
              <button className="btn btn-md btn-primary">Third</button>
            </div>
            <div className="type">
              <div>.btn-group</div>
              <div>Connected buttons with shared borders</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Button with Icons</h2>
        <p className="type-detail">Buttons with icons and proper spacing</p>
        <div style={{ display: 'inline-block', width: 'auto' }}>
          <div>
            <button className="btn btn-md btn-primary btn-icon">
              <span>→</span>
              <span>Save</span>
            </button>
          </div>
          <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
            <div>.btn-icon</div>
            <div>Button with icon and text spacing</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Button Tokens</h2>
        <p className="type-detail">All button-related design tokens</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">Size Tokens</div>
            <div className="type">
              <div>XS: {tokenValues['--lib-button-size-xs']}</div>
              <div>SM: {tokenValues['--lib-button-size-sm']}</div>
              <div>MD: {tokenValues['--lib-button-size-md']}</div>
              <div>LG: {tokenValues['--lib-button-size-lg']}</div>
              <div>XL: {tokenValues['--lib-button-size-xl']}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">Animation Tokens</div>
            <div className="type">
              <div>Default: {tokenValues['--lib-animation-button-default']}</div>
              <div>Hover: {tokenValues['--lib-button-animation-hover']}</div>
              <div>Active: {tokenValues['--lib-button-animation-active']}</div>
              <div>Focus: {tokenValues['--lib-button-animation-focus']}</div>
              <div>Disabled: {tokenValues['--lib-button-animation-disabled']}</div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
