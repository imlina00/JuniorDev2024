import React from 'react';

interface FilterFormProps {
  filterKriterij: string;
  setFilterKriterij: React.Dispatch<React.SetStateAction<string>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ filterKriterij, setFilterKriterij }) => {
  return (
    <div>
      <label htmlFor="filter">Filtriraj po vrsti:</label>
      <select id="filter" value={filterKriterij} onChange={(e) => setFilterKriterij(e.target.value)}>
        <option value="">Svi komadi</option>
        <option value="Traperice">Traperice</option>
        <option value="Gornji dio">Gornji dio</option>
      </select>
    </div>
  );
}

export default FilterForm;
