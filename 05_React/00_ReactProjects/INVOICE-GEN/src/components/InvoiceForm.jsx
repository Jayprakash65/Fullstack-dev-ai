import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "react-datepicker/dist/react-datepicker.css";

const InvoiceForm = () => {
  const [logo, setLogo] = useState(null);
  const [companyInfo, setCompanyInfo] = useState({ name: "", details: "" });
  const [clientInfo, setClientInfo] = useState({ name: "", details: "" });
  const [items, setItems] = useState([{ description: "", quantity: 1, rate: 0 }]);
  const [tax, setTax] = useState(10);
  const [discount, setDiscount] = useState({ type: "percentage", value: 0 });
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("en");
  const [invoices, setInvoices] = useState([]);
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0]); 
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

  const languageOptions = {
    en: {
      invoice: "Invoice",
      subtotal: "Sub Total",
      tax: "Tax",
      discount: "Discount",
      total: "Total",
      dueDate: "Due Date",
      terms: "Terms & Conditions",
      save: "Save Invoice",
      generatePDF: "Generate PDF",
      exportJSON: "Export JSON",
      importJSON: "Import JSON",
      recipient: "Billed To",
      companyInfo: "Company Information",
    },
    es: {
      invoice: "Factura",
      subtotal: "Subtotal",
      tax: "Impuesto",
      discount: "Descuento",
      total: "Total",
      dueDate: "Fecha de Vencimiento",
      terms: "Términos y Condiciones",
      save: "Guardar Factura",
      generatePDF: "Generar PDF",
      exportJSON: "Exportar JSON",
      importJSON: "Importar JSON",
      recipient: "Facturado A",
      companyInfo: "Información de la Empresa",
    },
  };

  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(savedInvoices);
  }, []);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () =>
    setItems([...items, { description: "", quantity: 1, rate: 0 }]);

  const removeItem = (index) =>
    setItems(items.filter((_, i) => i !== index));

  const calculateTotal = () => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const taxAmount = (subtotal * tax) / 100;
    const discountAmount =
      discount.type === "percentage"
        ? (subtotal * discount.value) / 100
        : discount.value;
    return { subtotal, taxAmount, discountAmount, total: subtotal + taxAmount - discountAmount };
  };

  const { subtotal, taxAmount, discountAmount, total } = calculateTotal();

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text(languageOptions[language].invoice, 10, 10);
    doc.save("invoice.pdf");
  };

  const saveInvoice = () => {
    const newInvoice = {
      logo,
      companyInfo,
      clientInfo,
      items,
      tax,
      discount,
      currency,
      date: new Date().toLocaleDateString(),
      total,
    };
    const updatedInvoices = [...invoices, newInvoice];
    setInvoices(updatedInvoices);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    alert("Invoice saved successfully!");
  };

  const loadInvoice = (index) => {
    const invoice = invoices[index];
    setLogo(invoice.logo);
    setCompanyInfo(invoice.companyInfo);
    setClientInfo(invoice.clientInfo);
    setItems(invoice.items);
    setTax(invoice.tax);
    setDiscount(invoice.discount);
    setCurrency(invoice.currency);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <label className="block text-sm font-medium mb-2">Upload Logo:</label>
          <input type="file" onChange={handleLogoUpload} className="border p-2 w-full rounded" />
          {logo && <img src={logo} alt="Logo" className="mt-2 h-20 object-contain" />}
        </div>
        <div className="w-1/3 text-center">
          <h2 className="text-2xl font-bold">{languageOptions[language].invoice}</h2>
        </div>
        <div className="w-1/3 text-right">
          <div className="mb-2">
            <label className="block text-sm font-medium">Invoice Date:</label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{languageOptions[language].dueDate}:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      </div>
  
      {/* Company and Client Info */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-bold">{languageOptions[language].companyInfo}</h3>
          <textarea
            placeholder="Add your company details"
            value={companyInfo.details}
            onChange={(e) => setCompanyInfo({ ...companyInfo, details: e.target.value })}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div>
          <h3 className="text-lg font-bold">{languageOptions[language].recipient}</h3>
          <textarea
            placeholder="Add invoice recipient details"
            value={clientInfo.details}
            onChange={(e) => setClientInfo({ ...clientInfo, details: e.target.value })}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
      </div>
  
      {/* Currency and Language Selection */}
      <div className="flex justify-between mb-6">
        <div>
          <label className="block mb-2 font-bold">Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
  
      {/* Items Table */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Item Description</th>
              <th className="border p-2 text-right">Qty</th>
              <th className="border p-2 text-right">Rate</th>
              <th className="border p-2 text-right">Amount</th>
              <th className="border p-2"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    className="w-full p-2"
                  />
                </td>
                <td className="border p-2 text-right">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
                    className="w-full text-right p-2"
                  />
                </td>
                <td className="border p-2 text-right">
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", parseFloat(e.target.value))}
                    className="w-full text-right p-2"
                  />
                </td>
                <td className="border p-2 text-right">
                  {(item.quantity * item.rate).toFixed(2)}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Add new row
        </button>
      </div>
  
      {/* Discount and Totals */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold">{languageOptions[language].discount}:</h3>
          <div className="flex items-center mb-2">
            <select
              value={discount.type}
              onChange={(e) => setDiscount({ ...discount, type: e.target.value })}
              className="p-2 border rounded mr-2"
            >
              <option value="percentage">Percentage</option>
              <option value="flat">Flat</option>
            </select>
            <input
              type="number"
              value={discount.value}
              onChange={(e) => setDiscount({ ...discount, value: parseFloat(e.target.value) })}
              className="p-2 border rounded w-20"
            />
          </div>
        </div>
      </div>
  
      <div className="text-right">
        <p className="mb-2">{languageOptions[language].subtotal}: {subtotal.toFixed(2)}</p>
        <p className="mb-2">{languageOptions[language].tax} ({tax}%): {taxAmount.toFixed(2)}</p>
        <p className="mb-2">{languageOptions[language].discount}: {discountAmount.toFixed(2)}</p>
        <p className="font-bold">{languageOptions[language].total}: {total.toFixed(2)}</p>
      </div>
  
      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={saveInvoice}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {languageOptions[language].save}
        </button>
        <button
          onClick={generatePDF}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {languageOptions[language].generatePDF}
        </button>
      </div>
    </div>
  );
}
export default InvoiceForm;
