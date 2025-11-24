import React from "react";
import "../App.css";
import { TableRow } from "../components/Table/TableRow";
import { TableFooter } from "../components/Table/TableFooter";
import { TableCell } from "../components/Table/TableCell";

const Setup = () => {
  return (
    <div className="setup-page">
      <h1 className="page-title">Developer Setup</h1>

      <div className="setup-intro">
        <p className="setup-description">
          Here&apos;s a peek into my development environment! These are the
          essentials that power my workflow.
        </p>
      </div>

      <div className="setup-table-wrapper">
        <table className="setup-table">
          <thead>
            <tr>
              <th className="setup-th">Category</th>
              <th className="setup-th">Details</th>
            </tr>
          </thead>

          <tbody>
            {/* VSCode Setup Row */}
            <tr>
              <TableCell>
                <div className="setup-category">
                  <span className="category-name">VSCode Setup</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="setup-details-content">
                  <div className="detail-section">
                    <p className="detail-label">Theme & Appearance</p>
                    <p>
                      • <strong>Color Theme:</strong> Cute Pink Light Theme
                    </p>
                    <p>
                      • <strong>Icon Theme:</strong> Material Icon Theme
                    </p>
                    <p>
                      • <strong>UI:</strong> Activity Bar on left, Minimap
                      disabled for cleaner view
                    </p>
                  </div>
                  <div className="detail-section">
                    <p className="detail-label">Extensions</p>
                    <p>
                      • <strong>Code Quality:</strong> Prettier, ESLint, Error
                      Lens
                    </p>
                    <p>
                      • <strong>Productivity:</strong> Auto Rename Tag, Live
                      Server, GitLens
                    </p>
                  </div>
                  <div className="detail-section">
                    <p className="detail-label">Settings</p>
                    <p>• Auto-save enabled</p>
                    <p>• Format on save</p>
                    <p>• Tab size: 2 spaces</p>
                  </div>
                </div>
              </TableCell>
            </tr>

            {/* Terminal Setup Row */}
            <tr>
              <TableCell>
                <div className="setup-category">
                  <span className="category-name">Terminal Setup</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="setup-details-content">
                  <div className="detail-section">
                    <p className="detail-label">Windows Terminal</p>
                    <p>
                      • <strong>Default Profile:</strong> Windows Terminal or
                      Powershell Core
                    </p>
                    <p>
                      • <strong>Color Scheme:</strong> One Half Dark / Campbell
                    </p>
                    <p>
                      • <strong>Font:</strong> Cascadia Code or Fira Code
                    </p>
                    <p>
                      • <strong>Cursor Style:</strong> Block or Vintage
                    </p>
                  </div>

                  <div className="detail-section">
                    <p className="detail-label">Additional Profiles</p>
                    <p>• Git Bash for Unix-style commands</p>
                    <p>• WSL Ubuntu for Linux environment</p>
                  </div>
                </div>
              </TableCell>
            </tr>

            {/* Fonts Row */}
            <tr>
              <TableCell>
                <div className="setup-category">
                  <span className="category-name">Preferred Editor Fonts</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="setup-details-content">
                  <table className="fonts-table">
                    <thead>
                      <tr>
                        <th>Font Name</th>
                        <th>Style</th>
                        <th>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRow
                        cells={[
                          "Roboto",
                          "Sans-serif",
                          "Versatile, clean & readable for all coding",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Lato",
                          "Sans-serif",
                          "Lightweight and modern, good for long coding sessions",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Montserrat",
                          "Sans-serif",
                          "Stylish headings and readable code",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Sour Gummy",
                          "Display / Sans-serif",
                          "Fun, playful, casual coding",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Open Sans",
                          "Sans-serif",
                          "Clean and simple, great for readability",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Poppins",
                          "Geometric Sans-serif",
                          "Modern look, minimal and clean",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Raleway",
                          "Sans-serif",
                          "Elegant, professional coding style",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Nunito",
                          "Sans-serif",
                          "Rounded, friendly look for casual projects",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Inter",
                          "Sans-serif",
                          "Highly legible, optimized for screens",
                        ]}
                      />
                    </tbody>
                  </table>
                  <p className="font-note">
                    <strong>Current Choice:</strong> Quicksand at size
                    48px/3rem.
                  </p>
                </div>
              </TableCell>
            </tr>
          </tbody>

          <TableFooter colSpan={2}>
            <div className="setup-footer-content">
              <p>Recommended Setup for Front-End Development</p>
              <p className="footer-note">
                Constantly tweaking to find the perfect workflow!
              </p>
            </div>
          </TableFooter>
        </table>
      </div>
    </div>
  );
};

export default Setup;
