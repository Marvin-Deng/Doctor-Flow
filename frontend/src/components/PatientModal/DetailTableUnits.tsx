import React from "react";

interface TableHeaderProps {
  title: string;
}

interface TableCellProps {
  content: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return (
    <th className="px-5 py-3 border-b-2 border-r border-gray-300 bg-teal-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {title}
    </th>
  );
};

const TableCell: React.FC<TableCellProps> = ({ content }) => {
  return (
    <td className="px-5 py-2 border-b border-r border-gray-300 bg-white text-sm">
      {content}
    </td>
  );
};

export { TableHeader, TableCell }
