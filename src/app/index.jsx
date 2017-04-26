import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { html } from 'js-beautify'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'


function Example({ title, children }) {
  return (
    <div className="bc:gray-1 br:3 bw:1 Bc:gray-2 mb:3">
      <h5 className="m:0 p:3 bb:1">{title}</h5>
      <div className="-cf">
        <div className="w:50% f:l p:3">
          {children}
        </div>
        <div className="w:50% f:l p:3">
          <SyntaxHighlighter language="html" style={docco}>{html(renderToStaticMarkup(children), { indent_size: 2, wrap_line_length: 30 })}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="b:1 c:white-0 bc:teal-6">
          <div className="w:xl mh:auto pv:4">
            <h1 className="m:0 fs:1 fw:1">shorthand.css</h1>
          </div>
        </div>

        <div className="w:xl mh:auto pv:4">

          <Section title="Padding">
            <Example title={'p:2'}>
              <div className={'bc:teal-1 p:4'}>
                  Nulla consectetur et dolore irure excepteur dolor tempor Lorem aute ex sint aute nostrud reprehenderit.
                </div>
            </Example>
          </Section>

          <Section title="Line Height">
            {
              ['lh:1', 'lh:2', 'lh:3', 'lh:4'].map((className, i) => (
                <Example title={className}>
                  <p key={i} className={className}>
                    Nulla consectetur et dolore irure excepteur dolor tempor Lorem aute ex sint aute nostrud reprehenderit.
                  </p>
                </Example>
              ))
            }
          </Section>

          <Section title="Font Weight">
            {
              Array.from(new Array(9).keys()).map(i => (
                <Example title={`fw:${i}`}>
                  <div key={i} className={`fw:${i}`}>
                    Nulla consectetur et dolore irure excepteur dolor tempor Lorem aute ex sint aute nostrud reprehenderit.
                  </div>
                </Example>
              ))
            }
          </Section>

          <Section title="Border widths">
            {
              Array.from(new Array(9).keys()).map(i => (
                <Example title={`Bw:${i}`}>
                  <div key={i} className={`Bw:${i} Bc:teal-7 p:4`}>
                    Nulla consectetur et dolore irure excepteur dolor tempor Lorem aute ex sint aute nostrud reprehenderit.
                  </div>
                </Example>
              ))
            }
          </Section>

          <Section title="Floats">
            <Example>
              <div className="-cf mh:-2">
                <div className="f:l w:50% ph:2">
                  <div className="bc:gray-4 p:3 c:gray-6 fw:3">Column 1</div>
                </div>
                <div className="f:l w:50% ph:2">
                  <div className="bc:gray-4 p:3 c:gray-6 fw:3">Column 2</div>
                </div>
              </div>
            </Example>
          </Section>
        </div>
      </div>
    )
  }
}
