import ReactLoading from 'react-loading'
const Loading = () => {
  return (
    <div className='vh-100 wv-100 d-flex align-items-center justify-content-center'>
      <ReactLoading type="bars" color='#0d6efd'/>
    </div>
  );
};

export default Loading;
