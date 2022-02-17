import { FC } from 'react'
type Props = {
  open?: boolean
  children: JSX.Element
  // onCancel: () => {} | void
  // onSubmit: () => {} | void
}
const Modal: FC<Props> = ({ open, children }) => {
  if (!open) return null
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center min-h-screen bg-opacity-50 bg-slate-800">
      {children}
    </div>
  )
}

export default Modal
