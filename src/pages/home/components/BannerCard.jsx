import styles from '../../../styles/css/home.module.css'
const BannerCard = ({ bannerInfo }) => {
  return (
    <div className={`${styles.banner} ${bannerInfo.color} grid grid-cols-2 gap-5 relative z-1  rounded-xl p-11 before:absolute before:inset-0 before:opacity-5 before:bg-cover before:-z-1`} >
      <div className='col-span-2 md:col-span-1 max-md:text-center'>
        <h2 className='text-xl md:text-2xl lg:text-3xl mb-5 lg:mb-10 font-medium'>{bannerInfo.title}</h2>
        <button className='bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600' >خرید همین حالا</button>
      </div>
      <div className='col-span-2 md:col-span-1'>
        <img src={bannerInfo.img} alt={bannerInfo.img} />
      </div>
    </div>

  );
};

export default BannerCard;
