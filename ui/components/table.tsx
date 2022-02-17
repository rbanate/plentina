import { FC } from 'react'
import { LeadData } from '../libs/leads/types'
import Trash from '../components/icons/trash'
import Pencil from '../components/icons/pencil'

type Props = {
  title?: string
  leads?: LeadData[]
  onEdit: (data: LeadData) => {} | void
  onDelete: (data: LeadData) => {} | void
}
const Table: FC<Props> = ({
  title = 'Leads',
  leads = [],
  onEdit,
  onDelete,
}) => {
  return (
    <section className="px-4 mt-10 antialiased text-gray-600">
      <div className="flex flex-col justify-start h-full">
        <div className="w-full mx-auto bg-white border border-gray-200 rounded-sm shadow-lg">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{title}</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap ">
                      <div className="font-semibold text-left">
                        Mobile Number
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap ">
                      <div className="font-semibold text-left">
                        Phone Number
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap ">
                      <div className="font-semibold text-left">Company</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {leads &&
                    leads?.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {`${item.firstName || ''} ${item.lastName || ''}`}
                            </div>
                            <Pencil onClick={() => onEdit(item)}></Pencil>
                            <Trash onClick={() => onDelete(item)}></Trash>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap ">
                          <div className="text-left">{item.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="font-medium text-left text-gray-800">
                            {item.mobileNumber || '-'}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap ">
                          <div className="font-medium text-left text-gray-800">
                            {item.officeNumber || '-'}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap ">
                          <div className="font-medium text-left text-gray-800">
                            {item.companyName || '-'}
                          </div>
                        </td>
                      </tr>
                    ))}

                  {/* <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                            width="40"
                            height="40"
                            alt="Philip Harbach"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Philip Harbach
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">philip.h@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">
                        $2,767.04
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">🇩🇪</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">Test</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                            width="40"
                            height="40"
                            alt="Mirko Fisuk"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Mirko Fisuk
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">mirkofisuk@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">
                        $2,996.00
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">🇫🇷</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">Test</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                            width="40"
                            height="40"
                            alt="Olga Semklo"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Olga Semklo
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">olga.s@cool.design</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">
                        $1,220.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">🇮🇹</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">Test</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                            width="40"
                            height="40"
                            alt="Burak Long"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Burak Long
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">longburak@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">
                        $1,890.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">🇬🇧</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">Test</div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table
