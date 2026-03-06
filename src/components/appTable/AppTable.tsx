import type { Application } from "@/types";
import { Box, Button, Table } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./appTable.css";
import TimeRush from "../ui/TimeRush";
import StatusBadge from "../ui/StatusBadge";
import PharmacyTagName from "../ui/PharmacyTagName";
import TableCreatedAt from "../ui/TableCreatedAt";
import PriorityBadge from "../ui/PriorityBadge";

const columnHelper = createColumnHelper<Application>();

const columns = [
  columnHelper.accessor("number", {
    header: "№",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("pharmacy", {
    header: "Аптека",
    cell: (info) => (
      <PharmacyTagName id={info.getValue().id} name={info.getValue().address} />
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: "Создана",
    cell: (info) => <TableCreatedAt date={info.getValue()} />,
  }),
  columnHelper.accessor("priority", {
    header: "Приоритет",
    cell: (info) => <PriorityBadge priority={info.getValue()} />,
  }),
  columnHelper.accessor("theme", {
    header: "Тема",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category", {
    header: "Категория",
    cell: (info) => info.getValue().name,
  }),
  columnHelper.accessor("technician", {
    header: "Техник",
    cell: (info) => info.getValue().name,
  }),
  columnHelper.accessor("reactionTime", {
    header: "Реакция",
    cell: (info) => (
      <TimeRush time={info.getValue()} maxTime="05:00" minTime="3:00" />
    ),
  }),
  columnHelper.accessor("resolutionTime", {
    header: "Решение",
    cell: (info) => (
      <TimeRush time={info.getValue()} maxTime="02:00:00" minTime="1:00:00" />
    ),
  }),
  columnHelper.accessor("status", {
    header: "Статус",
    cell: (info) => (
      <StatusBadge id={info.getValue().id} name={info.getValue().name} />
    ),
  }),
];

interface Props {
  data: Application[];
}

export default function AppTable({ data }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <>
      <Table.Root size="sm" variant="line" native interactive>
        <thead className="app-table__header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="app-table__body">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table.Root>
      <Box display={"flex"} gap={"10px"} mt={"1rem"}>
        <Button
          variant={"outline"}
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          variant={"outline"}
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
      </Box>
    </>
  );
}
