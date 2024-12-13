import BannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className=" hero   bg-base-200 min-h-[600px]" style={{backgroundImage: `url(${BannerImg})`}}>
     <h1>hello</h1>
      </div>
    );
};

export default Banner;