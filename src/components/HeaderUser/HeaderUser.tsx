import { HeaderUserProps } from './types';

export const HeaderUser = ({ id, email, role }: HeaderUserProps) => {
  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div>
        {/*<img src="../../../public/icon_640.png" alt="avatar" />*/}
        <img src="./icon_640.png" alt="Avatar" style={{ width: '50px' }} />
      </div>
      <div>
        <div>
          <h1>Witaj użytkowniku (email) {email}</h1>
          <p>Twoje Id w systemie to: {id}</p>
          <p>Twoja rola w systemie to: {role}</p>
        </div>
      </div>
      <div>
        <button style={{ position: 'relative', display: 'inline-block' }}>LogOut</button>
        <button style={{ position: 'relative', display: 'inline-block' }}>Settings</button>
      </div>
    </header>
  );
};
