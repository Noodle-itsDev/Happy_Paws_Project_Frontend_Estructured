import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

// Datos de ejemplo
const products = [
  { id: "1", code: "P001", name: "Product A", category: "Category 1", quantity: 10 },
  { id: "2", code: "P002", name: "Product B", category: "Category 2", quantity: 20 },
  { id: "3", code: "P003", name: "Product C", category: "Category 1", quantity: 30 },
  { id: "4", code: "P004", name: "Product D", category: "Category 3", quantity: 40 },
  { id: "5", code: "P005", name: "Product E", category: "Category 2", quantity: 50 },
  { id: "6", code: "P006", name: "Product F", category: "Category 1", quantity: 60 },
  { id: "7", code: "P007", name: "Product G", category: "Category 3", quantity: 70 },
  { id: "8", code: "P008", name: "Product H", category: "Category 2", quantity: 80 },
  { id: "9", code: "P009", name: "Product I", category: "Category 1", quantity: 90 },
  { id: "10", code: "P010", name: "Product J", category: "Category 3", quantity: 100 },
];

const ProtectoraHome: React.FC = () => {
  const [filters, setFilters] = useState<any>({
    global: { value: '', matchMode: FilterMatchMode.CONTAINS },
    code: { value: '', matchMode: FilterMatchMode.CONTAINS },
    name: { value: '', matchMode: FilterMatchMode.CONTAINS },
    category: { value: '', matchMode: FilterMatchMode.CONTAINS },
    quantity: { value: '', matchMode: FilterMatchMode.CONTAINS },
  });

  const header = (
    <div className="flex items-center justify-between p-4 bg-primary-orange border-b border-gray-200">
      <h3 className="text-lg font-semibold">Product List</h3>
      <span className="flex items-center space-x-2">
        <i className="pi pi-search text-gray-500" />
        <InputText
          type="search"
          onInput={(e: any) => setFilters({
            ...filters,
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
          })}
          placeholder="Global Search"
          className="p-inputtext p-component border rounded-lg"
        />
      </span>
    </div>
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <DataTable
        value={products}
        paginator
        rows={10}
        filters={filters}
        filterDisplay="row"
        globalFilterFields={['code', 'name', 'category', 'quantity']}
        header={header}
        removableSort
        tableStyle={{ minWidth: '50rem' }}
        className="p-datatable-striped p-datatable-hover"
      >
        <Column
          field="code"
          header="Code"
          sortable
          filter
          filterPlaceholder="Search by code"
          style={{ width: '25%' }}
          className="text-gray-700"
        />
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search by name"
          style={{ width: '25%' }}
          className="text-gray-700"
        />
        <Column
          field="category"
          header="Category"
          sortable
          filter
          filterPlaceholder="Search by category"
          style={{ width: '25%' }}
          className="text-gray-700"
        />
        <Column
          field="quantity"
          header="Quantity"
          sortable
          filter
          filterPlaceholder="Search by quantity"
          style={{ width: '25%' }}
          className="text-gray-700"
        />
      </DataTable>
    </div>
  );
};

export default ProtectoraHome;
