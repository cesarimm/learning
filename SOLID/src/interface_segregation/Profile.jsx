// Componente de perfil de usuario que incluye información, y una lista de amigos.
// No todos los usuarios tienen la lista de amigos. Siguiendo el ISP,
// deberíamos separar estas responsabilidades en componentes más pequeños.

const UserProfile = ({ name, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

// Principio de Segregación de Interfaces en React significa crear componentes con
// props y responsabilidades bien definidas, evitando sobrecargar componentes con
// lógica o datos que no son esenciales para su propósito principal

const UserFriends = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>{friend.name}</li>
            ))}
        </ul>
    );
};

export const FullUserProfile = ({ user }) => {
    return (
        <div>
            <UserProfile name={user.name} email={user.email} />
            {user.friends && <UserFriends friends={user.friends} />}
        </div>
    );
};
