import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const ReactTable = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="border border-slate-400  bg-neutral-200">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-2 py-1 border border-slate-400">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {data !== null ? (
          data?.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-48 ">
                Please Add some data to the Table
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-2 border border-slate-400 text-base font-normal text-slate-700 "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )
        ) : (
          [...Array(10)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((_, index) => (
                <td key={index} className="p-2">
                  <span className=" max-w-full bg-slate-300 animate-pulse flex flex-wrap">
                    &nbsp;
                  </span>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ReactTable;
