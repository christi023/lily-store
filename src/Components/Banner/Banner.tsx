// style
import './Banner.css';

// props
type BannerProps = {
  title: string;
  subtitle: string;
  //children: React.ReactNode;
};
const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
    </div>
  );
};

export default Banner;
