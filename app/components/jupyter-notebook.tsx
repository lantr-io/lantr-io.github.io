import { readFileSync } from 'fs'
import { join } from 'path'
import Image from 'next/image'
import { highlight } from 'sugar-high'

interface NotebookCell {
  cell_type: 'code' | 'markdown'
  source: string | string[]
  outputs?: Array<{
    output_type: string
    data?: {
      'text/plain'?: string[]
      'text/html'?: string[]
      'image/png'?: string
      'image/jpeg'?: string
    }
    text?: string[]
  }>
}

interface NotebookData {
  cells: NotebookCell[]
}

function getCellSource(source: string | string[]): string {
  return Array.isArray(source) ? source.join('') : source
}

function renderOutput(output: NotebookCell['outputs'][0], index: number) {
  if (!output) return null

  if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
    if (output.data) {
      if (output.data['image/png']) {
        return (
          <div key={index} className="my-4">
            <img
              src={`data:image/png;base64,${output.data['image/png']}`}
              alt="Notebook output"
              className="max-w-full h-auto"
            />
          </div>
        )
      }
      if (output.data['image/jpeg']) {
        return (
          <div key={index} className="my-4">
            <img
              src={`data:image/jpeg;base64,${output.data['image/jpeg']}`}
              alt="Notebook output"
              className="max-w-full h-auto"
            />
          </div>
        )
      }
      if (output.data['text/html']) {
        const html = Array.isArray(output.data['text/html'])
          ? output.data['text/html'].join('')
          : output.data['text/html']
        return (
          <div
            key={index}
            className="my-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      }
      if (output.data['text/plain']) {
        const text = Array.isArray(output.data['text/plain'])
          ? output.data['text/plain'].join('')
          : output.data['text/plain']
        return (
          <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto my-4">
            <code>{text}</code>
          </pre>
        )
      }
    }
  }

  if (output.output_type === 'stream' && output.text) {
    const text = Array.isArray(output.text) ? output.text.join('') : output.text
    return (
      <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto my-4">
        <code>{text}</code>
      </pre>
    )
  }

  return null
}

export function JupyterNotebook({ path }: { path: string }) {
  const notebookPath = join(process.cwd(), 'app/blog', path)
  const notebookContent = readFileSync(notebookPath, 'utf-8')
  const notebook: NotebookData = JSON.parse(notebookContent)

  return (
    <div className="jupyter-notebook my-8">
      {notebook.cells.map((cell, cellIndex) => {
        const source = getCellSource(cell.source)

        if (cell.cell_type === 'markdown') {
          return (
            <div key={cellIndex} className="markdown-cell my-4 prose dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: source }} />
            </div>
          )
        }

        if (cell.cell_type === 'code') {
          const codeHTML = highlight(source)
          return (
            <div key={cellIndex} className="code-cell my-6">
              <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-t overflow-x-auto border border-gray-200 dark:border-gray-700">
                <code className="text-sm" dangerouslySetInnerHTML={{ __html: codeHTML }} />
              </pre>
              {cell.outputs && cell.outputs.length > 0 && (
                <div className="outputs border-l border-r border-b border-gray-200 dark:border-gray-700 rounded-b">
                  {cell.outputs.map((output, outputIndex) =>
                    renderOutput(output, outputIndex)
                  )}
                </div>
              )}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
