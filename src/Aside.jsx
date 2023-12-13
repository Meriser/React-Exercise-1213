import logo from './assets/logo.png';
import left_bg from './assets/left_bg.png';

export default function Aside() {
  return (
    <>
      <nav
        className="text-center bg-bottom bg-contain bg-no-repeat bg-green-900 p-4 pb-[160px] md:w-[300px] pb-0"
        style={{backgroundImage: `url(${left_bg})`}}
      >
        <h1>
          <a href="#">
            <img
              className="w-[150px] mx-auto"
              src={logo}
              alt="logo"
            />
          </a>
        </h1>
        <ul className="mt-8">
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              首頁
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              最新消息
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              關於我們
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              產地直送
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              友善園地
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              線上訂購
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 border-b border-white text-white hover:text-yellow-300"
              href="#"
            >
              聯絡我們
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
