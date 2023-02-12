import './Main.scss';
import Button from '../../components/Btn/Button';

const Main = () => {
  return (
    <div className='mainPageWrapper'>
      <div className='mainPageWrapper-content'>
        <h1 className='mainPageWrapper-content_heading'>Test assignment for front-end developer</h1>
        <p className='mainPageWrapper-content_info'>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they&apos;ll be building web
          interfaces with accessibility in mind. They should also be excited to learn, as the world
          of Front-End Development keeps evolving.
        </p>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Main;
