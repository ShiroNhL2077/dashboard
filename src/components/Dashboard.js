export default function Dashboard({ members }) {
  return (
    <main id="dashboard">
      {members.map((member) => {
        const { id, name, age, username, skills, image } = member;
        return (
          <article key={id} className="member">
            <h2>{username} </h2>
            <img src={image} alt="!!!" className="member-img"></img>
            <h3>Full name: {name} </h3>
            <h3>Age: {age} </h3>
            <h3>Skills: </h3>
            {/* {{skills}.map((skill) => {
                          const { skill1, skill2 } = skill;
                        return (
                          <ul>
                            <li>{skill1} </li>
                            <li>{skill2} </li>
                          </ul>
                        );
                      })} */}
            <ul className="skills">
              <li>{skills.skill1} /&nbsp;</li>
              <li>{skills.skill2} </li>
            </ul>
          </article>
        );
      })}
    </main>
  );
}
