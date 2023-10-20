import { css } from "@emotion/react";

const SpecialityButtons = ({ specialities, setSelectedSpeciality }) => {
  return (
    <div
      // className="SpecialityButtons"
  //     css={css`
  //       display: flex;

  //       button {
  //         background: transparent;
  // border: none;
  // font-size: 1rem;
  // text-transform: capitalize;
  // margin: 0 0.5rem;
  // letter-spacing: 1px;
  // padding: 0.375rem 0.75rem;
  // color: var(--clr-gold);
  // cursor: pointer;
  // transition: var(--transition);
  // border-radius: var(--radius);
  //         }

  //         span {
  //           padding: 0 5px;
  //           font-family: "Poppins", sans-serif;
  //           font-weight: 600;
  //           font-size: 1rem;
  //         }
  //       }
  //     `}
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