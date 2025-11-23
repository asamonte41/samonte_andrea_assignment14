import React from "react"; // React in scope for JSX
import { TableRow } from "../components/Table/TableRow";
import { TableCell } from "../components/Table/TableCell";
import { TableFooter } from "../components/Table/TableFooter";

const Setup: React.FC = () => {
  return (
    <section className="section">
      <h2>Developer Environment</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <TableCell isHeader>Tool</TableCell>
            <TableCell isHeader>Description</TableCell>
          </tr>
        </thead>

        <tbody>
          <TableRow
            cells={["VSCode", "Extensions: Prettier, ESLint, Dark Theme"]}
          />
          <TableRow cells={["Terminal", "Windows Terminal / PowerShell"]} />
          <TableRow cells={["Editor Font", "Fira Code, Size 14"]} />
        </tbody>

        <TableFooter colSpan={2}>
          <div style={{ textAlign: "center" }}>
            Recommended Setup for Front-End Development
          </div>
        </TableFooter>
      </table>
    </section>
  );
};

export default Setup;
