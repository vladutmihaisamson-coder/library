import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Links() {
  const linkVars = [
    '--lib-link-variant-default-color', '--lib-link-variant-default-text-decoration', '--lib-link-variant-default-text-decoration-color', '--lib-link-variant-default-text-underline-offset',
    '--lib-link-variant-subtle-color', '--lib-link-variant-subtle-text-decoration', '--lib-link-variant-subtle-text-decoration-color', '--lib-link-variant-subtle-text-underline-offset',
    '--lib-link-variant-brand-color', '--lib-link-variant-brand-text-decoration', '--lib-link-variant-brand-text-decoration-color', '--lib-link-variant-brand-text-underline-offset',
    '--lib-link-variant-danger-color', '--lib-link-variant-danger-text-decoration', '--lib-link-variant-danger-text-decoration-color', '--lib-link-variant-danger-text-underline-offset',
    '--lib-link-variant-success-color', '--lib-link-variant-success-text-decoration', '--lib-link-variant-success-text-decoration-color', '--lib-link-variant-success-text-underline-offset',
    '--lib-link-state-hover-default-color', '--lib-link-state-hover-default-text-decoration', '--lib-link-state-hover-default-text-decoration-color',
    '--lib-link-state-hover-subtle-color', '--lib-link-state-hover-subtle-text-decoration', '--lib-link-state-hover-subtle-text-decoration-color',
    '--lib-link-state-hover-brand-color', '--lib-link-state-hover-brand-text-decoration', '--lib-link-state-hover-brand-text-decoration-color',
    '--lib-link-state-hover-danger-color', '--lib-link-state-hover-danger-text-decoration', '--lib-link-state-hover-danger-text-decoration-color',
    '--lib-link-state-hover-success-color', '--lib-link-state-hover-success-text-decoration', '--lib-link-state-hover-success-text-decoration-color',
    '--lib-link-state-active-default-color', '--lib-link-state-active-default-text-decoration', '--lib-link-state-active-default-text-decoration-color',
    '--lib-link-state-active-subtle-color', '--lib-link-state-active-subtle-text-decoration', '--lib-link-state-active-subtle-text-decoration-color',
    '--lib-link-state-active-brand-color', '--lib-link-state-active-brand-text-decoration', '--lib-link-state-active-brand-text-decoration-color',
    '--lib-link-state-active-danger-color', '--lib-link-state-active-danger-text-decoration', '--lib-link-state-active-danger-text-decoration-color',
    '--lib-link-state-active-success-color', '--lib-link-state-active-success-text-decoration', '--lib-link-state-active-success-text-decoration-color',
    '--lib-link-state-visited-default-color', '--lib-link-state-visited-default-text-decoration', '--lib-link-state-visited-default-text-decoration-color',
    '--lib-link-state-visited-subtle-color', '--lib-link-state-visited-subtle-text-decoration', '--lib-link-state-visited-subtle-text-decoration-color',
    '--lib-link-state-visited-brand-color', '--lib-link-state-visited-brand-text-decoration', '--lib-link-state-visited-brand-text-decoration-color',
    '--lib-link-state-visited-danger-color', '--lib-link-state-visited-danger-text-decoration', '--lib-link-state-visited-danger-text-decoration-color',
    '--lib-link-state-visited-success-color', '--lib-link-state-visited-success-text-decoration', '--lib-link-state-visited-success-text-decoration-color',
    '--lib-link-state-focus-outline', '--lib-link-state-focus-outline-offset', '--lib-link-state-focus-border-radius',
    '--lib-link-state-disabled-color', '--lib-link-state-disabled-text-decoration', '--lib-link-state-disabled-text-decoration-color', '--lib-link-state-disabled-cursor', '--lib-link-state-disabled-opacity',
    '--lib-link-animation-hover', '--lib-link-animation-active', '--lib-link-animation-focus', '--lib-link-animation-disabled',
    '--lib-font-family-sans', '--lib-font-weight-medium', '--lib-font-line-height-normal', '--lib-size-radius-sm',
    '--lib-size-spacing-2', '--lib-size-spacing-3', '--lib-size-spacing-4', '--lib-size-spacing-6', '--lib-size-spacing-8',
    '--lib-color-neutral-100', '--lib-color-brand-primary'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of linkVars) {
      resolved[v] = getComputedStyle(root).getPropertyValue(v).trim()
    }
    setTokenValues(resolved)
  }, [])

  const LinkExample = (props: { 
    label: string, 
    className: string, 
    description: string,
    colorVar: string,
    decorationVar: string,
    decorationColorVar: string,
    underlineOffsetVar: string
  }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <a href="#" className={props.className}>
          {props.label}
        </a>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>{props.description}</div>
        <div>Color: {tokenValues[props.colorVar]}</div>
        <div>Decoration: {tokenValues[props.decorationVar]}</div>
        <div>Decoration Color: {tokenValues[props.decorationColorVar]}</div>
        <div>Underline Offset: {tokenValues[props.underlineOffsetVar]}</div>
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
        <a href="#" className={props.className}>
          {props.state} Link
        </a>
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

  const FocusExample = (props: { label: string, className: string }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <a href="#" className={props.className} tabIndex={0}>
          {props.label} (Focus me)
        </a>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>Focus state with outline and transition</div>
        <div>Outline: {tokenValues['--lib-link-state-focus-outline']}</div>
        <div>Outline Offset: {tokenValues['--lib-link-state-focus-outline-offset']}</div>
        <div>Border Radius: {tokenValues['--lib-link-state-focus-border-radius']}</div>
        <div>Transition: {tokenValues['--lib-link-animation-focus']}</div>
      </div>
    </div>
  )

  const DisabledExample = (props: { label: string, className: string }) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <a href="#" className={props.className} aria-disabled="true" tabIndex={-1}>
          {props.label}
        </a>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.{props.className}</div>
        <div>Disabled state with reduced opacity</div>
        <div>Color: {tokenValues['--lib-link-state-disabled-color']}</div>
        <div>Decoration: {tokenValues['--lib-link-state-disabled-text-decoration']}</div>
        <div>Cursor: {tokenValues['--lib-link-state-disabled-cursor']}</div>
        <div>Opacity: {tokenValues['--lib-link-state-disabled-opacity']}</div>
        <div>Transition: {tokenValues['--lib-link-animation-disabled']}</div>
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      <h1 className="type-h1">Link System</h1>
      <p className="type-body">Token-based link system with variants, states, and interactive behaviors</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Link Variants</h2>
        <p className="type-detail">Different link styles for various use cases</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <LinkExample
            label="Default Link"
            className="link link-default"
            description="Standard link with underline"
            colorVar="--lib-link-variant-default-color"
            decorationVar="--lib-link-variant-default-text-decoration"
            decorationColorVar="--lib-link-variant-default-text-decoration-color"
            underlineOffsetVar="--lib-link-variant-default-text-underline-offset"
          />
          <LinkExample
            label="Subtle Link"
            className="link link-subtle"
            description="Muted link without underline by default"
            colorVar="--lib-link-variant-subtle-color"
            decorationVar="--lib-link-variant-subtle-text-decoration"
            decorationColorVar="--lib-link-variant-subtle-text-decoration-color"
            underlineOffsetVar="--lib-link-variant-subtle-text-underline-offset"
          />
          <LinkExample
            label="Brand Link"
            className="link link-brand"
            description="Brand-colored link for emphasis"
            colorVar="--lib-link-variant-brand-color"
            decorationVar="--lib-link-variant-brand-text-decoration"
            decorationColorVar="--lib-link-variant-brand-text-decoration-color"
            underlineOffsetVar="--lib-link-variant-brand-text-underline-offset"
          />
          <LinkExample
            label="Danger Link"
            className="link link-danger"
            description="Destructive action link"
            colorVar="--lib-link-variant-danger-color"
            decorationVar="--lib-link-variant-danger-text-decoration"
            decorationColorVar="--lib-link-variant-danger-text-decoration-color"
            underlineOffsetVar="--lib-link-variant-danger-text-underline-offset"
          />
          <LinkExample
            label="Success Link"
            className="link link-success"
            description="Positive action link"
            colorVar="--lib-link-variant-success-color"
            decorationVar="--lib-link-variant-success-text-decoration"
            decorationColorVar="--lib-link-variant-success-text-decoration-color"
            underlineOffsetVar="--lib-link-variant-success-text-underline-offset"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Link States</h2>
        <p className="type-detail">Interactive states with smooth transitions</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <StateExample
            state="Hover (Default)"
            className="link link-default hover-state"
            description="Default link on hover"
            tokens={[
              { name: 'Color', value: tokenValues['--lib-link-state-hover-default-color'] },
              { name: 'Decoration', value: tokenValues['--lib-link-state-hover-default-text-decoration'] },
              { name: 'Decoration Color', value: tokenValues['--lib-link-state-hover-default-text-decoration-color'] },
              { name: 'Transition', value: tokenValues['--lib-link-animation-hover'] }
            ]}
          />
          <StateExample
            state="Active (Brand)"
            className="link link-brand active-state"
            description="Brand link when active"
            tokens={[
              { name: 'Color', value: tokenValues['--lib-link-state-active-brand-color'] },
              { name: 'Decoration', value: tokenValues['--lib-link-state-active-brand-text-decoration'] },
              { name: 'Decoration Color', value: tokenValues['--lib-link-state-active-brand-text-decoration-color'] },
              { name: 'Transition', value: tokenValues['--lib-link-animation-active'] }
            ]}
          />
          <StateExample
            state="Visited (Default)"
            className="link link-default visited-state"
            description="Default link after being visited"
            tokens={[
              { name: 'Color', value: tokenValues['--lib-link-state-visited-default-color'] },
              { name: 'Decoration', value: tokenValues['--lib-link-state-visited-default-text-decoration'] },
              { name: 'Decoration Color', value: tokenValues['--lib-link-state-visited-default-text-decoration-color'] }
            ]}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Focus & Disabled States</h2>
        <p className="type-detail">Accessibility and interaction states</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <FocusExample
            label="Focusable Link"
            className="link link-default"
          />
          <DisabledExample
            label="Disabled Link"
            className="link link-disabled"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Link Groups</h2>
        <p className="type-detail">Grouped links for navigation</p>
        <div style={{ display: 'inline-block', width: 'auto' }}>
          <div className="link-group">
            <a href="#" className="link link-default">Home</a>
            <a href="#" className="link link-default">About</a>
            <a href="#" className="link link-default">Contact</a>
          </div>
          <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
            <div>.link-group</div>
            <div>Flex layout with tokenized gap</div>
            <div>Gap: {tokenValues['--lib-size-spacing-4']}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Navigation Links</h2>
        <p className="type-detail">Enhanced navigation links with hover effects</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div className="link-group">
            <a href="#" className="link link-nav link-default">Dashboard</a>
            <a href="#" className="link link-nav link-default">Settings</a>
            <a href="#" className="link link-nav link-default">Profile</a>
          </div>
          <div className="type">
            <div>.link-nav</div>
            <div>Navigation links with padding and hover background</div>
            <div>Padding: {tokenValues['--lib-size-spacing-2']} {tokenValues['--lib-size-spacing-3']}</div>
            <div>Border Radius: {tokenValues['--lib-size-radius-sm']}</div>
            <div>Hover Background: {tokenValues['--lib-color-neutral-100']}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Animation Tokens</h2>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
          <div className="type-body">Link Animation Tokens</div>
          <div className="type">
            <div>Hover: {tokenValues['--lib-link-animation-hover']}</div>
            <div>Active: {tokenValues['--lib-link-animation-active']}</div>
            <div>Focus: {tokenValues['--lib-link-animation-focus']}</div>
            <div>Disabled: {tokenValues['--lib-link-animation-disabled']}</div>
          </div>
        </div>
      </div>

              <Navigation />
    </div>
  )
}
