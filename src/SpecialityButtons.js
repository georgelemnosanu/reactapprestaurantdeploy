import { css } from "@emotion/react";

const SpecialityButtons = ({ specialities, setSelectedSpeciality }) => {
  return (
    <div
    >
      {specialities.map((speciality) => (
        <button
          key={speciality.id}
          onClick={() => setSelectedSpeciality(speciality.name)}
        >
          <span>{speciality.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SpecialityButtons;