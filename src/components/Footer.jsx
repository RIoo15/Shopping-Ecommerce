import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/* store information */}
        <h1 className="text-[25px]">HASHIM IS THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repellendus autem tempore eligendi voluptas unde voluptatibus
          obcaecati deleniti, numquam odio repudiandae sit. Et quisquam odio
          quas unde hic deleniti illo!
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialStyle + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialStyle + " bg-sky-400"}>
            <Twitter />
          </div>
          <div className={socialStyle + " bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2">
        {/* contact information */}

        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">State Of California</p>
        </div>

        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">0336-5517220</p>
        </div>

        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">hashim74100@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
