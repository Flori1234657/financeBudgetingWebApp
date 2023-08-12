import React from "react";

const Form = () => {
  return (
    <form>
      <h2>Shto shpenzim</h2>
      <div aria-label="amount group">
        <label htmlFor="shumaInp" aria-label="Amount">
          Shuma
        </label>
        <input type="number" placeholder="0" id="shumaInp" />
        <h5>Error</h5>
      </div>
      <div aria-label="category group">
        <label htmlFor="katgoriaSelc" aria-label="Category">
          Kategoria
        </label>
        <select id="katgoriaSelc">
          <option value="ushqimore">Ushqimore</option>
          <option value="higjenike">Higjenike</option>
          <option value="veshje">Veshje</option>
        </select>
        <h5>Error</h5>
      </div>
      <div aria-label="calendar group">
        <label htmlFor="" aria-label="Date">
          Data
        </label>
        <input type="date" name="" id="" />
        {/* Calendar Component InshaaAllah */}
        <h5>Error</h5>
      </div>
      <div aria-label="tags group">
        <label htmlFor="tagInp" aria-label="Tag">
          Etiketimi
        </label>
        <input type="text" id="tagInp" placeholder="Tag's" />
        <h5>Error ju lutem mos eb</h5>
      </div>
      <div aria-label="description group">
        <label htmlFor="txtAreInp" aria-label="Description">
          Përshkrimi
        </label>
        <textarea
          name="A small expense description"
          id="txtAreInp"
          cols={30}
          rows={5}
          aria-placeholder="Write something to remember your expense"
          placeholder="Shkruaj diçka për ta njohur ktë shpenzim"
        ></textarea>
        <h5>Error</h5>
      </div>
      <button type="submit" aria-label="submit">
        KONFIRMO
      </button>
    </form>
  );
};

export default Form;
