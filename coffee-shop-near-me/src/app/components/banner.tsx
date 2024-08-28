"use client";
interface ButtonProps {
  buttonText: string;
}
const Banner: React.FC<ButtonProps> = ({ buttonText }) => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="mb-24 relative lg:text-left">
      <h1 className="heading">
        <span className="text-white-900">Coffee </span>
        <span className="block text-purple xl:inline">Connoisseur</span>
      </h1>
      <p className="subtitles">Discover coffee shops nearby!</p>
      <div className="mt-5 sm:flex sm:mt-8 lg:flex lg:justify-start">
        <button className="custom-button" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default Banner;
