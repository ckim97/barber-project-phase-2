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
        <img onClick={handleClick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8R7rD9Vh0d5abLZ3zUjdhvmhxyWKOytqsg&usqp=CAU" alt="Logo"/>
      </div>
      <div className="center-image">
      {!isSearch ? null :
        <div className="center-item">
              <form>
                  <input className="searchbar" type="text" placeholder="search for barbershop" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
              </form>
          </div>}
      </div>
      <div className="right-images">
        <NavLink to="/home"><img className="nav-image" src="data:image/png;base64,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" alt="Home"/></NavLink>
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

