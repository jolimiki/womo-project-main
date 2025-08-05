const SkeletonCardGroup = () => (
  <>
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="col col-md-4 px-3 mb-4">
        <div className="bg-light rounded-3 p-5 placeholder-glow" style={{ height: 200 }}>
          <div className="placeholder col-6 mb-2"></div>
          <div className="placeholder col-4"></div>
        </div>
      </div>
    ))}
  </>
);

export default SkeletonCardGroup;
