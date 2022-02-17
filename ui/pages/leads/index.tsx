import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useLeads, deleteLead } from '../../libs/leads'

import Table from '../../components/table'
import AddLeadForm from '../../components/forms/leads/add'
import Dialog from '../../components/compound/dialog'
import Modal from '../../components/compound/modal'
import { LeadData } from '../../libs/leads/types'
import UpdateLeadForm from '../../components/forms/leads/update'
import Link from 'next/link'

const Leads = () => {
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const [selected, setSelected] = useState<LeadData>()

  const { data: leads, mutate, error } = useLeads()

  const handleEdit = (data: LeadData) => {
    setShowEdit(true)
    setSelected(data)
  }

  const handleDelete = (data: LeadData) => {
    setShowDelete(true)
    setSelected(data)
  }

  const handleSuccess = () => {
    mutate()
    setShowEdit(false)
  }

  const handleConfirmDelete = async () => {
    if (selected?.id) {
      const lead = await deleteLead(selected?.id)
      if (!lead.isError) {
        mutate()
        setShowDelete(false)
      }
    }
  }

  return (
    <div className="w-full mx-auto xl:w-3/4">
      {error && (
        <div
          className="w-1/4 px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded top-20 right-2"
          role="alert"
        >
          <Link href={'/'} passHref>
            <a href="#">
              Session Timed out, click{' '}
              <span className="text-blue-700">here</span> to Login
            </a>
          </Link>
        </div>
      )}
      <div className="flex flex-col w-full mx-auto xl:mx-auto xl:flex-row">
        <div className="w-full xl:w-1/4">
          <AddLeadForm onSuccess={() => mutate()}></AddLeadForm>
        </div>
        <div className="w-full">
          <Table
            leads={!error ? leads : []}
            onEdit={handleEdit}
            onDelete={handleDelete}
          ></Table>
        </div>

        <Dialog
          open={showDelete}
          title={`Are you sure you want to delete ${selected?.firstName} ${selected?.lastName}?`}
          onCancel={() => setShowDelete(false)}
          onSubmit={handleConfirmDelete}
        ></Dialog>
        <Modal open={showEdit}>
          <UpdateLeadForm
            data={selected}
            onCancel={() => setShowEdit(!showEdit)}
            onSuccess={handleSuccess}
            onError={() => console.log('error')}
          ></UpdateLeadForm>
        </Modal>
      </div>
    </div>
  )
}

export default Leads
