import { FC } from 'react'
type Props = {
  open?: boolean
  title: string
  onCancel: () => {} | void
  onSubmit: () => {} | void
}
const Dialog: FC<Props> = ({ open, title, onCancel, onSubmit }) => {
  if (!open) return null
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-opacity-50 bg-slate-800">
      <div className="px-16 text-center bg-white rounded-md py-14">
        <h1 className="mb-4 text-xl font-bold text-slate-500">{title}</h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md text-md"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="py-2 ml-2 font-semibold text-white bg-red-500 rounded-md text-md px-7"
          onClick={onSubmit}
        >
          Yes
        </button>
      </div>
    </div>
  )
}

export default Dialog
