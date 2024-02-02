export const UserComponent = ({ user }) => {
    return <h2>Bienvenido, {user ? user.username : 'Cargando...'}</h2>;
};
