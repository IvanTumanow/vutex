'use client'

import ProfileUser from "@/components/ui/Profile-user/profileUser";
import {useSession} from "next-auth/react";

function ProfileUserWrapper() {
    const { data: session, status } = useSession();

    return (
        <ProfileUser
            session={session}
            status={status}
        />
    )
}

export default ProfileUserWrapper;