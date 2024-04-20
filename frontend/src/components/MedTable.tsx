"use client";
import React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Mock data
const createMedicineData = () => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      medicineName: `Medicine Name ${index + 1}`,
      dosage: `${10 * (index + 1)}mg`,
      prescriber: `Dr. Prescriber ${index + 1}`,
      pharmacy: `Pharmacy ${index + 1}`,
    }));
};

type Medicine = {
  medicineName: string;
  dosage: string;
  prescriber: string;
  pharmacy: string;
};

const sortStatusFn: SortingFn<Medicine> = (rowA, rowB, _columnId) => {
  const statusA = rowA.original.medicineName;
  const statusB = rowB.original.medicineName;
  const statusOrder = ["single", "complicated", "relationship"];
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
};

const MedTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<Medicine>[]>(
    () => [
      {
        accessorKey: "medicineName",
        header: () => "Medicine Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "dosage",
        header: () => "Dosage",
        cell: (info) => info.getValue(),
        sortDescFirst: true,
      },
      {
        accessorKey: "prescriber",
        header: () => "Prescriber",
        cell: (info) => info.getValue(),
        sortUndefined: "last",
      },
      {
        accessorKey: "pharmacy",
        header: () => "Pharmacy",
        cell: (info) => info.getValue(),
        sortUndefined: "last",
      },
    ],
    []
  );

  const [data, setData] = React.useState(() => createMedicineData());
  const refreshData = () => setData(() => createMedicineData());

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div className="p-2">
      <div className="h-2" />{" "}
      {/* This div seems to be used for spacing, ensure it's needed */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="border border-gray-300 p-2 text-left font-bold"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : ""
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === "asc"
                              ? "Sort ascending"
                              : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="border border-gray-300 p-2 text-left"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MedTable;
