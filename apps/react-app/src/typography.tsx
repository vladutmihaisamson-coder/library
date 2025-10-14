import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Typography() {
  const vars = [
    '--lib-font-family-sans',
    '--lib-font-size-3xl', '--lib-font-size-2xl', '--lib-font-size-xl', '--lib-font-size-lg', '--lib-font-size-md', '--lib-font-size-sm',
    '--lib-font-weight-bold', '--lib-font-weight-medium', '--lib-font-weight-regular',
    '--lib-font-line-height-tight', '--lib-font-line-height-normal', '--lib-font-line-height-relaxed',
    '--lib-color-text-base', '--lib-color-text-muted', '--lib-color-brand-primary'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of vars) {
      const value = getComputedStyle(root).getPropertyValue(v).trim()
      resolved[v] = value
    }
    setTokenValues(resolved)
  }, [])

  const Section = (props: { label: string, sizeVar: string, weightVar: string, lhVar: string, className: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <p className={props.className}>{props.label}</p>
      <div className="type">
        <div>{'--lib-font-family-sans'.replace('--', '')} = {tokenValues['--lib-font-family-sans']}</div>
        <div>{props.sizeVar.replace('--', '')} = {tokenValues[props.sizeVar]}</div>
        <div>{props.weightVar.replace('--', '')} = {tokenValues[props.weightVar]}</div>
        <div>{props.lhVar.replace('--', '')} = {tokenValues[props.lhVar]}</div>
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>
      
      <Section className="type-h1" label="H1" sizeVar="--lib-font-size-3xl" weightVar="--lib-font-weight-bold" lhVar="--lib-font-line-height-tight" />
      <Section className="type-h2" label="H2" sizeVar="--lib-font-size-2xl" weightVar="--lib-font-weight-bold" lhVar="--lib-font-line-height-normal" />
      <Section className="type-h3" label="H3" sizeVar="--lib-font-size-xl" weightVar="--lib-font-weight-bold" lhVar="--lib-font-line-height-normal" />
      <Section className="type-h4" label="H4" sizeVar="--lib-font-size-lg" weightVar="--lib-font-weight-medium" lhVar="--lib-font-line-height-normal" />
      <Section className="type-h5" label="H5" sizeVar="--lib-font-size-md" weightVar="--lib-font-weight-medium" lhVar="--lib-font-line-height-normal" />
      <Section className="type-h6" label="H6" sizeVar="--lib-font-size-sm" weightVar="--lib-font-weight-medium" lhVar="--lib-font-line-height-tight" />

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
        <p className="type-body">Body</p>
        <div className="type">
          <div>{'--lib-font-family-sans'.replace('--', '')} = {tokenValues['--lib-font-family-sans']}</div>
          <div>{'--lib-font-size-md'.replace('--', '')} = {tokenValues['--lib-font-size-md']}</div>
          <div>{'--lib-font-weight-regular'.replace('--', '')} = {tokenValues['--lib-font-weight-regular']}</div>
          <div>{'--lib-font-line-height-normal'.replace('--', '')} = {tokenValues['--lib-font-line-height-normal']}</div>
          <div>{'--lib-color-text-base'.replace('--', '')} = {tokenValues['--lib-color-text-base']}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
        <a href="#" className="type-link">Link</a>
        <div className="type">
          <div>{'--lib-font-family-sans'.replace('--', '')} = {tokenValues['--lib-font-family-sans']}</div>
          <div>{'--lib-font-size-md'.replace('--', '')} = {tokenValues['--lib-font-size-md']}</div>
          <div>{'--lib-font-weight-medium'.replace('--', '')} = {tokenValues['--lib-font-weight-medium']}</div>
          <div>{'--lib-font-line-height-normal'.replace('--', '')} = {tokenValues['--lib-font-line-height-normal']}</div>
          <div>{'--lib-color-brand-primary'.replace('--', '')} = {tokenValues['--lib-color-brand-primary']}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
        <p className="type-detail">Detail</p>
        <div className="type">
          <div>{'--lib-font-family-sans'.replace('--', '')} = {tokenValues['--lib-font-family-sans']}</div>
          <div>{'--lib-font-size-sm'.replace('--', '')} = {tokenValues['--lib-font-size-sm']}</div>
          <div>{'--lib-font-weight-regular'.replace('--', '')} = {tokenValues['--lib-font-weight-regular']}</div>
          <div>{'--lib-font-line-height-relaxed'.replace('--', '')} = {tokenValues['--lib-font-line-height-relaxed']}</div>
          <div>{'--lib-color-text-muted'.replace('--', '')} = {tokenValues['--lib-color-text-muted']}</div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}


