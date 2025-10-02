import {IProfileUser} from "@/shared/types/profileUser.interfaces";
import {signOut} from "next-auth/react";

function ProfileUser( {session, status}: IProfileUser ){
    if (!session) {
        return <div>Нет авторизации</div>
    }

    const handleCloseSession = async (e) => {
        try {
            await signOut({
                redirect: false
            });
        }
        catch (error) {
            console.log(`Ошибка при выходе: ${error}`)
        }
    }

    return (
        <>
            <h1>Страница профиля</h1>
            <h2>Ваши данные</h2>

            {
                Boolean(session.user?.user) &&
                <>
                    <p>Имя {session.user?.user.username}</p>
                    <p>Имя {session.user?.user.email!}</p>
                </>
            }

            <button onClick={handleCloseSession}>Выйти из аккаунта</button>
        </>
    );
}

export default ProfileUser;