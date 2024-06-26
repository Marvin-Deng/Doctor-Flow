"use client";
import React, { useCallback } from "react";
import Medication from "../../types/Med";
import { Row } from "@tanstack/react-table";
import InputForm from "../units/InputForm";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

interface MedTableProps {
  medData: Medication[];
  isEditMode: boolean;
}

const MedTable: React.FC<MedTableProps> = ({ medData, isEditMode }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

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

  const handleValueChange = useCallback(
    (rowId: number, columnId: string, value: any) => {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.id === rowId) {
            return { ...item, [columnId]: value };
          }
          return item;
        })
      );
    },
    []
  );

  const columns = React.useMemo<ColumnDef<Medication>[]>(
    () => [
      {
        accessorKey: "id",
        header: () => <div className="text-gray-500 uppercase text-xs">ID</div>,
        cell: (info) => (
          <div className="text-sm">{(info.getValue() as string) || ""}</div>
        ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "rx",
        header: () => (
          <div className="text-gray-500 uppercase text-xs w-20">Rx</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter rx"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(info.row.original.id, "rx", e.target.value)
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "dose",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Dose</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Dose"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(info.row.original.id, "dose", e.target.value)
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "unit",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Unit</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Unit"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(info.row.original.id, "unit", e.target.value)
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "condition",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Condition</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Condition"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(
                  info.row.original.id,
                  "condition",
                  e.target.value
                )
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "notes",
        header: () => (
          <div className="text-gray-500 uppercase text-xs w-30">Notes</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Notes"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(info.row.original.id, "notes", e.target.value)
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "prescriber",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Prescriber</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Prescriber"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(
                  info.row.original.id,
                  "prescriber",
                  e.target.value
                )
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "pharmacy",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Pharmacy</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter Pharmacy"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(
                  info.row.original.id,
                  "pharmacy",
                  e.target.value
                )
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "schedule",
        header: () => (
          <div className="text-gray-500 uppercase text-xs">Schedule</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter schedule"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(
                  info.row.original.id,
                  "schedule",
                  e.target.value
                )
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "drp",
        header: () => (
          <div className="text-gray-500 uppercase text-xs w-52">DRP</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter a DRP"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(info.row.original.id, "drp", e.target.value)
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
      {
        accessorKey: "summary",
        header: () => (
          <div className="text-gray-500 uppercase text-xs w-52">Summary</div>
        ),
        cell: (info) =>
          isEditMode ? (
            <InputForm
              type="text"
              placeholder="Enter a summary"
              value={(info.getValue() as string) || ""}
              onChange={(e) =>
                handleValueChange(
                  info.row.original.id,
                  "summary",
                  e.target.value
                )
              }
            />
          ) : (
            <div className="text-sm">{(info.getValue() as string) || ""}</div>
          ),
        sortingFn: defaultSortFn,
      },
    ],
    [isEditMode, handleValueChange]
  );

  const [data, setData] = React.useState(medData);
  const refreshData = () => setData(() => medData);

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
      <h2 className="text-xl font-bold mb-2">Medications List</h2>
      <table className="w-full border-collapse border border-gray-300">
      
        <thead className="bg-teal-100 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="border border-gray-300 p-3 text-left font-bold"
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
                          asc: "↑",
                          desc: "↓",
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
