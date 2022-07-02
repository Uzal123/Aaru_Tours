import React from 'react';
import Btn from "../public/components/button";
import Image from 'next/image'

function index() {
  return (
    <div>
      <div className="bg-img w-screen h-screen">
        <div className="navbar w-full flex justify-between">
          <div className="p-4">
            <a className="text-3xl text-white font-bold">Aaru Tours</a>
          </div>
          <ul className="sm:flex gap-10 px-8 py-4 items-center hidden">
            <li>
              <a className=" active  cursor-pointer">Home</a>
            </li>
            <li>
              <a className=" rounde hover:text-red-500 cursor-pointer">Tours</a>
            </li>
            <li>
              <a className=" hover:text-red-500 cursor-pointer">Explore</a>
            </li>
            <li>
              <a className=" hover:text-red-500 cursor-pointer">About</a>
            </li>
            <li>
              <a className=" hover:text-red-500 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
        <div className=" flex w-screen h-full justify-center items-center">
          <div>
            <p className="text-white text-2xl text-center">
              Explore The Beautiful World !
            </p>
            <div className="flex justify-center py-4">
              <div className="bg-red-500 h-1 w-1/3 rounded-full"></div>
            </div>
            <p className="text-white text-5xl text-center">
              A Wonderful Journey Awaits
            </p>
            <Btn>Learn More</Btn>
          </div>
        </div>
        <div className="w-screen h-screen">
          <div>
            <div className="flex justify-center">
              <h2 className="text-4xl p-8 font-bold">Upcoming Event</h2>
            </div>
            <div className="flex justify-center">
              <div className="bg-red-500 h-1 w-1/4 rounded-full"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 upcomig-items gap-6 p-14 lg:px-36">
            <div className="">
              <div className="flex justify-center">
                <picture>
                  <img
                    className="w-full lg:h-72 h-64 object-cover hover:scale-105 duration-500 "
                    src="/img1.png"
                    alt="Picture"
                  />
                </picture>
              </div>

              <h2 className="text-center p-2 font-bold text-xl">
                Everest Camp Trek
              </h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias culpa perspiciatis consequuntur dignissimos voluptatum
                eligendi! Dolores, perspiciatis? Quod inventore explicabo
                architecto quas laborum rem nobis, eos officia eveniet quia
                vero!
              </p>
              <Btn>Learn More</Btn>
            </div>
            <div>
              <div className="flex justify-center">
                <picture>
                  <img
                    className="w-full lg:h-72 h-64 object-cover hover:scale-105 duration-500 "
                    src="/img2.png"
                    alt="picture"
                  />
                </picture>
              </div>

              <h2 className="text-center p-2 font-bold text-xl">
                Walking Holidays
              </h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias culpa perspiciatis consequuntur dignissimos voluptatum
                eligendi! Dolores, perspiciatis? Quod inventore explicabo
                architecto quas laborum rem nobis, eos officia eveniet quia
                vero!
              </p>
              <Btn>Learn More</Btn>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen bg-img1">
          <div className="w-3/4 pt-60">
            <p className="text-center text-6xl text-white">Explore the World</p>
            <div className="flex justify-center py-4">
              <div className="bg-red-500 h-1 w-1/3 rounded-full"></div>
            </div>
            <p className="text-center text-white px-44 pt-20 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              provident sed quia maiores dicta eligendi, fuga voluptates
              reiciendis nesciunt, excepturi nisi. Rem assumenda eaque doloribus
              laudantium autem aspernatur, maxime perspiciatis?
            </p>
            <Btn>Learn More</Btn>
          </div>
        </div>

        <div className="flex h-screen w-screen">
          <div className="w-1/2">
            <h2 className="text-center pt-20 text-6xl font-bold">
              Upcoming Tours & Destination
            </h2>
            <div className="flex justify-center py-4">
              <div className="bg-red-500 h-1 w-1/3 rounded-full"></div>
            </div>
            <p className="text-center px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsa quisquam quas dolor nulla repudiandae a, rerum sit vero
              corrupti velit blanditiis quidem nostrum tenetur numquam laborum,
              obcaecati fuga consequatur!
            </p>
            <Btn>Learn More</Btn>
          </div>
          <div className="w-1/2">
            <picture className="grid grid-cols-2 pt-20 px-20 gap-3">
              <img
                className="object-cover w-full h-full hover:scale-110 duration-700"
                src="/img3.png"
                alt="Picture"
              />
              <img
                className="object-cover w-full h-full hover:scale-110 duration-700"
                src="/img4.png"
                alt="Picture"
              />
              <img
                className="object-cover w-full h-full hover:scale-110 duration-700"
                src="/img5.png"
                alt="Picture"
              />
              <img
                className="object-cover w-full h-full hover:scale-110 duration-700"
                src="/img6.png"
                alt="Picture"
              />
            </picture>

            <div className="flex px-20 pt-3 gap-3"></div>
          </div>
        </div>
      </div>
      {/* <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
     async /> */}
    </div>
  );
}

export default index