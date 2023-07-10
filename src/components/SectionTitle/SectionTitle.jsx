const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="section__title">
      <h1 className="md__heading">{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
