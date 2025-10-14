import './base.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Animations() {
  const animationVars = [
    '--lib-animation-duration-instant', '--lib-animation-duration-fast', '--lib-animation-duration-normal', 
    '--lib-animation-duration-slow', '--lib-animation-duration-slower',
    '--lib-animation-easing-linear', '--lib-animation-easing-ease', '--lib-animation-easing-easeIn', 
    '--lib-animation-easing-easeOut', '--lib-animation-easing-easeInOut', '--lib-animation-easing-bounce', 
    '--lib-animation-easing-elastic', '--lib-animation-easing-smooth',
    '--lib-animation-button-default', '--lib-animation-button-hover', '--lib-animation-button-active',
    '--lib-animation-modal-enter', '--lib-animation-modal-exit',
    '--lib-animation-transition-default', '--lib-animation-transition-fast', '--lib-animation-transition-slow',
    '--lib-color-bg-surface', '--lib-color-brand-primary', '--lib-color-brand-secondary', '--lib-color-brand-accent',
    '--lib-size-spacing-8', '--lib-size-spacing-6', '--lib-size-spacing-4', '--lib-size-spacing-3', '--lib-size-spacing-2',
    '--lib-border-width', '--lib-size-radius-sm'
  ]

  const [tokenValues, setTokenValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const resolved: Record<string, string> = {}
    for (const v of animationVars) {
      const value = getComputedStyle(root).getPropertyValue(v).trim()
      resolved[v] = value
    }
    setTokenValues(resolved)
  }, [])

  const AnimationExample = (props: { label: string, className: string, description: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div
          className={props.className}
          style={{
            width: 'var(--lib-size-spacing-8)',
            height: 'var(--lib-size-spacing-8)',
            backgroundColor: 'var(--lib-color-brand-primary)',
            borderRadius: 'var(--lib-size-radius-sm)',
            outline: 'none',
            border: 'none',
            animationPlayState: 'paused'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'running'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'paused'
          }}
        />
        <span className="type-body">{props.label}</span>
      </div>
      <div className="type">
        <div>.{props.className}</div>
        <div>{props.description}</div>
      </div>
    </div>
  )

  const DurationExample = (props: { label: string, varName: string, className: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div
          style={{
            width: 'var(--lib-size-spacing-8)',
            height: 'var(--lib-size-spacing-8)',
            backgroundColor: 'var(--lib-color-brand-primary)',
            borderRadius: 'var(--lib-size-radius-sm)',
            outline: 'none',
            border: 'none',
            transition: `all var(${props.varName})`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'
            e.currentTarget.style.backgroundColor = 'var(--lib-color-brand-primary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.backgroundColor = 'var(--lib-color-brand-primary)'
          }}
        />
        <span className="type-body">{props.label}</span>
      </div>
      <div className="type">
        <div>{props.varName.replace('--', '')} = {tokenValues[props.varName]}</div>
        <div>.{props.className}</div>
      </div>
    </div>
  )

  const EasingExample = (props: { label: string, varName: string, className: string }) => (
    <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--lib-size-spacing-3)' }}>
        <div
          style={{
            width: 'var(--lib-size-spacing-8)',
            height: 'var(--lib-size-spacing-8)',
            backgroundColor: 'var(--lib-color-brand-primary)',
            borderRadius: 'var(--lib-size-radius-sm)',
            outline: 'none',
            border: 'none',
            transition: `transform 1s var(${props.varName})`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `translateX(var(--lib-size-animation-translate-x))`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        />
        <span className="type-body">{props.label}</span>
      </div>
      <div className="type">
        <div>{props.varName.replace('--', '')} = {tokenValues[props.varName]}</div>
        <div>.{props.className}</div>
      </div>
    </div>
  )

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      <h1 className="type-h1">Animation System</h1>
      <p className="type-body">Token-based animation system with duration, easing, and keyframe animations</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Animation Durations</h2>
        <p className="type-detail">Duration tokens for consistent timing across animations</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <DurationExample label="instant" varName="--lib-animation-duration-instant" className="transition-instant" />
          <DurationExample label="fast" varName="--lib-animation-duration-fast" className="transition-fast" />
          <DurationExample label="normal" varName="--lib-animation-duration-normal" className="transition-default" />
          <DurationExample label="slow" varName="--lib-animation-duration-slow" className="transition-slow" />
          <DurationExample label="slower" varName="--lib-animation-duration-slower" className="transition-slower" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Animation Easing</h2>
        <p className="type-detail">Easing functions for natural motion (hover to see effect)</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <EasingExample label="linear" varName="--lib-animation-easing-linear" className="easing-linear" />
          <EasingExample label="ease" varName="--lib-animation-easing-ease" className="easing-ease" />
          <EasingExample label="ease-in" varName="--lib-animation-easing-easeIn" className="easing-ease-in" />
          <EasingExample label="ease-out" varName="--lib-animation-easing-easeOut" className="easing-ease-out" />
          <EasingExample label="ease-in-out" varName="--lib-animation-easing-easeInOut" className="easing-ease-in-out" />
          <EasingExample label="bounce" varName="--lib-animation-easing-bounce" className="easing-bounce" />
          <EasingExample label="elastic" varName="--lib-animation-easing-elastic" className="easing-elastic" />
          <EasingExample label="smooth" varName="--lib-animation-easing-smooth" className="easing-smooth" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Keyframe Animations</h2>
        <p className="type-detail">Pre-built animation keyframes for common effects</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <AnimationExample label="fadeIn" className="animate-fade-in" description="Fade in from transparent to opaque" />
          <AnimationExample label="fadeOut" className="animate-fade-out" description="Fade out from opaque to transparent" />
          <AnimationExample label="slideUp" className="animate-slide-up" description="Slide up from bottom with fade" />
          <AnimationExample label="slideDown" className="animate-slide-down" description="Slide down from top with fade" />
          <AnimationExample label="slideLeft" className="animate-slide-left" description="Slide in from right with fade" />
          <AnimationExample label="slideRight" className="animate-slide-right" description="Slide in from left with fade" />
          <AnimationExample label="scaleIn" className="animate-scale-in" description="Scale in from 0 to 1 with fade" />
          <AnimationExample label="scaleOut" className="animate-scale-out" description="Scale out from 1 to 0 with fade" />
          <AnimationExample label="rotate" className="animate-rotate" description="Continuous 360° rotation" />
          <AnimationExample label="pulse" className="animate-pulse" description="Gentle scale pulsing effect" />
          <AnimationExample label="bounce" className="animate-bounce" description="Bouncing motion effect" />
          <AnimationExample label="shake" className="animate-shake" description="Horizontal shaking motion" />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Transition Utilities</h2>
        <p className="type-detail">Utility classes for smooth property transitions</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-default</div>
            <div className="type">All properties with normal duration and smooth easing</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-fast</div>
            <div className="type">All properties with fast duration and smooth easing</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-slow</div>
            <div className="type">All properties with slow duration and smooth easing</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-colors</div>
            <div className="type">Color, background-color, and border-color transitions</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-transform</div>
            <div className="type">Transform property transitions</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-opacity</div>
            <div className="type">Opacity property transitions</div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">.transition-shadow</div>
            <div className="type">Box-shadow property transitions</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Semantic Animations</h2>
        <p className="type-detail">Component-specific animation tokens</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">Button Animations</div>
            <div className="type">
              <div>Default: {tokenValues['--lib-animation-button-default']}</div>
              <div>Hover: {tokenValues['--lib-animation-button-hover']}</div>
              <div>Active: {tokenValues['--lib-animation-button-active']}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">Modal Animations</div>
            <div className="type">
              <div>Enter: {tokenValues['--lib-animation-modal-enter']}</div>
              <div>Exit: {tokenValues['--lib-animation-modal-exit']}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-2)' }}>
            <div className="type-body">Transition Tokens</div>
            <div className="type">
              <div>Default: {tokenValues['--lib-animation-transition-default']}</div>
              <div>Fast: {tokenValues['--lib-animation-transition-fast']}</div>
              <div>Slow: {tokenValues['--lib-animation-transition-slow']}</div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
