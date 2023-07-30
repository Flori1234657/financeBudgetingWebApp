import React from "react";

const ShpenzimetList = () => {
  return (
    <ul aria-label="Expenses list item's">
      <li>
        <div aria-label="Visible group">
          <h4 aria-label="Descpt InshaaAllah">
            Descriptioni InshaaAllah shkone ketu
          </h4>
          <h4 aria-label="Day/Month/Year">DD/MM/VVVV</h4>
        </div>
        <ul aria-label="Hidden group">
          <li aria-label="Expensed amount">
            Shuma e shpenzuar: <span>1.234</span> <strong>LEK</strong>
          </li>
          <li aria-label="Expensed category">
            Kategoria <span>category</span>
          </li>
          <li aria-label="Tags">
            Etiketimet{" "}
            <ul>
              <li>TAG1</li>
              <li>TAG2</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ShpenzimetList;
