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
                      • <strong>Color Theme:</strong> One Dark Pro / Tokyo Night
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
                    <p>
                      • <strong>Visual:</strong> Indent Rainbow, Bracket Pair
                      Colorizer
                    </p>
                  </div>
                  <div className="detail-section">
                    <p className="detail-label">Settings</p>
                    <p>• Auto-save: afterDelay (1000ms)</p>
                    <p>• Format on save enabled</p>
                    <p>• Tab size: 2 spaces</p>
                    <p>• Smooth scrolling & cursor blinking</p>
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
                      • <strong>Default Profile:</strong> PowerShell Core 7+
                    </p>
                    <p>
                      • <strong>Color Scheme:</strong> One Half Dark / Campbell
                      Powershell
                    </p>
                    <p>
                      • <strong>Font:</strong> Cascadia Code NF (Nerd Font)
                    </p>
                    <p>
                      • <strong>Appearance:</strong> Acrylic transparency at
                      80%, cursor shape: vintage
                    </p>
                  </div>
                  <div className="detail-section">
                    <p className="detail-label">PowerShell Customization</p>
                    <p>
                      • <strong>Prompt:</strong> Oh My Posh with
                      &apos;jandedobbeleer&apos; theme
                    </p>
                    <p>
                      • <strong>Modules:</strong> PSReadLine for syntax
                      highlighting
                    </p>
                    <p>
                      • <strong>Aliases:</strong> Custom shortcuts (ll, gs, gp,
                      gc)
                    </p>
                    <p>
                      • <strong>Auto-completion:</strong> Predictive
                      IntelliSense enabled
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
                          "Fira Code",
                          "Monospace with ligatures",
                          "Coding, clean & modern",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "JetBrains Mono",
                          "Geometric monospace",
                          "Long coding sessions",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Cascadia Code",
                          "Rounded monospace",
                          "Terminal & editor",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "MonoLisa",
                          "Humanist monospace",
                          "Reduced eye strain",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Comic Code",
                          "Playful monospace",
                          "Fun & casual coding",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Victor Mono",
                          "Cursive italics",
                          "Elegant & unique",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Dank Mono",
                          "Italic emphasis",
                          "Stylish coding",
                        ]}
                      />
                      <TableRow
                        cells={[
                          "Operator Mono",
                          "Script italics",
                          "Premium feel",
                        ]}
                      />
                    </tbody>
                  </table>
                  <p className="font-note">
                    <strong>Current Choice:</strong> Fira Code at size 14.
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
