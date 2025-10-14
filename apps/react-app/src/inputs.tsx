import './base.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

export default function Inputs() {
  const vars = [
    '--lib-input-bg','--lib-input-color','--lib-input-placeholder-color','--lib-input-border-color','--lib-input-border-color-hover','--lib-input-border-color-focus',
    '--lib-input-disabled-bg','--lib-input-disabled-color','--lib-input-disabled-opacity','--lib-input-cursor-disabled','--lib-input-radius','--lib-input-shadow','--lib-input-ring-width','--lib-input-ring-color','--lib-input-transition',
    '--lib-input-padding-y-xs','--lib-input-padding-x-xs','--lib-input-padding-y-sm','--lib-input-padding-x-sm','--lib-input-padding-y-md','--lib-input-padding-x-md','--lib-input-padding-y-lg','--lib-input-padding-x-lg',
    '--lib-color-semantic-success', '--lib-color-semantic-danger',
    '--lib-color-text-base', '--lib-color-text-muted', '--lib-color-brand-primary',
    '--lib-font-family-sans', '--lib-font-size-sm', '--lib-font-size-xs', '--lib-font-weight-medium',
    '--lib-font-line-height-normal', '--lib-size-spacing-2', '--lib-size-spacing-3'
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

  const InputExample = (props: { label: string, className: string, placeholder?: string, disabled?: boolean, state?: 'success'|'invalid', tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <input className={`input ${props.className} ${props.state ? `input-${props.state}`: ''}`} placeholder={props.placeholder || 'Placeholder'} disabled={props.disabled} />
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.input {props.className ? `.${props.className}`: ''} {props.state ? `.input-${props.state}`: ''}</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const TitledInputExample = (props: { label: string, className: string, placeholder?: string, disabled?: boolean, state?: 'success'|'invalid', required?: boolean, help?: string, error?: string, tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div className="input-group">
        <label className={`input-label ${props.required ? 'input-label-required' : ''}`}>
          {props.label}
        </label>
        <input className={`input ${props.className} ${props.state ? `input-${props.state}`: ''}`} placeholder={props.placeholder || 'Placeholder'} disabled={props.disabled} />
        {props.help && <div className="input-help">{props.help}</div>}
        {props.error && <div className="input-error">{props.error}</div>}
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.input-group with .input-label, .input, .input-help, .input-error</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const TextareaExample = (props: { label: string, className: string, placeholder?: string, disabled?: boolean, state?: 'success'|'invalid', tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <textarea className={`textarea ${props.className} ${props.state ? `input-${props.state}`: ''}`} placeholder={props.placeholder || 'Placeholder'} disabled={props.disabled} />
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.textarea {props.className ? `.${props.className}`: ''} {props.state ? `.input-${props.state}`: ''}</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const SelectExample = (props: { label: string, className: string, disabled?: boolean, state?: 'success'|'invalid', tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <select className={`select ${props.className} ${props.state ? `select-${props.state}`: ''}`} disabled={props.disabled}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.select {props.className ? `.${props.className}`: ''} {props.state ? `.select-${props.state}`: ''}</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const CheckboxExample = (props: { label: string, checked?: boolean, disabled?: boolean, tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <label className="checkbox">
          <input 
            type="checkbox" 
            className="checkbox-input" 
            checked={props.checked} 
            disabled={props.disabled}
            onChange={() => {}} // Empty handler to prevent React warning
          />
          <span className="checkbox-label">{props.label}</span>
        </label>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.checkbox with .checkbox-input, .checkbox-label</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const RadioExample = (props: { label: string, name: string, checked?: boolean, disabled?: boolean, tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <label className="radio">
          <input 
            type="radio" 
            className="radio-input" 
            name={props.name} 
            checked={props.checked} 
            disabled={props.disabled}
            onChange={() => {}} // Empty handler to prevent React warning
          />
          <span className="radio-label">{props.label}</span>
        </label>
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.radio with .radio-input, .radio-label</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const FileInputExample = (props: { label: string, className: string, disabled?: boolean, state?: 'success'|'invalid', tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div>
        <input 
          type="file" 
          className={`file-input ${props.className} ${props.state ? `file-input-${props.state}`: ''}`} 
          disabled={props.disabled} 
        />
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.file-input {props.className ? `.${props.className}`: ''} {props.state ? `.file-input-${props.state}`: ''}</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const TitledFileInputExample = (props: { label: string, className: string, disabled?: boolean, state?: 'success'|'invalid', required?: boolean, help?: string, error?: string, tokens?: string[]}) => (
    <div style={{ display: 'inline-block', width: 'auto' }}>
      <div className="input-group">
        <label className={`input-label ${props.required ? 'input-label-required' : ''}`}>
          {props.label}
        </label>
        <input 
          type="file" 
          className={`file-input ${props.className} ${props.state ? `file-input-${props.state}`: ''}`} 
          disabled={props.disabled} 
        />
        {props.help && <div className="input-help">{props.help}</div>}
        {props.error && <div className="input-error">{props.error}</div>}
      </div>
      <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
        <div>.input-group with .input-label, .file-input, .input-help, .input-error</div>
        <div>{props.label}</div>
        {props.tokens && props.tokens.map(token => (
          <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
        ))}
      </div>
    </div>
  )

  const DropdownExample = (props: { label: string, className?: string, disabled?: boolean, state?: 'success'|'invalid', tokens?: string[]}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('Option 1');
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
      <div style={{ display: 'inline-block', width: 'auto', margin: 0, padding: 0 }}>
        <div style={{ margin: 0, padding: 0 }}>
          <div className={`dropdown ${props.className || ''}`}>
            <button 
              className={`select ${props.state ? `select-${props.state}`: ''}`}
              onClick={() => setIsOpen(!isOpen)}
              disabled={props.disabled}
            >
              {selectedValue}
            </button>
            <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`dropdown-item ${selectedValue === option ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedValue(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="type" style={{ marginTop: 'var(--lib-size-spacing-2)' }}>
          <div>.dropdown with .dropdown-list, .dropdown-item</div>
          <div>{props.label}</div>
          {props.tokens && props.tokens.map(token => (
            <div key={token}>{token.replace('--','')} = {tokenValues[token]}</div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ display: 'grid', gap: 'var(--lib-size-spacing-8)' }}>
      <Link className="btn btn-md btn-primary button-sticky" to="/">Back</Link>

      <h1 className="type-h1">Inputs</h1>
      <p className="type-body">Token-based inputs with sizes, states, and accessibility</p>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Sizes</h2>
        <p className="type-detail">Different input sizes mapped to spacing and font tokens</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <InputExample 
            label="Extra Small" 
            className="input-xs" 
            placeholder="XS input" 
            tokens={['--lib-input-padding-y-xs', '--lib-input-padding-x-xs']}
          />
          <InputExample 
            label="Small" 
            className="input-sm" 
            placeholder="Small input" 
            tokens={['--lib-input-padding-y-sm', '--lib-input-padding-x-sm']}
          />
          <InputExample 
            label="Medium" 
            className="input-md" 
            placeholder="Medium input" 
            tokens={['--lib-input-padding-y-md', '--lib-input-padding-x-md']}
          />
          <InputExample 
            label="Large" 
            className="input-lg" 
            placeholder="Large input" 
            tokens={['--lib-input-padding-y-lg', '--lib-input-padding-x-lg']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">States</h2>
        <p className="type-detail">Hover, focus-visible, disabled, and validation states</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <InputExample 
            label="Default" 
            className="input-md" 
            placeholder="Default" 
            tokens={['--lib-input-bg', '--lib-input-color', '--lib-input-border-color']}
          />
          <InputExample 
            label="Disabled" 
            className="input-md" 
            placeholder="Disabled" 
            disabled 
            tokens={['--lib-input-disabled-bg', '--lib-input-disabled-color', '--lib-input-disabled-opacity']}
          />
          <InputExample 
            label="Success" 
            className="input-md" 
            placeholder="Success" 
            state="success" 
            tokens={['--lib-color-semantic-success']}
          />
          <InputExample 
            label="Invalid" 
            className="input-md" 
            placeholder="Invalid" 
            state="invalid" 
            tokens={['--lib-color-semantic-danger']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Input Types</h2>
        <p className="type-detail">Different input types with labels, help text, and validation</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <TitledInputExample
            label="Titled Input"
            className="input-md"
            placeholder="With label"
            tokens={['--lib-input-bg', '--lib-input-color', '--lib-input-border-color']}
          />
          <TitledInputExample
            label="Required Input"
            className="input-md"
            placeholder="Required field"
            required
            tokens={['--lib-color-semantic-danger']}
          />
          <TitledInputExample
            label="Input with Help"
            className="input-md"
            placeholder="With help text"
            help="This is helpful information"
            tokens={['--lib-color-text-muted']}
          />
          <TitledInputExample
            label="Input with Error"
            className="input-md"
            placeholder="With error"
            error="This field has an error"
            state="invalid"
            tokens={['--lib-color-semantic-danger']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Textarea</h2>
        <p className="type-detail">Multi-line text input with resize capability</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <TextareaExample
            label="Default Textarea"
            className=""
            placeholder="Enter your message here..."
            tokens={['--lib-input-bg', '--lib-input-color', '--lib-input-border-color', '--lib-size-spacing-3']}
          />
          <TextareaExample
            label="Disabled Textarea"
            className=""
            placeholder="Disabled textarea"
            disabled
            tokens={['--lib-input-disabled-bg', '--lib-input-disabled-color', '--lib-input-disabled-opacity', '--lib-size-spacing-3']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Select</h2>
        <p className="type-detail">Dropdown selection input with sizes and states</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <SelectExample
            label="Extra Small"
            className="select-xs"
            tokens={['--lib-input-padding-y-xs', '--lib-input-padding-x-xs', '--lib-font-size-xs']}
          />
          <SelectExample
            label="Small"
            className="select-sm"
            tokens={['--lib-input-padding-y-sm', '--lib-input-padding-x-sm', '--lib-font-size-sm']}
          />
          <SelectExample
            label="Medium"
            className="select-md"
            tokens={['--lib-input-padding-y-md', '--lib-input-padding-x-md', '--lib-font-size-md']}
          />
          <SelectExample
            label="Large"
            className="select-lg"
            tokens={['--lib-input-padding-y-lg', '--lib-input-padding-x-lg', '--lib-font-size-lg']}
          />
          <SelectExample
            label="Success"
            className="select-md"
            state="success"
            tokens={['--lib-color-semantic-success']}
          />
          <SelectExample
            label="Invalid"
            className="select-md"
            state="invalid"
            tokens={['--lib-color-semantic-danger']}
          />
          <SelectExample
            label="Disabled"
            className="select-md"
            disabled
            tokens={['--lib-input-disabled-bg', '--lib-input-disabled-color', '--lib-input-disabled-opacity']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Checkbox & Radio</h2>
        <p className="type-detail">Selection inputs with labels</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <CheckboxExample
            label="Base Component (Unselected)"
            tokens={['--lib-color-brand-primary']}
          />
          <CheckboxExample
            label="With checked prop"
            checked
            tokens={['--lib-color-brand-primary']}
          />
          <CheckboxExample
            label="Disabled Checkbox"
            disabled
            tokens={['--lib-input-disabled-color', '--lib-input-disabled-opacity']}
          />
          <RadioExample
            label="Radio Option 1"
            name="radio-group"
            checked
            tokens={['--lib-color-brand-primary']}
          />
          <RadioExample
            label="Radio Option 2"
            name="radio-group"
            tokens={['--lib-color-brand-primary']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Dropdown List</h2>
        <p className="type-detail">Custom dropdown with controlled width and separate list component</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <DropdownExample
            label="Default Dropdown"
            tokens={['--lib-input-bg', '--lib-input-color', '--lib-input-border-color']}
          />
          <DropdownExample
            label="Small Dropdown"
            className="select-sm"
            tokens={['--lib-input-padding-y-sm', '--lib-input-padding-x-sm', '--lib-font-size-sm']}
          />
          <DropdownExample
            label="Success Dropdown"
            state="success"
            tokens={['--lib-color-semantic-success']}
          />
          <DropdownExample
            label="Invalid Dropdown"
            state="invalid"
            tokens={['--lib-color-semantic-danger']}
          />
          <DropdownExample
            label="Disabled Dropdown"
            disabled
            tokens={['--lib-input-disabled-bg', '--lib-input-disabled-color', '--lib-input-disabled-opacity']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">File Input</h2>
        <p className="type-detail">File upload input with sizes, states, and labels</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <FileInputExample
            label="Extra Small"
            className="file-input-xs"
            tokens={['--lib-input-padding-y-xs', '--lib-input-padding-x-xs']}
          />
          <FileInputExample
            label="Small"
            className="file-input-sm"
            tokens={['--lib-input-padding-y-sm', '--lib-input-padding-x-sm']}
          />
          <FileInputExample
            label="Medium"
            className="file-input-md"
            tokens={['--lib-input-padding-y-md', '--lib-input-padding-x-md']}
          />
          <FileInputExample
            label="Large"
            className="file-input-lg"
            tokens={['--lib-input-padding-y-lg', '--lib-input-padding-x-lg']}
          />
          <FileInputExample
            label="Success"
            className="file-input-md"
            state="success"
            tokens={['--lib-color-semantic-success']}
          />
          <FileInputExample
            label="Invalid"
            className="file-input-md"
            state="invalid"
            tokens={['--lib-color-semantic-danger']}
          />
          <FileInputExample
            label="Disabled"
            className="file-input-md"
            disabled
            tokens={['--lib-input-disabled-bg', '--lib-input-disabled-color', '--lib-input-disabled-opacity']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">File Input with Labels</h2>
        <p className="type-detail">File inputs with labels, help text, and validation</p>
        <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-4)' }}>
          <TitledFileInputExample
            label="File Upload"
            className="file-input-md"
            tokens={['--lib-input-bg', '--lib-input-color', '--lib-input-border-color']}
          />
          <TitledFileInputExample
            label="Required File"
            className="file-input-md"
            required
            tokens={['--lib-color-semantic-danger']}
          />
          <TitledFileInputExample
            label="File with Help"
            className="file-input-md"
            help="Upload a file in PDF, DOC, or DOCX format"
            tokens={['--lib-color-text-muted']}
          />
          <TitledFileInputExample
            label="File with Error"
            className="file-input-md"
            error="Please select a valid file"
            state="invalid"
            tokens={['--lib-color-semantic-danger']}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--lib-size-spacing-6)' }}>
        <h2 className="type-h2">Tokens</h2>
        <p className="type-detail">Actual values resolved from CSS variables</p>
        <div className="type">
          {vars.map(v => (
            <div key={v}>{v.replace('--','')} = {tokenValues[v]}</div>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  )
}


