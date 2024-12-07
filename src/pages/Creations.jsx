import { Creation } from "../Components/Creation";

export const Creations = () => {
  return (
    <section className="creation_section">
      <h2 className="creations_title">Our creations</h2>
      <button className="all_button"> See all </button>
      <div className="creation_grid">
        <Creation />
      </div>
    </section>
  );
};
