import { useState } from "react";

export default function Navbar({ members }) {
  // function toggleHidden() {
  //   const usr = document.getElementsByClassName("usr")
  //   usr.classList.toggle("hidden");
  // }

  const [isHovering, setIsHovering] = useState(false);

   const handleMouseOver = () => {
     setIsHovering(true);
   };

   const handleMouseOut = () => {
     setIsHovering(false);
   };

  return (
    <nav>
      <ul className="nav">
        {members.map((member) => {
          const { id, username, image } = member;
          return (
            <li
              key={id}
              className="nav-item"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img src={image} alt="!!!" className="icon"></img>
              <span className={isHovering ? "" : "hidden"}>{username}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
