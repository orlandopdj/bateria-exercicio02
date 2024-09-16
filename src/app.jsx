const Avatar = () => (
    <div>
        <img className='avatar' src='https://media.licdn.com/dms/image/v2/D4D03AQEHlqqMHx1_EQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724376516964?e=1731542400&v=beta&t=EPU2BBfb9iELS9eo5amhJnM07jfvbjgjWVMCKDGVjeE'
            alt="Avatar perfil" />

    </div>
)

const Intro = () => (
    <div className='info'>
        <h1>Orlando Junior</h1>
        <p>Sou um estudante de programação, onde busco a migração da carreira, atualmente trabalho em uma indústria de calçados, mas gostaria de trabalhar na área de tecnologia</p>
    </div>
)

const skill = [
    { id: crypto.randomUUID(), name: 'estudante', emoji: '🤟', bgColor: 'bg-lightblue' },
    { id: crypto.randomUUID(), name: 'inglês', emoji: '🤏', bgColor: 'bg-yellow' },
    { id: crypto.randomUUID(), name: 'culinária', emoji: '🤌', bgColor: 'bg-pink' },
    { id: crypto.randomUUID(), name: 'conversar pouco', emoji: '👎', bgColor: 'bg-red' },
]

const Skill = ({ name, emoji, bgColor }) => (
    <li className={`skill ${bgColor}`}>
        {emoji}{name}
    </li>
)


const ListOfSkills = () => (
    <ul className='list-of-skills'>
        {skill.map(({ id, name, emoji, bgColor }) => (
            <Skill key={id} name={name} emoji={emoji} bgColor={bgColor} />
        ))}
    </ul>
)

const App = () => (
    <>
        <div className="card">
            <Avatar />

            <div className="info">
                <Intro />
                <ListOfSkills />
            </div>
        </div>
    </>
)

export { App }
