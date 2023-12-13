import title_img from './assets/title_img.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';

export default function Content() {
  
  return (
    <main className=" bg-green-50 w-full">
      <img className="w-full" src={title_img} alt="banner" />
      <div className="p-4">
        <h2 className="text-center text-[40px] text-green-800 mt-4">
          採光蔬果專賣
        </h2>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam
          ex numquam ad recusandae sunt nisi maiores? Saepe cupiditate impedit
          error quibusdam recusandae necessitatibus in aliquid quia, voluptatem,
          a officia.
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam
          ex numquam ad recusandae sunt nisi maiores? Saepe cupiditate impedit
          error quibusdam recusandae necessitatibus in aliquid quia, voluptatem,
          a officia. Lorem ipsum dolor sit amet elit.
        </p>
        <section className="border-t border-b border-black py-4 my-4">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <li>
              <div className="bg-pink-200 p-4 rounded-2xl">
                <img
                  className="mx-auto w-[200px] hover:opacity-80"
                  src={icon1}
                  alt="icon"
                />
                <h3 className="text-[24px] py-2 text-center">線上購物</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi accusantium tempora eum.
                </p>
                <a
                  href="#"
                  className="block mx-auto mt-4 py-2 max-w-[120px] bg-gray-800 text-white text-center hover:text-yellow-300"
                >
                  瞭解更多
                </a>
              </div>
            </li>
            <li>
              <div className="bg-yellow-200 p-4 rounded-2xl">
                <img
                  className="mx-auto w-[200px] hover:opacity-80"
                  src={icon2}
                  alt="icon"
                />
                <h3 className="text-[24px] py-2 text-center">產地直送</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi accusantium tempora eum.
                </p>
                <a
                  href="#"
                  className="block mx-auto mt-4 py-2 max-w-[120px] bg-gray-800 text-white text-center hover:text-yellow-300"
                >
                  瞭解更多
                </a>
              </div>
            </li>
            <li>
              <div className="bg-green-200 p-4 rounded-2xl">
                <img
                  className="mx-auto w-[200px] hover:opacity-80"
                  src={icon3}
                  alt="icon"
                />
                <h3 className="text-[24px] py-2 text-center">客服專線</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi accusantium tempora eum.
                </p>
                <a
                  href="#"
                  className="block mx-auto mt-4 py-2 max-w-[120px] bg-gray-800 text-white text-center hover:text-yellow-300"
                >
                  瞭解更多
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
      {/* <!-- Footer --> */}
      <footer className="bg-gray-800 text-center text-white py-4">
        <h2 className="text-3xl mt-2">GreenBody 有機蔬果</h2>
        <p className="text-xl mt-2">Copyright © 2023 </p>
      </footer>
    </main>
  );
}
