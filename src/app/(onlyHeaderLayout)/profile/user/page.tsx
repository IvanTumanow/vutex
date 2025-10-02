import ProfileUserWrapper from "@/components/ui/Profile-user/profileUserWrapper";
import {useSession} from "next-auth/react";

export default function ProfilePage(  ) {
    return (
        <>
            <ProfileUserWrapper/>
        </>
    );
}
