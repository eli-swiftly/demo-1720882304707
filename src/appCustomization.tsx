import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, CheckSquare, DollarSign } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, client: 'Client A', amount: 5000, status: 'Pending' },
    { id: 2, client: 'Client B', amount: 7500, status: 'Paid' },
    { id: 3, client: 'Client C', amount: 3000, status: 'Overdue' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.client}</td>
              <td>£{invoice.amount.toLocaleString()}</td>
              <td>{invoice.status}</td>
              <td>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Process
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PropertyOccupationComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Property A', status: 'Vacant', nextAction: 'Occupy', dueDate: '2023-07-15' },
    { id: 2, name: 'Property B', status: 'Occupied', nextAction: 'Vacate', dueDate: '2023-08-01' },
    { id: 3, name: 'Property C', status: 'Vacant', nextAction: 'Occupy', dueDate: '2023-07-20' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Occupation Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.dueDate}</td>
              <td>
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Group - Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Manage client invoices",
        icon: FileText
      },
      {
        id: "propertyOccupation",
        label: "Property Occupation",
        description: "Manage property occupation cycles",
        icon: Home
      },
    ] as TabConfig[],
    charts: {
      invoiceStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8", "#C7D2FE"],
        data: [
          { name: 'Paid', value: 60 },
          { name: 'Pending', value: 30 },
          { name: 'Overdue', value: 10 },
        ]
      },
      propertyStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#4F46E5"],
        data: [
          { name: 'Vacant', count: 5 },
          { name: 'Occupied', count: 3 },
          { name: 'Pending Action', count: 2 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#4F46E5"],
        data: [
          { year: '2020', growth: 100 },
          { year: '2021', growth: 200 },
          { year: '2022', growth: 400 },
          { year: '2023', growth: 800 },
        ]
      },
    }
  },
  clients: [
    { id: "clientA", name: "Client A", industry: "Retail" },
    { id: "clientB", name: "Client B", industry: "Office" },
    { id: "clientC", name: "Client C", industry: "Industrial" },
  ],
  features: {
    invoiceProcessing: true,
    propertyOccupationManagement: true,
    dataImport: true,
    analytics: true,
    reporting: true,
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  invoiceProcessing: InvoiceProcessingComponent,
  propertyOccupation: PropertyOccupationComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  propertyStatuses: ['Vacant', 'Occupied', 'Pending Action'],
  occupationCycleDuration: 3, // months
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};