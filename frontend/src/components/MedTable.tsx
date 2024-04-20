"use client";
import React from "react";
import Medication from "../types/Med";
import { Row } from "@tanstack/react-table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

const createMedicineData = () => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      rx: `Medicine Name ${index + 1}`,
      dose: 10 * (index + 1),
      unit: "mg",
      condition: index % 2 === 0 ? "Condition A" : "Condition B",
      prescriber: `Dr. Prescriber ${index + 1}`,
      pharmacy: `Pharmacy ${index + 1}`,
      notes: index % 2 === 0 ? "Note for even index" : undefined,
    }));
};

const defaultSortFn: SortingFn<Medication> = (
  rowA: Row<Medication>,
  rowB: Row<Medication>,
  columnId: string
) => {
  const rawValueA = rowA.getValue(columnId);
  const rawValueB = rowB.getValue(columnId);

  if (rawValueA == null && rawValueB == null) {
    return 0;
  } else if (rawValueA == null) {
    return 1;
  } else if (rawValueB == null) {
    return -1;
  }

  if (typeof rawValueA === "string" && typeof rawValueB === "string") {
    return rawValueA.localeCompare(rawValueB);
  } else if (typeof rawValueA === "number" && typeof rawValueB === "number") {
    return rawValueA - rawValueB;
  }

  return String(rawValueA).localeCompare(String(rawValueB));
};

const MedTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<Medication>[]>(
    () => [
      {
        accessorKey: "id",
        header: () => "ID",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "rx",
        header: () => "Medication",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "dose",
        header: () => "Dose",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "unit",
        header: () => "Unit",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "condition",
        header: () => "Condition",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "prescriber",
        header: () => "Prescriber",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "pharmacy",
        header: () => "Pharmacy",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "notes",
        header: () => "Notes",
        cell: (info) => info.getValue(),
        sortingFn: defaultSortFn,
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
      <div className="h-2" />
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
