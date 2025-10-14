import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Spacing() {
  const spacingVars = [
    '--lib-size-spacing-0', '--lib-size-spacing-1', '--lib-size-spacing-2', '--lib-size-spacing-3',
    '--lib-size-spacing-4', '--lib-size-spacing-5', '--lib-size-spacing-6', '--lib-size-spacing-8',
    '--lib-size-spacing-10', '--lib-size-spacing-12'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of spacingVars) {
      resolved[v] = getComputedStyle(root).getPropertyValue(v).trim()
    }
    setTokenValues(resolved)
  }, [])

  const SpacingExample = (props: { size: string, varName: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div 
          style={{ 
            width: `var(${props.varName})`, 
            height: 'var(--lib-size-spacing-4)', 
            backgroundColor: 'var(--lib-color-brand-primary)',
            borderRadius: 'var(--lib-size-radius-sm)'
          }}
        />
        <span className="type-body">{props.size}</span>
      </div>
      <div className="type">
        <div>{props.varName.replace('--', '')} = {tokenValues[props.varName]}</div>
      </div>
    </div>
  )

  const UtilityExample = (props: { className: string, description: string, pixelValue?: string, showVisual?: boolean, elementName?: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      {props.showVisual ? (
        <div style={{ 
          backgroundColor: 'var(--lib-color-neutral-100)', 
          border: 'var(--lib-border-width) solid var(--lib-color-neutral-300)',
          borderRadius: 'var(--lib-size-radius-sm)',
          padding: 'var(--lib-size-spacing-4)',
          position: 'relative'
        }}>
          <div 
            className={props.className}
            style={{ 
              backgroundColor: 'white', 
              color: 'var(--lib-color-text-base)',
              borderRadius: 'var(--lib-size-radius-sm)',
              minHeight: 'var(--lib-size-spacing-6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--lib-font-size-sm)',
              fontWeight: 'var(--lib-font-weight-medium)'
            }}
          >
            {props.elementName || 'Element'}
          </div>
        </div>
      ) : (
        <div 
          className={props.className}
          style={{ 
            backgroundColor: 'var(--lib-color-bg-surface)', 
            border: 'var(--lib-border-width) solid var(--lib-color-neutral-200)',
            borderRadius: 'var(--lib-size-radius-sm)',
            minHeight: 'var(--lib-size-spacing-8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span className="type-detail">{props.description}</span>
        </div>
      )}
      <div className="type">
        <div>.{props.className}</div>
        {props.pixelValue && <div>Value: {props.pixelValue}</div>}
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>
      
      <div>
        <h1 className="type-h1">Spacing</h1>
        <p className="type-body">Token-based spacing system with utility classes</p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Spacing Scale</h2>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <SpacingExample size="0" varName="--lib-size-spacing-0" />
          <SpacingExample size="1" varName="--lib-size-spacing-1" />
          <SpacingExample size="2" varName="--lib-size-spacing-2" />
          <SpacingExample size="3" varName="--lib-size-spacing-3" />
          <SpacingExample size="4" varName="--lib-size-spacing-4" />
          <SpacingExample size="5" varName="--lib-size-spacing-5" />
          <SpacingExample size="6" varName="--lib-size-spacing-6" />
          <SpacingExample size="8" varName="--lib-size-spacing-8" />
          <SpacingExample size="10" varName="--lib-size-spacing-10" />
          <SpacingExample size="12" varName="--lib-size-spacing-12" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Margin Utilities</h2>
        <p className="type-detail">Margin creates space OUTSIDE elements (pushes elements away from each other)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <UtilityExample className="spacing-2" description="margin: var(--lib-size-spacing-2)" pixelValue={tokenValues['--lib-size-spacing-2']} showVisual={true} />
          <UtilityExample className="spacing-4" description="margin: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} />
          <UtilityExample className="spacing-6" description="margin: var(--lib-size-spacing-6)" pixelValue={tokenValues['--lib-size-spacing-6']} showVisual={true} />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Padding Utilities</h2>
        <p className="type-detail">Padding creates space INSIDE elements (adds space within the element's border)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <UtilityExample className="p-2" description="padding: var(--lib-size-spacing-2)" pixelValue={tokenValues['--lib-size-spacing-2']} showVisual={true} elementName="Content" />
          <UtilityExample className="p-4" description="padding: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} elementName="Content" />
          <UtilityExample className="p-6" description="padding: var(--lib-size-spacing-6)" pixelValue={tokenValues['--lib-size-spacing-6']} showVisual={true} elementName="Content" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Directional Margins</h2>
        <p className="type-detail">Control margins on specific sides (top, bottom, left, right)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <UtilityExample className="mt-4" description="margin-top: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} />
          <UtilityExample className="mb-4" description="margin-bottom: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} />
          <UtilityExample className="ml-4" description="margin-left: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} />
          <UtilityExample className="mr-4" description="margin-right: var(--lib-size-spacing-4)" pixelValue={tokenValues['--lib-size-spacing-4']} showVisual={true} />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Gap Utilities</h2>
        <p className="type-detail">Gap controls space between flex/grid items (similar to margin but for layout containers)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
          </div>
          <div className="type">
            <div>gap: var(--lib-size-spacing-2) ({tokenValues['--lib-size-spacing-2']})</div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-4)' }}>
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
          </div>
          <div className="type">
            <div>gap: var(--lib-size-spacing-4) ({tokenValues['--lib-size-spacing-4']})</div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--lib-size-spacing-6)' }}>
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
            <div className="p-2" style={{ backgroundColor: 'var(--lib-color-brand-primary)', borderRadius: 'var(--lib-size-radius-sm)' }} />
          </div>
          <div className="type">
            <div>gap: var(--lib-size-spacing-6) ({tokenValues['--lib-size-spacing-6']})</div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
