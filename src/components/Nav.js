export default function Navbar({members}) {
    return (
      <nav>
        <ul className="nav">
          {members.map((member) => {
            const { id, username, image} = member;
              return <li key={id} className='nav-item'>
                  <img src={image} alt="!!!" className="icon"></img>
                  {username}
              </li>;
          })}
            </ul>

      </nav>
    );
}