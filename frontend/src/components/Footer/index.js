import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__text-container'>
        <p className='footer__text'>Designed and created by Zachary Duvall</p>
        <button
          onClick={() =>
            (window.location = 'https://www.linkedin.com/in/zachary-duvall/')
          }
        >
          <i
            title='https://www.linkedin.com/in/zachary-duvall/'
            className='fab fa-linkedin fa-lg footer__icon'
          ></i>
        </button>
        <button
          onClick={() => (window.location = 'https://github.com/zduvall')}
        >
          <i
            title='https://github.com/zduvall'
            className='fab fa-github-square fa-lg footer__icon'
          ></i>
        </button>
      </div>
    </footer>
  );
}
