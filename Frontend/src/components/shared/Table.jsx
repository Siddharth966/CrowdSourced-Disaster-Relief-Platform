import React from "react";

const Table = ({ headers = [], data = [], actions = {} }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
      <table className="min-w-full bg-white border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-blue-600 text-white">
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-4 text-left border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b">
                    {header === "Action" && actions[rowIndex] ? (
                      actions[rowIndex]() // Call the action function
                    ) : (
                      row[header] !== undefined ? row[header] : "-"
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="text-center py-4 text-gray-500 border-b"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
