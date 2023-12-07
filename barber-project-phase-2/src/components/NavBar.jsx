import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";


/* define the NavBar component */
function NavBar({search, setSearch, isSearch, setIsSearch, setIsApp, setIsServices}) {

  const navigate = useNavigate();

  function handleClick() {
    setIsSearch(false);
    setIsServices(false);
    setIsApp(true);
    navigate(`/`);
  }

  return (
    <nav className="navbar">
      <div className="left-image">
        <img onClick={handleClick} src="https://media.discordapp.net/attachments/1169014161238401109/1181996408442736842/c16be0df4d505d93821edca14a589842.png?ex=658316f0&is=6570a1f0&hm=66f5a3aa68dc232f7e9c51159aee79623e07a87c27f10430b845b5213328b248&=&format=webp&quality=lossless&width=1782&height=936" alt="Logo"/>
      </div>
      <div className="center-image">
      {!isSearch ? null :
        <div className="center-item">
              <form>
                  <input type="text" placeholder="search for barbershop" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                  <button>Submit</button>
              </form>
          </div>}
      </div>
      <div class="right-images">
        <NavLink to="/home"><img className="nav-image" src="https://cdn.discordapp.com/attachments/1169014161238401109/1182077082168213604/Image_12-6-23_at_4.50_PM.jpg?ex=65836212&is=6570ed12&hm=6b8df38ed906e1a4cdd97c31f84bd18fe7ec04009f88c0d3092e3717cd527b2f&" alt="Home"/></NavLink>
        <NavLink to="/profile" className="nav-link"><img className="nav-image" src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="Profile"/></NavLink>
      </div>
    </nav>
  )
};

export default NavBar;




// return (
//   <nav className="navbar">
//     <NavLink to="/home" className="nav-link"><img className="nav-image" src="https://cdn.discordapp.com/attachments/1169014161238401109/1182077082168213604/Image_12-6-23_at_4.50_PM.jpg?ex=65836212&is=6570ed12&hm=6b8df38ed906e1a4cdd97c31f84bd18fe7ec04009f88c0d3092e3717cd527b2f&" alt="Home"/></NavLink>
//     <div className="center-container">
//       <h1 className="center-item"><img className="nav-image" src="https://media.discordapp.net/attachments/1169014161238401109/1181996408442736842/c16be0df4d505d93821edca14a589842.png?ex=658316f0&is=6570a1f0&hm=66f5a3aa68dc232f7e9c51159aee79623e07a87c27f10430b845b5213328b248&=&format=webp&quality=lossless&width=1782&height=936" alt="Logo"/></h1>
//       {!isSearch ? null :
//       <div className="center-item">
//             <form>
//                 <input type="text" placeholder="search for barbershop" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
//                 <button>Submit</button>
//             </form>
//         </div>}
//     </div>
//     <NavLink to="/profile" className="nav-link"><img className="nav-image" src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="Profile"/></NavLink>

//   </nav>
// );
// };

