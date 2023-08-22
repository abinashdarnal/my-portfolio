import React from "react";
function Skill() {
  return (
    <>
      <div
        id="skill"
        className="flex justify-center sm:mx-[80px] mx-[20px] my-8 "
      >
        <div className="max-w-[1040px]">
          <div>
            <h1 className="flex justify-center text-red-600 text-2xl font-bold mb-4">
              My Skills
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            <div className="box-shadow p-12 rounded-2xl">
              <img
                src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000"
                alt=""
              />
            </div>
            <div className="box-shadow p-12 rounded-2xl">
              <img
                src="https://img.freepik.com/free-icon/css_318-698167.jpg?t=st=1692682455~exp=1692683055~hmac=aa6969c11784f0c9561ee7d0c47971d53284185a1d69407f83b9669f8b1c8c9c"
                alt=""
              />
            </div>
            <div className="box-shadow p-12 rounded-2xl">
              <img
                src="https://img.freepik.com/free-icon/javascript_318-698169.jpg?size=626&ext=jpg&ga=GA1.2.1916039620.1686015663&semt=ais"
                alt=""
              />
            </div>
            <div className="box-shadow p-12 rounded-2xl  flex justify-center items-center">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/09/Sass_logo-700x524.png"
                alt=""
              />
            </div>
            <div className="box-shadow p-12 rounded-2xl mix-blend-multiply">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6L_0SAjzIK2fM86z0YOfMIKoqO0gEawblQw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="box-shadow p-12 rounded-2xl mix-blend-multiply  flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3m6Q0F1OaOKAMXIP-wFKiVycXvupHr348A&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skill;
