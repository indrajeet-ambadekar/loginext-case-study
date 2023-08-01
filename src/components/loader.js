const ReqLoader = ({ ...props }) => {
  return (
    <div className='tiny-api-loader'>
      <div className='loader-container'>
        <div className='loader'>
          <div className='square one'></div>
          <div className='square two'></div>
        </div>
      </div>
    </div>
  );
};
export default ReqLoader;
