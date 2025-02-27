import React from "react";

function Banner() {
  return (
    <div className="w-full h-[75%] relative">
      <video
        className="w-full h-full object-cover opacity-80" 
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src="https://media-hosting.imagekit.io//5345e8d45d4f48fd/uri_ifs___V_qI7b9jpU4vQggmlFKbeWOJnsAS8gMGRYNc6NPaQOhag%20-%20ROTATE%20-%20Videobolt.net.mp4?Expires=1831720461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=La-2xvl7Z8omETg9Yk3OrmF12yPlktYcyEdbprz~ifJ5exkJImRqH~Xvctwlomm9LeRJdL~CBMgnaoSCzlmgs3atPBn-Sr7uOv6J2nX75G8Z2lZCgbh5IDcLB3~swf2RaQe3SoblmDd6G~EdIUt2YPZGmsyL3SlqXog0VGhyGoEgqPv4ESD47-hwOq9lE-IotcJkdwleK3Pule~iUFH6cyKCS3SET2r4HydRqzjm1oJS9UOju5HkbuDhmdX0-4iO0PvlXw-R4ZoEoqhq7w1L7YLd-BpGN2H1pQUy6nRjna546vfjAr3MGY6h8ZOWB-1nqm1TbFHpWc9OTI~kmOJXqg__"/>
      </video>
    </div>
  );
}

export default Banner;
